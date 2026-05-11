// Daily Finance News - Main JavaScript

// 格式化日期
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  return date.toLocaleDateString('zh-TW', options);
}

// 獲取今日日期字符串
function getTodayString() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

// 渲染新聞卡片
function renderNewsCard(news) {
  return `
    <article class="news-card category-${news.category}">
      <span class="news-category">${news.categoryLabel}</span>
      <h3>${news.title}</h3>
      <p>${news.summary}</p>
      <div class="news-meta">
        <span>${news.source}</span>
        <span>${news.time}</span>
      </div>
    </article>
  `;
}

// 載入新聞數據
async function loadNews() {
  const today = getTodayString();
  
  try {
    const response = await fetch(`data/${today}.json`);
    const newsData = await response.json();
    
    // 渲染頭條
    const headlineContainer = document.getElementById('headline-news');
    headlineContainer.innerHTML = newsData.headlines.map(renderNewsCard).join('');
    
    // 渲染分類新聞
    document.getElementById('market-news').innerHTML = 
      newsData.market.map(renderNewsCard).join('');
    document.getElementById('tech-news').innerHTML = 
      newsData.tech.map(renderNewsCard).join('');
    document.getElementById('global-news').innerHTML = 
      newsData.global.map(renderNewsCard).join('');
      
  } catch (error) {
    console.log('今日新聞尚未發布');
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadNews();
});
