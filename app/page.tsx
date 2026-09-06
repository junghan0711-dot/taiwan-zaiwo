import { ArrowDown, ArrowUpRight, ArrowRight, Sprout, Recycle, Leaf, Sun, MoveUpRight } from 'lucide-react';
import { SiteHeader, BusinessFields } from './site-interactions';

const circle = [
 {no:'01',title:'有機剩餘',copy:'連結餐飲、農業與在地料源，從源頭分類開始。',tag:'重新看待資源'},
 {no:'02',title:'堆肥轉化',copy:'規劃合適的處理、熟成與品質管理，形成可利用的資材。',tag:'讓養分再生'},
 {no:'03',title:'回到田間',copy:'把養分帶回農業生產，連結土地照顧與農產品。',tag:'滋養土地'},
 {no:'04',title:'走進生活',copy:'透過農產品、教育與參與，讓更多人理解循環。',tag:'一起創造價值'},
];
const partners = [
 {no:'01',label:'企業與組織',headline:'讓永續，與在地發生關係。',body:'從農產品採購、員工參與到場域教育，探索與企業目標相連的合作方式。',tags:'企業參與 ／ 農產採購 ／ 永續合作'},
 {no:'02',label:'學校與教育夥伴',headline:'把教室，延伸到土地。',body:'以食農、資源循環與樸門設計為主題，規劃能觀察、提問與動手實作的學習。',tags:'食農教育 ／ 樸門學習 ／ 循環體驗'},
 {no:'03',label:'地方與專業夥伴',headline:'把各自的專長，種在一起。',body:'連結農業、循環技術、照護與就業支持，尋找有清楚分工、能持續的合作。',tags:'在地協作 ／ 技術連結 ／ 農福共好'},
];

