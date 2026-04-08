import { Globe, Newspaper, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function DailyReport() {
  return (
    <div className="lg:col-span-1">
      <div className="h-full bg-primary-container/20 rounded-xl p-8 border border-primary/10 flex flex-col">
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-bold mb-2 block">深度觀察</span>
          <h3 className="font-headline text-3xl font-bold leading-tight mb-4 text-on-surface">每日報告</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed font-light">
            聯準會近期關於利率趨於穩定的信號，催化了資金顯著流向高成長性股票板塊。
          </p>
        </div>

        <div className="space-y-6 flex-1">
          <div className="flex gap-4">
            <div className="h-10 w-10 shrink-0 bg-surface-container-highest rounded-full flex items-center justify-center text-secondary">
              <Globe size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold mb-1 text-on-surface">全球情緒</h4>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 w-32 bg-surface-container-high rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '68%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-error to-secondary" 
                  />
                </div>
                <span className="text-[10px] font-bold text-on-surface">貪婪 (68)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-10 w-10 shrink-0 bg-surface-container-highest rounded-full flex items-center justify-center text-primary">
              <Newspaper size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold mb-1 text-on-surface">頭條新聞</h4>
              <p className="text-xs text-on-surface-variant">歐洲央行維持利率不變，通膨率趨近目標下限。</p>
            </div>
          </div>
        </div>

        <motion.button 
          whileHover={{ x: 5 }}
          className="mt-8 group flex items-center justify-between w-full p-4 bg-surface-container-highest rounded-lg hover:bg-secondary hover:text-background transition-all duration-300"
        >
          <span className="text-xs font-bold uppercase tracking-widest">完整分析報告</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
}
