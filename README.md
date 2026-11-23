# 校園生存挑戰：青春冒險 RPG

一款使用 HTML、CSS、JavaScript 製作的校園情境選擇遊戲，可直接部署至 GitHub Pages。

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可遊玩。

## 部署到 GitHub Pages

1. 登入 GitHub，建立一個新的 Public repository，例如 `campus-survival-rpg`。
2. 將 `index.html`、`style.css`、`script.js`、`README.md` 上傳到 repository 根目錄。
3. 進入 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選擇 `main`，資料夾選擇 `/ (root)`，按下 **Save**。
6. 等待 GitHub Pages 部署完成，便會取得可分享的網站網址。

## 遊戲功能

- 開始畫面、遊戲畫面、結束畫面
- 五個校園生活情境
- 每題四個選項與即時回饋
- 勇氣值計分、任務進度條
- 依總分顯示 S/A/B/C 四種結局
- 可重新開始遊戲

## 修改題目

可在 `script.js` 最上方的 `missions` 陣列修改情境、選項、分數與回饋。
