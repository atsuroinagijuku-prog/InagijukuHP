// ===== 共通：お問い合わせフォーム（Formspree経由） =====
const ContactForm = ({ accent = '#8B1E3F', dark = false, variant = 'default' }) => {
  const [status, setStatus] = React.useState('idle'); // idle|sending|sent|error
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', grade: '', type: 'parent', plan: '', message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(window.JUKU_DATA.contact.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `[稲義塾] 無料相談のお申し込み（${form.name}様）`,
        }),
      });
      if (res.ok) setStatus('sent');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
    color: dark ? 'rgba(255,255,255,0.85)' : '#333',
  };
  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    fontSize: 15,
    border: dark ? '1px solid rgba(255,255,255,0.25)' : '1px solid #d4d4d4',
    borderRadius: variant === 'sharp' ? 0 : 6,
    background: dark ? 'rgba(255,255,255,0.06)' : '#fff',
    color: dark ? '#fff' : '#111',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  };

  if (status === 'sent') {
    return (
      <div style={{
        padding: '48px 32px',
        textAlign: 'center',
        background: dark ? 'rgba(255,255,255,0.04)' : '#fafafa',
        border: dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e5e5e5',
        borderRadius: variant === 'sharp' ? 0 : 8,
      }}>
        <div style={{ fontSize: 48, marginBottom: 12, color: accent }}>✓</div>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: dark ? '#fff' : '#111' }}>
          お申し込みを受け付けました
        </div>
        <div style={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.7)' : '#666', lineHeight: 1.7 }}>
          2営業日以内にご登録のメールアドレスへご連絡いたします。<br />
          ありがとうございました。
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>お名前 <span style={{ color: accent }}>*</span></label>
          <input required style={inputStyle} value={form.name}
            onChange={e => setForm({...form, name: e.target.value})} />
        </div>
        <div>
          <label style={labelStyle}>ご本人 / 保護者様</label>
          <select style={inputStyle} value={form.type}
            onChange={e => setForm({...form, type: e.target.value})}>
            <option value="parent">保護者</option>
            <option value="student">生徒本人</option>
            <option value="both">両方で参加希望</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>メールアドレス <span style={{ color: accent }}>*</span></label>
          <input required type="email" style={inputStyle} value={form.email}
            onChange={e => setForm({...form, email: e.target.value})} />
        </div>
        <div>
          <label style={labelStyle}>電話番号（任意）</label>
          <input type="tel" style={inputStyle} value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>学年</label>
          <select style={inputStyle} value={form.grade}
            onChange={e => setForm({...form, grade: e.target.value})}>
            <option value="">選択してください</option>
            {['中1','中2','中3','高1','高2','高3'].map(g => <option key={g}>{g}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>興味のあるプラン（任意）</label>
          <select style={inputStyle} value={form.plan}
            onChange={e => setForm({...form, plan: e.target.value})}>
            <option value="">未定 / 相談したい</option>
            <option>プランA（月5万円）</option>
            <option>プランB（月3万円）</option>
            <option>プランC（月2万円）</option>
            <option>プランD（月5千円）</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>ご相談内容（任意）</label>
        <textarea rows={4} style={{...inputStyle, resize: 'vertical', fontFamily: 'inherit'}}
          placeholder="現在の学習状況、気になっていること、質問などご自由にお書きください。"
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})} />
      </div>
      {status === 'error' && (
        <div style={{
          padding: 12, background: '#fee', color: '#b00', fontSize: 13,
          borderRadius: variant === 'sharp' ? 0 : 6,
        }}>
          送信に失敗しました。しばらく経ってから再度お試しいただくか、LINEでご連絡ください。
        </div>
      )}
      <button type="submit" disabled={status==='sending'} style={{
        padding: '16px 32px',
        fontSize: 16,
        fontWeight: 700,
        background: accent,
        color: '#fff',
        border: 'none',
        borderRadius: variant === 'sharp' ? 0 : 6,
        cursor: 'pointer',
        letterSpacing: '0.05em',
        fontFamily: 'inherit',
        opacity: status === 'sending' ? 0.6 : 1,
      }}>
        {status === 'sending' ? '送信中...' : '無料相談を申し込む'}
      </button>
      <div style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.5)' : '#888', textAlign: 'center' }}>
        * 送信された内容はGmail宛に届きます。2営業日以内にご返信します。
      </div>
    </form>
  );
};

// ===== 共通：プレースホルダー画像（早稲田佐賀の校舎・寮生活をイメージ） =====
const Placeholder = ({ width='100%', height=240, label='photo', accent='#8B1E3F', dark=false }) => (
  <div style={{
    width, height,
    background: dark
      ? `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 10px, rgba(255,255,255,0.06) 10px 20px)`
      : `repeating-linear-gradient(45deg, #f0ebe6 0 10px, #e8e2dc 10px 20px)`,
    border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #d9d3cc',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'ui-monospace, Menlo, monospace',
    fontSize: 11,
    letterSpacing: '0.1em',
    color: dark ? 'rgba(255,255,255,0.4)' : '#999',
    textTransform: 'uppercase',
  }}>
    [ {label} ]
  </div>
);

Object.assign(window, { ContactForm, Placeholder });
