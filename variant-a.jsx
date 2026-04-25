// ===================================================================
// 【A案】伝統派・教育機関然
// 縦組み見出し、罫線、和の余白、セリフ体、えんじ色は控えめなアクセント
// ===================================================================
const VariantA = () => {
  const D = window.JUKU_DATA;
  const enji = '#8B1E3F';
  const ink = '#1a1a2e';
  const paper = '#fbf9f5';
  const rule = '#d6cfc4';

  const serifHead = { fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", serif', fontWeight: 700, color: ink };
  const serifBody = { fontFamily: '"Noto Serif JP", "Yu Mincho", serif', fontWeight: 400 };
  const gothic = { fontFamily: '"Noto Sans JP", sans-serif' };

  const Rule = ({ label, num }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, margin: '0 0 48px 0' }}>
      <div style={{ ...gothic, fontSize: 11, letterSpacing: '0.3em', color: enji, fontWeight: 700 }}>
        第 {num} 項
      </div>
      <div style={{ flex: 1, borderTop: `1px solid ${rule}` }}></div>
      <div style={{ ...serifHead, fontSize: 28, letterSpacing: '0.1em' }}>{label}</div>
    </div>
  );

  return (
    <div style={{
      width: 1440,
      background: paper,
      color: ink,
      ...gothic,
      fontSize: 15,
      lineHeight: 1.85,
    }}>
      {/* ========== TOP BAR ========== */}
      <div style={{
        borderBottom: `1px solid ${rule}`,
        padding: '18px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: paper,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <div style={{ ...serifHead, fontSize: 22, letterSpacing: '0.15em' }}>稲義塾</div>
          <div style={{ fontSize: 11, color: '#777', letterSpacing: '0.2em' }}>INAGI-JUKU · est. 2021</div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: '#555' }}>
          {[
            {label: '想い', href: '#story'},
            {label: '講師', href: '#teacher'},
            {label: '実績', href: '#results'},
            {label: '料金', href: '#plans'},
            {label: 'FAQ', href: '#faq'},
            {label: 'お問い合わせ', href: '#contact'},
          ].map(t => (
            <a key={t.label} href={t.href} style={{
              letterSpacing: '0.1em', color: '#555', textDecoration: 'none',
              transition: 'color .15s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.color = enji}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >{t.label}</a>
          ))}
        </div>
      </div>

      {/* ========== HERO ========== */}
      <section style={{ padding: '100px 64px 120px', position: 'relative' }}>

        <div style={{ fontSize: 13, color: enji, letterSpacing: '0.4em', marginBottom: 32, fontWeight: 600 }}>
          早稲田佐賀高等学校・中学校 専門
        </div>
        <h1 style={{
          ...serifHead,
          fontSize: 88,
          lineHeight: 1.25,
          letterSpacing: '0.05em',
          margin: '0 0 40px 0',
        }}>
          <span style={{ color: enji }}>早稲田佐賀</span><br />
          専門塾。
        </h1>
        <div style={{ ...serifBody, fontSize: 18, maxWidth: 640, lineHeight: 2.0, color: '#333' }}>
          稲義塾は、早稲田佐賀中学校・高等学校の生徒のためだけに設計された、オンライン家庭教師塾です。
          講師は全員、同校の卒業生。寮生活も、定期テストも、内部進学も、一般受験も。
          すべての道を自らの足で歩いた卒業生が、あなたに伴走します。
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 56 }}>
          <a href="#contact" style={{
            ...gothic, fontSize: 14, fontWeight: 700,
            padding: '18px 40px', background: enji, color: '#fff',
            letterSpacing: '0.2em', textDecoration: 'none',
            border: `1px solid ${enji}`,
          }}>
            無料相談を申し込む
          </a>
          <a href="#plans" style={{
            ...gothic, fontSize: 14, fontWeight: 500,
            padding: '18px 40px', background: 'transparent', color: ink,
            letterSpacing: '0.2em', textDecoration: 'none',
            border: `1px solid ${ink}`,
          }}>
            料金を確認する
          </a>
        </div>

        {/* 数字で見る */}
        <div style={{
          marginTop: 100, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '36px 0',
        }}>
          {[
            {n:'5年',l:'早稲田佐賀生の指導歴'},
            {n:'100%',l:'講師は早稲田佐賀卒業生'},
            {n:'0円',l:'入塾金・教材費・追加費用'},
            {n:'24/365',l:'LINE連絡対応'},
          ].map((s,i)=>(
            <div key={i} style={{
              borderLeft: i===0 ? 'none' : `1px solid ${rule}`,
              padding: '0 28px',
            }}>
              <div style={{ ...serifHead, fontSize: 42, letterSpacing: '0.02em', color: ink }}>
                {s.n}
              </div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 6, letterSpacing: '0.15em' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 塾長の想い・講師紹介（統合） ========== */}
      <section id="story" style={{ padding: '100px 64px', background: '#fff', borderTop: `1px solid ${rule}` }}>
        <Rule label="塾長の想い" num="一" />
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <img src="assets/yoshida.png" alt="吉田 篤郎" style={{
              width: 280, height: 360, objectFit: 'cover', display: 'block',
              border: `1px solid ${rule}`,
            }} />
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 11, color: enji, letterSpacing: '0.25em', fontWeight: 600, marginBottom: 8 }}>
                PRINCIPAL / 塾長
              </div>
              <div style={{ ...serifHead, fontSize: 24, marginBottom: 4 }}>吉田 篤郎</div>
              <div style={{ fontSize: 12, color: '#888', letterSpacing: '0.15em' }}>Atsuro Yoshida</div>
              <div style={{ marginTop: 18, padding: 16, background: paper, fontSize: 12, lineHeight: 1.9 }}>
                <div style={{ color: enji, fontWeight: 700, marginBottom: 6, letterSpacing: '0.1em' }}>専門領域</div>
                {D.teachers[0].specialty}
              </div>
            </div>
          </div>
          <div>
            <div style={{ ...serifHead, fontSize: 32, lineHeight: 1.8, marginBottom: 32, color: enji }}>
              成績ビリから、早稲田へ。<br />
              その道のりのすべてを、<br />
              後輩たちに手渡したい。
            </div>
            {D.story.paragraphs.map((p, i) => (
              <p key={i} style={{ ...serifBody, fontSize: 16, lineHeight: 2.1, marginBottom: 20 }}>
                {p}
              </p>
            ))}

            {/* 経歴 */}
            <div style={{
              marginTop: 40, padding: '28px 32px', background: paper,
              borderLeft: `3px solid ${enji}`,
            }}>
              <div style={{ fontSize: 11, color: enji, letterSpacing: '0.3em', fontWeight: 700, marginBottom: 16 }}>
                — 吉田 篤郎の経歴
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px' }}>
                {D.teachers[0].bio.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, fontSize: 14, padding: '4px 0' }}>
                    <div style={{ color: enji, fontWeight: 700 }}>—</div>
                    <div>{b}</div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 20, paddingTop: 20, borderTop: `1px dashed ${rule}`,
                ...serifBody, fontSize: 15, lineHeight: 1.9, color: '#333', fontStyle: 'italic',
              }}>
                「{D.teachers[0].quote}」
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 強み ========== */}
      <section id="teacher" style={{ padding: '100px 64px', background: ink, color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <div style={{ ...gothic, fontSize: 11, letterSpacing: '0.3em', color: '#d4a5b5', fontWeight: 700 }}>
            第 二 項
          </div>
          <div style={{ flex: 1, borderTop: `1px solid rgba(255,255,255,0.2)` }}></div>
          <div style={{ ...serifHead, fontSize: 28, color: '#fff', letterSpacing: '0.1em' }}>
            稲義塾の六つの強み
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {D.strengths.map((s, i) => (
            <div key={i} style={{
              borderLeft: `2px solid ${enji}`, paddingLeft: 24, paddingBottom: 8,
            }}>
              <div style={{ fontSize: 11, color: '#d4a5b5', letterSpacing: '0.3em', marginBottom: 10, fontWeight: 600 }}>
                0{i+1}
              </div>
              <div style={{ ...serifHead, fontSize: 22, color: '#fff', marginBottom: 14, lineHeight: 1.5 }}>
                {s.title}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.9, color: 'rgba(255,255,255,0.75)' }}>
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 寮生対応 ========== */}
      <section style={{ padding: '100px 64px', background: '#fff' }}>
        <Rule label="寮生の受講について" num="三" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ ...serifHead, fontSize: 36, lineHeight: 1.6, marginBottom: 28 }}>
              寮生対応可能。
            </div>
            <p style={{ ...serifBody, fontSize: 16, lineHeight: 2.0, marginBottom: 20 }}>
              早稲田佐賀の寮生活を6年間経験した講師だからこそ、寮のリズム、門限、学習環境の制約をすべて理解しています。
            </p>
            <div style={{ display: 'grid', gap: 14, marginTop: 32 }}>
              {[
                '配布されたiPad、持ち込みPCでZoom授業が可能',
                '休日は応接室・市役所等での対応も可',
                '中学2年生・3年生の寮生が現在も在籍',
                'テスト期間中は集中的に授業を組める',
                '教材は学校の参考書を基本とし、追加費用なし',
              ].map((t,i)=>(
                <div key={i} style={{ display: 'flex', gap: 16, fontSize: 15 }}>
                  <div style={{ color: enji, fontWeight: 700, fontSize: 18 }}>◆</div>
                  <div>{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="assets/waseda-campus.png" alt="早稲田大学キャンパス 大隈像と大隈講堂" style={{
              width: '100%', height: 440, objectFit: 'cover', display: 'block',
              border: `1px solid ${rule}`,
            }} />
            <div style={{
              marginTop: 12, fontSize: 11, color: '#888', letterSpacing: '0.15em', textAlign: 'right',
            }}>
              早稲田大学 大隈重信像・大隈記念講堂
            </div>
          </div>
        </div>
      </section>

      {/* ========== 実績 ========== */}
      <section id="results" style={{ padding: '100px 64px', background: paper }}>
        <Rule label="2026年度 合格実績" num="四" />

        {/* 内部進学サマリー */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 40, alignItems: 'center',
          maxWidth: 900, margin: '0 auto 64px',
          padding: '32px 48px',
          background: '#fff', border: `1px solid ${rule}`,
          position: 'relative',
        }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: enji, letterSpacing: '0.3em', fontWeight: 700, marginBottom: 6 }}>
              INTERNAL ADMISSION
            </div>
            <div style={{ ...serifHead, fontSize: 18, lineHeight: 1.6 }}>
              早稲田大学<br />内部進学者
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...serifHead, fontSize: 76, color: enji, lineHeight: 1, letterSpacing: '0.02em' }}>
              23<span style={{ fontSize: 32, marginLeft: 6 }}>名</span>
            </div>
          </div>
          <div style={{ fontSize: 13, color: '#555', lineHeight: 1.9 }}>
            これまで指導した生徒のうち、<br />
            <span style={{ color: enji, fontWeight: 700 }}>23名</span>が早稲田佐賀からの<br />
            内部進学で早稲田大学へ。
          </div>
        </div>

        <div style={{
          ...serifHead, fontSize: 15, color: '#666', textAlign: 'center',
          letterSpacing: '0.25em', marginBottom: 32,
        }}>
          — 内部推薦 2026年度実績 —
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {D.results2026.map((r, i) => (
            <div key={i} style={{
              background: '#fff', padding: 40, border: `1px solid ${rule}`,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0,
                background: enji, color: '#fff', padding: '6px 14px',
                fontSize: 11, letterSpacing: '0.2em', fontWeight: 700,
              }}>
                第一志望 合格
              </div>
              <div style={{ marginTop: 24, fontSize: 13, color: '#888', letterSpacing: '0.15em' }}>
                {r.student}
              </div>
              <div style={{ ...serifHead, fontSize: 24, lineHeight: 1.5, marginTop: 12 }}>
                早稲田大学<br />
                <span style={{ color: enji }}>{r.detail.split(' ')[0]}</span>
              </div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
                {r.detail.split(' ').slice(1).join(' ')}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, fontSize: 12, color: '#888', textAlign: 'center', letterSpacing: '0.1em' }}>
          ※ プライバシー保護のため、生徒名はイニシャル表記としています。
        </div>
      </section>

      {/* ========== 料金 ========== */}
      <section id="plans" style={{ padding: '100px 64px', background: '#fff' }}>
        <Rule label="料金体系" num="五" />
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ ...serifBody, fontSize: 18, color: '#333' }}>
            入塾金・教材費・長期休み講習・科目追加 — <span style={{ color: enji, fontWeight: 700 }}>すべて 0円</span>。
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {D.plans.map((p) => (
            <div key={p.id} style={{
              background: p.recommended ? ink : '#fff',
              color: p.recommended ? '#fff' : ink,
              border: p.recommended ? `2px solid ${enji}` : `1px solid ${rule}`,
              padding: 28,
              position: 'relative',
            }}>
              {p.recommended && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: enji, color: '#fff', padding: '4px 16px',
                  fontSize: 10, letterSpacing: '0.25em', fontWeight: 700,
                }}>
                  RECOMMENDED
                </div>
              )}
              <div style={{
                fontSize: 11, letterSpacing: '0.3em',
                color: p.recommended ? '#d4a5b5' : '#888',
                fontWeight: 700,
              }}>
                PLAN {p.id}
              </div>
              <div style={{ ...serifHead, fontSize: 32, marginTop: 16, color: p.recommended ? '#fff' : ink }}>
                ¥{p.price.toLocaleString()}
                <span style={{ fontSize: 13, color: p.recommended ? '#d4a5b5' : '#888', marginLeft: 6 }}>/月</span>
              </div>
              <div style={{
                fontSize: 13, padding: '14px 0', margin: '16px 0',
                borderTop: p.recommended ? '1px solid rgba(255,255,255,0.2)' : `1px solid ${rule}`,
                borderBottom: p.recommended ? '1px solid rgba(255,255,255,0.2)' : `1px solid ${rule}`,
                fontWeight: 600,
              }}>
                {p.mentoring}
              </div>
              <div style={{ display: 'grid', gap: 8 }}>
                {p.features.map((f, i) => (
                  <div key={i} style={{ fontSize: 12, display: 'flex', gap: 8, lineHeight: 1.5 }}>
                    <span style={{ color: enji }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" style={{ padding: '100px 64px', background: paper }}>
        <Rule label="よくあるご質問" num="六" />
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {D.faq.map((f, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${rule}`, padding: '24px 0' }}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'start' }}>
                <div style={{ ...serifHead, fontSize: 24, color: enji, lineHeight: 1, marginTop: 2 }}>問</div>
                <div style={{ ...serifHead, fontSize: 18, flex: 1 }}>{f.q}</div>
              </div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'start', marginTop: 16 }}>
                <div style={{ ...serifHead, fontSize: 24, color: '#888', lineHeight: 1, marginTop: 2 }}>答</div>
                <div style={{ ...serifBody, fontSize: 15, flex: 1, lineHeight: 1.9, color: '#444' }}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== お問い合わせ ========== */}
      <section id="contact" style={{ padding: '100px 64px', background: ink, color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <div style={{ ...gothic, fontSize: 11, letterSpacing: '0.3em', color: '#d4a5b5', fontWeight: 700 }}>
            第 七 項
          </div>
          <div style={{ flex: 1, borderTop: `1px solid rgba(255,255,255,0.2)` }}></div>
          <div style={{ ...serifHead, fontSize: 28, color: '#fff', letterSpacing: '0.1em' }}>
            無料相談のお申し込み
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <div style={{ ...serifHead, fontSize: 32, lineHeight: 1.6, marginBottom: 24, color: '#fff' }}>
              まずは、お話を<br />
              聞かせてください。
            </div>
            <p style={{ ...serifBody, fontSize: 15, lineHeight: 2.0, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
              現在の学習状況、不安に思っていること、目指している進路 — どんな段階のご相談でも構いません。
              まずは保護者様だけのご相談も歓迎しています。
            </p>
            <div style={{ display: 'grid', gap: 16, fontSize: 13 }}>
              <div style={{
                paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.15)',
                display: 'grid', gridTemplateColumns: '100px 1fr', gap: 20, alignItems: 'center',
              }}>
                <div style={{ background: '#fff', padding: 6, display: 'inline-block' }}>
                  <img src="assets/line-qr.png" alt="LINE QRコード" style={{ width: 88, height: 88, display: 'block' }} />
                </div>
                <div>
                  <div style={{ color: '#d4a5b5', letterSpacing: '0.2em', marginBottom: 6 }}>LINE</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.1em' }}>
                    QRコードから友だち追加
                  </div>
                </div>
              </div>
              <div style={{ paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ color: '#d4a5b5', letterSpacing: '0.2em', marginBottom: 4 }}>EMAIL</div>
                <div>{D.contact.email}</div>
              </div>
              <div>
                <div style={{ color: '#d4a5b5', letterSpacing: '0.2em', marginBottom: 4 }}>RESPONSE</div>
                <div>2営業日以内にご返信</div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm accent={enji} dark={true} variant="sharp" />
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer style={{ padding: '40px 64px', background: '#0d0d1a', color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ ...serifHead, fontSize: 18, color: '#fff', marginBottom: 6 }}>稲義塾</div>
            <div>© 2026 Inagi-juku. All rights reserved.</div>
          </div>
          <div style={{ letterSpacing: '0.2em' }}>早稲田佐賀専門オンライン家庭教師</div>
        </div>
      </footer>
    </div>
  );
};

window.VariantA = VariantA;
