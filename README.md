# 台灣再沃官網

公開網站：https://junghan0711-dot.github.io/taiwan-zaiwo/

## GitHub Pages 發布

使用 `npm run build:pages` 產生含預先渲染內容的靜態網站至 `docs/`，將原始碼與 `docs/` 一起提交並推送至 GitHub `main`。Pages 從 `main` 的 `/docs` 自動發布。互動由 React 接續載入，圖片路徑支援 `/taiwan-zaiwo/` 子目錄。`pages/index.html` 管理公開網站標題、描述與標準網址；原 Sites 私人預覽保留。

2026-09-06 品牌籌備版。呈現品牌理念、五大業務規劃、循環流程與合作方向。

## 維護

- `app/page.tsx`：主要內容。
- `app/site-interactions.tsx`：業務切換與手機選單。
- `app/globals.css`：品牌色彩、版型與響應式樣式。
- `npm run dev` 啟動本機；`npm run build` 建置。
- 聯絡資訊依使用者指示暫不放入，取得正式 Email、電話或 LINE 後再補。
- GitHub Pages 已依使用者指示公開，允許搜尋索引；原 Sites 私人預覽維持不索引。業務仍以籌備規劃口吻呈現，正式資訊取得後再更新。

## 內容與圖片

業務方向依台灣再沃籌備資料整理，不揭露內部財務、個資或契約，不將規劃描述為既有成果。

圖片皆為內建圖像工具生成的品牌情境意象，頁面已標示 AI 生成；不是實際農莊或活動紀錄。未來可換成經授權的實景照片。

2026-09-06 圖像擴充：在原有幼苗與堆肥兩張圖片之外，新增農園、採收、護生、樸門、農福、剩餘資源、企業參與、教育與地方合作九張主題圖。預設首頁有22個圖片位置，五大業務切換後各有主圖；圖片使用WebP、480／960／1536像素來源與延遲載入。

圖片保存在 `public/images/`，用途與替代文字由 `lib/brand-imagery.ts` 管理；生成提示詞與來源紀錄見 [IMAGE_SOURCES.md](IMAGE_SOURCES.md)。

設計研究參考 https://greenmeet.tw/farms 的自然敘事，未複製其照片與文案。
