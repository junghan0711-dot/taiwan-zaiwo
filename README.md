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
- 目前為私人檢視版本，搜尋索引關閉。公開前確認正式名稱、營運狀態、聯絡方式與圖片。

## 內容與圖片

業務方向依台灣再沃籌備資料整理，不揭露內部財務、個資或契約，不將規劃描述為既有成果。

`public/images/soil-hero.webp` 與 `compost-hands.webp` 為本次生成的品牌意象，頁面已標示 AI 生成；不是實際農莊紀錄。未來可換成經授權的實景照片。

設計研究參考 https://greenmeet.tw/farms 的自然敘事，未複製其照片與文案。