export default function Home() {
 return <>
 <a className="skip-link" href="#main">跳至主要內容</a>
 <SiteHeader/>
 <main id="main">
  <section className="hero" id="top" aria-labelledby="hero-title">
   <img className="hero-image" src="images/soil-hero.webp" alt="翠綠幼苗從深色土壤生長，AI生成品牌意象" width={1536} height={1024} fetchPriority="high"/>
   <div className="hero-wash" aria-hidden="true"/>
   <div className="hero-content wrap">
    <p className="eyebrow light"><span className="live-dot"/> 扎根大溪・共創永續</p>
    <h1 id="hero-title">讓土地，<br/><em>再次豐沃。</em></h1>
    <p className="hero-description">把循環帶回土地，<br/>讓每一種生命，都有好好生長的可能。</p>
    <a className="button lime" href="#about">探索台灣再沃 <ArrowDown size={18} aria-hidden="true"/></a>
   </div>
   <div className="hero-bottom wrap"><span>從一塊土地，連結更好的生活。</span><a href="#about">向下探索 <ArrowDown size={14} aria-hidden="true"/></a></div>
   <span className="hero-credit">AI 生成品牌意象</span>
  </section>

  <div className="values-strip" aria-label="品牌理念"><div className="wrap"><span><Recycle size={17} aria-hidden="true"/> 土地再生</span><span><Leaf size={17} aria-hidden="true"/> 生命共好</span><span><Sun size={18} aria-hidden="true"/> 地方永續</span><span className="strip-english">ROOTED IN DAXI. GROWING TOGETHER.</span></div></div>

  <section className="intro wrap" id="about" aria-labelledby="about-title">
   <div className="intro-aside"><p className="eyebrow">01 / 關於再沃</p><span className="intro-word" aria-hidden="true">再</span><p className="intro-caption">再一次，<br/>看見土地的可能。</p></div>
   <div><h2 id="about-title">土地的下一步，<br/>我們一起走。</h2><p>一把堆肥，可以是新生的開始。<br/>一座農莊，也可以讓耕作、學習與照顧相遇。</p><p>台灣再沃以桃園大溪為起點，整合菓嶺農莊、大溪小慈心與相關工作，連結資源循環、農業經營、永續教育及農福連攜。</p><p>我們希望讓這些工作彼此支持，把對土地的想像，慢慢做成能持續的日常。</p><div className="intro-signature"><span className="signature-line"/><span>台灣再沃 · 從大溪出發</span></div></div>
  </section>

  <section className="fields-section" id="fields" aria-labelledby="fields-title">
   <div className="wrap">
    <div className="section-heading"><div><p className="eyebrow light">02 / 五大業務</p><h2 id="fields-title">五個方向。<br/><span>同一片未來。</span></h2></div><p className="section-intro">從土壤到生活，從生產到照顧。<br/>五項事業正逐步整合與規劃，<br/>共同走向人與自然共好的未來。</p></div>
    <BusinessFields/>
   </div>
  </section>

  <section className="cycle-section wrap" id="cycle" aria-labelledby="cycle-title">
   <div className="section-heading"><div><p className="eyebrow">03 / 循環之道</p><h2 id="cycle-title">每一次回到土地，<br/>都是新的開始。</h2></div><p className="section-intro dark-copy">我們正在規劃的循環路徑，<br/>把資源、生產與生活重新連起來。</p></div>
   <div className="cycle-story"><figure className="soil-figure"><img src="images/compost-hands.webp" alt="雙手將堆肥撒入土壤，AI生成品牌意象" width={1536} height={1024} loading="lazy"/><figcaption>從一把土，開始理解循環。<span>AI 生成品牌意象</span></figcaption></figure><div className="cycle-statement"><span className="round-icon"><Recycle size={35} strokeWidth={1.2} aria-hidden="true"/></span><p>剩餘，<br/>也能成為<br/><em>下一次豐盛。</em></p><span>循環農業，是再沃連結五大業務的起點。</span></div></div>
   <ol className="cycle-steps">{circle.map((s,i)=><li key={s.no}><div className="step-top"><span>{s.no}</span>{i<3?<ArrowRight size={24} aria-hidden="true"/>:<Recycle size={24} aria-hidden="true"/>}</div><h3>{s.title}</h3><p>{s.copy}</p><small>{s.tag}</small></li>)}</ol>
   <div className="cycle-loop"><Recycle size={18} aria-hidden="true"/><p>農業殘體再回到循環的起點，讓一次次生產，都有機會延續養分。</p></div>
   <p className="cycle-disclosure">以上為發展構想；收運、處理、場地與產品使用，將依合作條件及適用規範逐步落實。</p>
  </section>

  <section className="together-section" id="together" aria-labelledby="together-title"><div className="wrap">
   <div className="section-heading"><div><p className="eyebrow">04 / 一起參與</p><h2 id="together-title">有一種合作，<br/>能讓彼此生長。</h2></div><p className="section-intro dark-copy">從一個共同關心的議題開始，<br/>找到適合彼此的參與方式。</p></div>
   <div className="partner-list">{partners.map(p=><article key={p.no} className="partner-row"><div className="partner-label"><span>{p.no}</span><h3>{p.label}</h3></div><div className="partner-body"><h4>{p.headline}</h4><p>{p.body}</p><span className="partner-tags">{p.tags}</span></div><MoveUpRight size={34} strokeWidth={1} aria-hidden="true" className="partner-icon"/></article>)}</div>
   <div className="contact-note"><span className="contact-status"><span/> 合作窗口籌備中</span><p>聯絡方式與參與資訊，將於準備完成後在此公布。</p></div>
  </div></section>

  <section className="closing"><div className="wrap"><p className="eyebrow light">從現在開始，為未來耕作。</p><h2>讓土地更好，<br/>也讓我們一起更好。</h2><a className="button lime" href="#fields">認識我們的方向 <ArrowUpRight size={19} aria-hidden="true"/></a><span className="closing-type" aria-hidden="true">GROW TOGETHER.</span></div></section>
 </main>
 <footer className="site-footer"><div className="wrap footer-main"><a className="brand" href="#top" aria-label="回到台灣再沃首頁"><Sprout aria-hidden="true"/><span>台灣再沃<small>TAIWAN ZAIWO</small></span></a><p>桃園・大溪<br/><span>循環農業 × 永續教育 × 生命共好</span></p><nav aria-label="頁尾導覽"><a href="#about">關於再沃</a><a href="#fields">五大業務</a><a href="#cycle">循環之道</a><a href="#together">一起參與</a></nav></div><div className="wrap footer-bottom"><span>© 2026 台灣再沃</span><span>品牌與事業籌備中</span><a href="#top">回到頂端 ↑</a></div></footer>
 </>;
}
