# 🌸 網站設計參考模板

## 來源
OpenClaw Skills 學習中心 UI (2026-03-17)

---

## 🎨 設計風格

### 色彩系統
```css
:root {
  --bg: #020617;           /* 深色背景 */
  --bg-elevated: #0f172a; /* 卡片背景 */
  --border-subtle: #1f2937;/* 邊界線 */
  --text-main: #e5e7eb;    /* 主要文字 */
  --text-muted: #9ca3af;   /* 輔助文字 */
  --primary: #22d3ee;       /* 主要強調色 (青色) */
  --accent: #6366f1;        /* 輔助強調色 (紫色) */
  --success: #22c55e;       /* 成功 */
  --warning: #eab308;       /* 警告 */
  --danger: #f97316;        /* 危險 */
}
```

### 字體
- 系統字體優先：system-ui, -apple-system, BlinkMacSystemFont
- 中文字體：Noto Sans TC, Segoe UI

### 設計元素
- 卡片式佈局
- 圓角邊界 (border-radius)
- 微妙陰影 (box-shadow)
- 渐变背景 (gradient)
- 深色主題 (dark theme)

---

## 📐 版面結構

### 1. 導覽列 (Navigation)
- 固定頂部 (sticky)
- 毛玻璃效果 (backdrop-filter: blur)
- 品牌標誌 + 連結項目

### 2. 區塊 (Section)
- 最大寬度限制 (max-width)
- 卡片式邊框
- 標題 + 描述 + 內容

### 3. 標籤頁 (Tabs)
- 標籤切換
- 內容面板顯示/隱藏

### 4. 表格 (Table)
- 樣式化表格
- 風險/難度 標籤 (pill tags)

### 5. 手風琴 (Accordion)
- 可折疊的內容區塊

---

## 🏷️ 設計標籤樣式

### 難度標籤
| 類型 | 顏色 |
|------|------|
| 簡單 | 🟢 綠色 |
| 中等 | 🟡 黃色 |
| 困難 | 🟠 橙色 |

### 風險標籤
| 類型 | 顏色 |
|------|------|
| 低風險 | 🟢 綠色 |
| 中風險 | 🟡 黃色 |
| 高風險 | 🟠 橙色 |

---

## 📝 備註

這是我們網站的設計參考模板！
未來製作晨曦日報、研究報告等頁面時，可以參考這個風格。

---

*記錄時間：2026-03-17*
*記錄者：曦曦*
