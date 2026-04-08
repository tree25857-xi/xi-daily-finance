import { useState } from 'react';
import { Shield, Star, LineChart, Zap, History, Settings, HelpCircle, LogOut, List } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sidebar() {
  const [activeLabel, setActiveLabel] = useState('數據分析');

  const navItems = [
    { icon: Star, label: '自選列表' },
    { icon: LineChart, label: '數據分析' },
    { icon: Zap, label: '交易信號' },
    { icon: History, label: '歷史記錄' },
    { icon: Settings, label: '系統設置' },
    { icon: List, label: 'Watchlist' },
  ];

  return (
    <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 flex-col bg-background border-r border-primary/10 z-40">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 bg-gradient-to-br from-secondary-container to-secondary rounded flex items-center justify-center">
            <Shield className="text-background fill-current" size={24} />
          </div>
          <div>
            <h3 className="text-secondary font-headline font-bold text-sm">私人財富管理</h3>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">機構級標準</p>
          </div>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item, idx) => {
            const isActive = activeLabel === item.label;
            return (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                onClick={() => setActiveLabel(item.label)}
                className={`px-3 py-2 transition-all duration-200 cursor-pointer flex items-center gap-3 rounded group ${
                  isActive 
                    ? 'text-secondary bg-primary-container/40 border-r-2 border-secondary shadow-[inset_0_0_20px_rgba(233,195,73,0.05)]' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary-container/20'
                }`}
              >
                <item.icon size={18} className={isActive ? 'fill-current' : ''} />
                <span className="font-body text-xs font-medium tracking-wide">{item.label}</span>
              </motion.div>
            );
          })}
        </nav>

        <div className="mt-8">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ opacity: 0.8 }}
            className="w-full py-3 bg-gradient-to-r from-primary-container to-primary/30 text-primary border border-primary/30 rounded font-headline text-xs font-bold uppercase tracking-widest transition-all duration-200"
          >
            立即交易
          </motion.button>
        </div>
      </div>

      <div className="mt-auto p-6 space-y-1">
        <div className="px-3 py-2 text-on-surface-variant hover:text-primary transition-all duration-200 cursor-pointer flex items-center gap-3">
          <HelpCircle size={18} />
          <span className="font-body text-xs font-medium tracking-wide">客戶支援</span>
        </div>
        <div className="px-3 py-2 text-on-surface-variant hover:text-primary transition-all duration-200 cursor-pointer flex items-center gap-3">
          <LogOut size={18} />
          <span className="font-body text-xs font-medium tracking-wide">登出</span>
        </div>
      </div>
    </aside>
  );
}
