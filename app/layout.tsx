import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: '台灣再沃｜讓土地，再次豐沃',
 description: '台灣再沃以大溪為起點，連結廚餘循環、農莊經營、小慈心護生園區、大溪樸門永續基地與農福連攜，讓人與自然一起好。',
 metadataBase: new URL('https://taiwan-zaiwo.sassy-lyric-9444.chatgpt.site'),
 openGraph: {title:'台灣再沃｜讓土地，再次豐沃',description:'從一塊土地，連結循環農業、永續教育與生命照顧。',locale:'zh_TW',type:'website'},
 robots: {index:false,follow:false},
 icons: {icon:'/favicon.svg'},
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
 return <html lang="zh-Hant-TW"><body>{children}</body></html>;
}
