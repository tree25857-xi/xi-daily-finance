import { Bell, Wallet } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="bg-background docked full-width top-0 z-50 sticky border-b border-primary/10">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-tighter text-secondary font-headline">SovereignVault</span>
          <nav className="hidden md:flex items-center gap-6">
            <a className="font-headline tracking-tighter text-sm uppercase text-secondary border-b-2 border-secondary pb-1" href="#">主頁面</a>
            <a className="font-headline tracking-tighter text-sm uppercase text-primary/70 hover:text-primary transition-colors duration-300" href="#">市場</a>
            <a className="font-headline tracking-tighter text-sm uppercase text-primary/70 hover:text-primary transition-colors duration-300" href="#">投資組合</a>
            <a className="font-headline tracking-tighter text-sm uppercase text-primary/70 hover:text-primary transition-colors duration-300" href="#">新聞</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:bg-primary-container/50 p-2 transition-colors duration-300 rounded-full">
            <Bell size={20} />
          </button>
          <button className="text-primary hover:bg-primary-container/50 p-2 transition-colors duration-300 rounded-full">
            <Wallet size={20} />
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-secondary/30">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/user123/100/100"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
