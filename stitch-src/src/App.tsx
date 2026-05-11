/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import HotMoneyTracker from './components/HotMoneyTracker';
import TechnicalAnalysis from './components/TechnicalAnalysis';
import DailyReport from './components/DailyReport';
import MarketOverview from './components/MarketOverview';
import { LayoutGrid, TrendingUp, Wallet, Newspaper } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-secondary selection:text-background">
      <TopNav />
      
      <div className="flex min-h-[1024px] relative">
        <Sidebar />
        
        <main className="flex-1 md:ml-64 p-6 md:p-12 space-y-12 bg-background">
          <HotMoneyTracker />
          
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TechnicalAnalysis />
            <DailyReport />
          </section>
          
          <MarketOverview />
          
          {/* Footer */}
          <footer className="w-full py-6 mt-auto border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 w-full gap-4">
              <p className="font-body text-[10px] tracking-widest uppercase opacity-60 text-on-surface-variant">
                © 2026 Sovereign Vault. 機構級流動性提供商。
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <a className="font-body text-[10px] tracking-widest uppercase text-secondary hover:text-primary transition-opacity duration-300" href="#">市場狀態：開放中</a>
                <a className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-opacity duration-300" href="#">隱私政策</a>
                <a className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-opacity duration-300" href="#">服務條款</a>
                <a className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-opacity duration-300" href="#">風險披露</a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-primary/10 px-6 py-4 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-secondary">
          <LayoutGrid size={20} />
          <span className="text-[8px] uppercase font-bold">主頁</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <TrendingUp size={20} />
          <span className="text-[8px] uppercase font-bold">市場</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <Wallet size={20} />
          <span className="text-[8px] uppercase font-bold">資產</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <Newspaper size={20} />
          <span className="text-[8px] uppercase font-bold">新聞</span>
        </button>
      </nav>
    </div>
  );
}

