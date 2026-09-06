'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Sprout, Recycle, Wheat, HeartHandshake, Trees, HandHeart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';

const links = [
 {href:'#about',label:'關於再沃'},
 {href:'#fields',label:'五大業務'},
 {href:'#cycle',label:'循環之道'},
 {href:'#together',label:'一起參與'},
];

export function SiteHeader() {
 const [open,setOpen] = useState(false);
 const [scrolled,setScrolled] = useState(false);
 useEffect(()=>{ const update=()=>setScrolled(window.scrollY>60); update(); window.addEventListener('scroll',update,{passive:true}); return()=>window.removeEventListener('scroll',update);},[]);
 return <header className={'site-header'+(scrolled?' scrolled':'')}>
  <a className="brand" href="#top" aria-label="台灣再沃首頁"><Sprout aria-hidden="true"/><span>台灣再沃<small>TAIWAN ZAIWO</small></span></a>
  <nav className="desktop-nav" aria-label="主要導覽">{links.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</nav>
  <a className="nav-action" href="#together">共創可能 <ArrowUpRight size={17} aria-hidden="true"/></a>
  <Sheet open={open} onOpenChange={setOpen}>
   <SheetTrigger className="mobile-menu" aria-label="開啟網站選單"><Menu size={25}/></SheetTrigger>
   <SheetContent className="mobile-sheet" showCloseButton={false}>
    <div className="sheet-heading"><SheetTitle>台灣再沃</SheetTitle><SheetClose className="sheet-close" aria-label="關閉選單"><X size={24}/></SheetClose></div>
    <SheetDescription>從土地開始，探索再沃的故事。</SheetDescription>
    <nav aria-label="行動版主要導覽">{links.map((l,i)=><a href={l.href} key={l.href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{l.label}<ArrowUpRight size={21}/></a>)}</nav>
    <p className="sheet-note">扎根大溪・共創永續</p>
   </SheetContent>
  </Sheet>
 </header>;
}

const fields = [
 {id:'cycle-field',no:'01',name:'廚餘堆肥循環再利用',short:'廚餘循環',english:'RESOURCE REGENERATION',heading:<>把剩餘，<br/>還給土地。</>,description:'從廚餘、農業殘體與木屑出發，規劃料源、堆肥與品質管理，讓有機資源重新回到農業生產。',items:['在地資源連結','堆肥與品質管理','農業資材再利用'],icon:Recycle,link:'#cycle',linkLabel:'看見循環的路徑',note:'讓資源有去處，讓土地有養分。'},
 {id:'farm-field',no:'02',name:'農莊經營商業管理',short:'農莊經營',english:'FARM & EVERYDAY LIFE',heading:<>從田間，<br/>走進日常。</>,description:'以菓嶺農莊相關工作為基礎，整合農業生產、產品、通路與場域經營，探索能長久運作的農莊生活。',items:['農業生產與產品','通路與企業採購','場域與日常營運'],icon:Wheat,link:'#together',linkLabel:'探索合作方向',note:'照顧一塊田，也照顧與它相連的人。'},
 {id:'life-field',no:'03',name:'小慈心護生園區',short:'護生園區',english:'CARE FOR ALL LIFE',heading:<>留一個位置，<br/>給每種生命。</>,description:'以尊重生命為出發點，規劃護生園區與照護合作。從動物、環境到照護者，逐步釐清適合這片土地的照顧方式。',items:['生命尊重','園區照護合作','友善環境規劃'],icon:HeartHandshake,link:'#together',linkLabel:'探索參與方向',note:'溫柔的照顧，需要能持續的日常。'},
 {id:'perma-field',no:'04',name:'大溪樸門永續基地',short:'樸門基地',english:'LEARN WITH NATURE',heading:<>向自然學習，<br/>在土地實踐。</>,description:'把樸門設計、永續生活與生態教育連在一起，規劃示範系統、體驗課程及社群參與，讓學習從親手接觸土地開始。',items:['樸門設計','永續教育與體驗','社群與企業參與'],icon:Trees,link:'#together',linkLabel:'探索教育合作',note:'把理解自然，變成生活的能力。'},
 {id:'care-field',no:'05',name:'農福連攜庇護工場',short:'農福連攜',english:'GROW WITH EVERYONE',heading:<>讓每一份能力，<br/>都有生長的空間。</>,description:'探索農業生產與身障者就業支持的連結，規劃合適的工作設計、訓練與支持，與專業夥伴一起尋找可持續的農福合作模式。',items:['友善工作設計','就業支持與訓練','農業與社福合作'],icon:HandHeart,link:'#together',linkLabel:'探索農福合作',note:'目前為發展規劃，庇護工場設立及服務依核定條件推進。'},
];

export function BusinessFields() {
 return <Tabs defaultValue="cycle-field" orientation="vertical" className="business-tabs">
  <TabsList aria-label="五大業務介紹" className="business-list" variant="line">
   {fields.map(f=><TabsTrigger key={f.id} value={f.id} className="business-trigger"><span className="field-number">{f.no}</span><span className="field-label">{f.short}<small>{f.english}</small></span><ArrowUpRight className="field-arrow" aria-hidden="true"/></TabsTrigger>)}
  </TabsList>
  <div className="business-panels">
   {fields.map(f=><TabsContent key={f.id} value={f.id} className="business-panel">
    <div className="panel-top"><span className="status-label">發展規劃</span><f.icon size={36} strokeWidth={1.25} aria-hidden="true"/></div>
    <p className="panel-name">{f.name}</p>
    <h3>{f.heading}</h3>
    <p className="panel-description">{f.description}</p>
    <ul className="field-tags">{f.items.map(i=><li key={i}>{i}</li>)}</ul>
    <p className="field-note">{f.note}</p>
    <a href={f.link} className="text-link">{f.linkLabel}<ArrowRight size={19} aria-hidden="true"/></a>
    <span className="panel-ghost-number" aria-hidden="true">{f.no}</span>
   </TabsContent>)}
  </div>
 </Tabs>;
}

