import { Flame } from 'lucide-react';
import { motion } from 'motion/react';

const tickers = [
  { symbol: 'BTC', change: '+12.4%', label: '成交量變化 (1小時)', progress: 80, color: 'secondary' },
  { symbol: 'AAPL', change: '+2.1%', label: '機構資金流', progress: 33, color: 'primary' },
  { symbol: 'NVDA', change: '+18.9%', label: '社群情緒', progress: 92, color: 'secondary' },
  { symbol: 'EUR/USD', change: '+0.4%', label: '波動率指數', progress: 25, color: 'primary' },
  { symbol: 'TSLA', change: '+5.2%', label: '期權成交量', progress: 66, color: 'secondary' },
];

export default function HotMoneyTracker() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface flex items-center gap-2">
          <Flame className="text-secondary fill-current" size={24} />
          熱錢追蹤器
        </h2>
        <span className="text-[10px] tracking-widest uppercase opacity-40 font-label">實時流速</span>
      </div>
      
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {tickers.map((ticker, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ backgroundColor: 'var(--color-surface-container-highest)' }}
            className={`min-w-[200px] p-4 bg-surface-container-high rounded-lg border-l-2 ${
              ticker.color === 'secondary' ? 'border-secondary' : 'border-primary'
            } transition-colors duration-300`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-headline font-bold text-lg text-on-surface">{ticker.symbol}</span>
              <span className={`text-xs font-bold ${ticker.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                {ticker.change}
              </span>
            </div>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{ticker.label}</p>
            <div className="mt-2 h-1 w-full bg-primary-container rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${ticker.progress}%` }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                className={`h-full ${ticker.color === 'secondary' ? 'bg-secondary' : 'bg-primary'}`} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
