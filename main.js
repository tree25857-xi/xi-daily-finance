// 🌸 晨曦金融網 - 主要腳本

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 晨曦金融網載入完成！');
    
    // 更新時間顯示
    updateTime();
    setInterval(updateTime, 1000);
    
    // 平滑滾動
    initSmoothScroll();
    
    // 導航效果
    initNavScroll();
});

// 更新時間
function updateTime() {
    const now = new Date();
    const taiwanTime = now.toLocaleString('zh-TW', { 
        timeZone: 'Asia/Taipei',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // 如果需要顯示時間，可以在這裡添加
}

// 平滑滾動
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 導航卷動效果
function initNavScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// 模擬報價更新（未來串接 API 時使用）
function updateQuote(symbol, price, change) {
    // 這是一個預留函數
    // 未來串接 API 時可以使用
    console.log(`更新報價: ${symbol} = ${price} (${change}%)`);
}

// 格式化數字
function formatNumber(num, decimals = 2) {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 格式化貨幣
function formatCurrency(num, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(num);
}

// 導出供其他地方使用
window.XiFinance = {
    updateQuote,
    formatNumber,
    formatCurrency
};
