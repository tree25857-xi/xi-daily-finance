import { CandlestickChart } from 'lucide-react';
import { motion } from 'motion/react';

export default function TechnicalAnalysis() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">技術分析</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-primary-container text-primary text-[10px] font-bold uppercase rounded-full">1小時</button>
          <button className="px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase rounded-full transition-colors">4小時</button>
          <button className="px-3 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase rounded-full transition-colors">日線</button>
        </div>
      </div>

      <div className="aspect-video w-full bg-background border border-primary/10 rounded-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent z-10 pointer-events-none"></div>
        <img 
          alt="BTC/USD Trading Chart" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
          src="https://picsum.photos/seed/tradingchart/1200/800?blur=2"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 flex items-center gap-4 glass-panel px-4 py-2 rounded-lg border border-primary/20 z-20">
          <div>
            <h4 className="text-lg font-bold font-headline text-on-surface">BTC / USD</h4>
            <p className="text-xs text-secondary font-bold">$64,231.50 <span className="ml-2 opacity-60">▲ 2.45%</span></p>
          </div>
          <div className="w-[1px] h-8 bg-outline-variant opacity-30"></div>
          <CandlestickChart className="text-primary" size={24} />
        </div>
      </div>
    </div>
  );
}
