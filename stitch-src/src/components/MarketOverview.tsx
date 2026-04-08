import { useState, useEffect } from 'react';
import { Bitcoin, Apple, Euro, Bell, BellRing, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const INITIAL_ASSETS = [
  { 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    price: 64231.50, 
    change: '+3.42%', 
    volume: '$32.4B', 
    trend: [40, 60, 50, 80, 100],
    icon: Bitcoin,
    iconBg: 'bg-[#F7931A]/20',
    positive: true,
    isCrypto: true
  },
  { 
    name: 'Apple Inc.', 
    symbol: 'AAPL', 
    price: 172.62, 
    change: '-1.14%', 
    volume: '$5.8B', 
    trend: [90, 70, 50, 40, 30],
    icon: Apple,
    iconBg: 'bg-white/10',
    positive: false,
    isCrypto: false
  },
  { 
    name: '歐元 / 美元', 
    symbol: 'EUR/USD', 
    price: 1.0842, 
    change: '+0.04%', 
    volume: '$142.1B', 
    trend: [40, 42, 41, 43, 44],
    icon: Euro,
    iconBg: 'bg-primary/20',
    positive: true,
    isCrypto: false
  },
];

interface Alert {
  id: string;
  symbol: string;
  targetPrice: number;
  type: 'above' | 'below';
}

interface Notification {
  id: string;
  message: string;
  symbol: string;
  type: 'success' | 'info';
}

export default function MarketOverview() {
  const [assets, setAssets] = useState(INITIAL_ASSETS);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<typeof INITIAL_ASSETS[0] | null>(null);
  const [alertPrice, setAlertPrice] = useState('');
  const [alertType, setAlertType] = useState<'above' | 'below'>('above');

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prev => prev.map(asset => {
        const volatility = asset.isCrypto ? 0.001 : 0.0002;
        const change = 1 + (Math.random() * volatility * 2 - volatility);
        return { ...asset, price: asset.price * change };
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Check alerts
  useEffect(() => {
    alerts.forEach(alert => {
      const asset = assets.find(a => a.symbol === alert.symbol);
      if (!asset) return;

      const triggered = alert.type === 'above' 
        ? asset.price >= alert.targetPrice 
        : asset.price <= alert.targetPrice;

      if (triggered) {
        const id = Math.random().toString(36).substr(2, 9);
        setNotifications(prev => [
          ...prev, 
          { 
            id, 
            message: `${asset.symbol} 已達到目標價格 ${alert.targetPrice.toLocaleString()}`, 
            symbol: asset.symbol,
            type: 'success'
          }
        ]);
        // Remove alert after triggering
        setAlerts(prev => prev.filter(a => a.id !== alert.id));
      }
    });
  }, [assets, alerts]);

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const openAlertModal = (asset: typeof INITIAL_ASSETS[0]) => {
    setSelectedAsset(asset);
    setAlertPrice(asset.price.toFixed(2));
    setIsAlertModalOpen(true);
  };

  const saveAlert = () => {
    if (!selectedAsset || !alertPrice) return;
    const newAlert: Alert = {
      id: Math.random().toString(36).substr(2, 9),
      symbol: selectedAsset.symbol,
      targetPrice: parseFloat(alertPrice),
      type: alertType
    };
    setAlerts(prev => [...prev, newAlert]);
    setIsAlertModalOpen(false);
    
    // Add a confirmation notification
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [
      ...prev,
      {
        id,
        message: `已為 ${selectedAsset.symbol} 設置價格提醒 (${alertType === 'above' ? '高於' : '低於'} ${parseFloat(alertPrice).toLocaleString()})`,
        symbol: selectedAsset.symbol,
        type: 'info'
      }
    ]);
  };

  return (
    <section className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl border border-primary/5 relative">
      {/* Notifications Overlay */}
      <div className="fixed top-20 right-8 z-[100] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {notifications.map(notif => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto min-w-[300px] glass-panel border border-primary/20 p-4 rounded-xl shadow-2xl flex items-start gap-3"
            >
              <div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                notif.type === 'success' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
              }`}>
                {notif.type === 'success' ? <BellRing size={16} /> : <AlertCircle size={16} />}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface uppercase tracking-widest mb-1">價格提醒</p>
                <p className="text-sm text-on-surface-variant leading-tight">{notif.message}</p>
              </div>
              <button 
                onClick={() => removeNotification(notif.id)}
                className="text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-8 border-b border-outline-variant/10 flex justify-between items-end">
        <div>
          <h2 className="font-headline text-2xl font-bold tracking-tight mb-1 text-on-surface">市場概況</h2>
          <p className="text-xs text-on-surface-variant">實時機構級流動性數據源</p>
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <button className="text-secondary border-b border-secondary pb-1">所有資產</button>
          <button className="hover:text-on-surface transition-colors">加密貨幣</button>
          <button className="hover:text-on-surface transition-colors">股票</button>
          <button className="hover:text-on-surface transition-colors">外匯</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
              <th className="px-8 py-4">資產名稱</th>
              <th className="px-8 py-4 text-right">當前價格</th>
              <th className="px-8 py-4 text-right">24H 漲跌</th>
              <th className="px-8 py-4 text-right">24H 成交量</th>
              <th className="px-8 py-4 text-center">走勢圖</th>
              <th className="px-8 py-4 text-center">提醒</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {assets.map((asset, idx) => (
              <motion.tr 
                key={idx}
                whileHover={{ backgroundColor: 'rgba(27, 46, 68, 0.3)' }}
                className="transition-colors cursor-pointer group"
              >
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${asset.iconBg} flex items-center justify-center`}>
                      <asset.icon size={18} className={asset.name === 'Bitcoin' ? 'text-[#F7931A]' : 'text-on-surface'} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface">{asset.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{asset.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-right font-headline font-bold text-sm text-on-surface">
                  {asset.symbol === 'EUR/USD' ? asset.price.toFixed(4) : `$${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                </td>
                <td className={`px-8 py-6 text-right font-bold text-sm ${asset.positive ? 'text-secondary' : 'text-error'}`}>
                  {asset.change}
                </td>
                <td className="px-8 py-6 text-right text-on-surface-variant text-xs">{asset.volume}</td>
                <td className="px-8 py-6">
                  <div className="w-24 h-8 ml-auto flex items-end gap-[2px]">
                    {asset.trend.map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                        className={`w-1 rounded-t-sm ${asset.positive ? 'bg-secondary' : 'bg-error'}`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="px-8 py-6 text-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); openAlertModal(asset); }}
                    className={`p-2 rounded-full transition-colors ${
                      alerts.some(a => a.symbol === asset.symbol) 
                        ? 'text-secondary bg-secondary/10' 
                        : 'text-on-surface-variant hover:text-primary hover:bg-primary-container/30'
                    }`}
                  >
                    {alerts.some(a => a.symbol === asset.symbol) ? <BellRing size={16} /> : <Bell size={16} />}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alert Modal */}
      <AnimatePresence>
        {isAlertModalOpen && selectedAsset && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAlertModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-surface-container-high border border-primary/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="font-headline font-bold text-xl text-on-surface">設置價格提醒</h3>
                <button onClick={() => setIsAlertModalOpen(false)} className="text-on-surface-variant hover:text-on-surface">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-primary/5">
                  <div className={`w-10 h-10 rounded-full ${selectedAsset.iconBg} flex items-center justify-center`}>
                    <selectedAsset.icon size={20} className={selectedAsset.name === 'Bitcoin' ? 'text-[#F7931A]' : 'text-on-surface'} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{selectedAsset.name}</p>
                    <p className="text-xs text-on-surface-variant">當前價格: {selectedAsset.symbol === 'EUR/USD' ? selectedAsset.price.toFixed(4) : `$${selectedAsset.price.toLocaleString()}`}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">提醒類型</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setAlertType('above')}
                        className={`py-2 px-4 rounded-lg text-xs font-bold transition-all ${
                          alertType === 'above' ? 'bg-secondary text-background' : 'bg-surface-container-highest text-on-surface-variant'
                        }`}
                      >
                        高於目標價
                      </button>
                      <button 
                        onClick={() => setAlertType('below')}
                        className={`py-2 px-4 rounded-lg text-xs font-bold transition-all ${
                          alertType === 'below' ? 'bg-secondary text-background' : 'bg-surface-container-highest text-on-surface-variant'
                        }`}
                      >
                        低於目標價
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">目標價格</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={alertPrice}
                        onChange={(e) => setAlertPrice(e.target.value)}
                        className="w-full bg-background border border-primary/20 rounded-lg py-3 px-4 text-on-surface font-headline font-bold focus:outline-none focus:border-secondary transition-colors"
                        placeholder="輸入價格..."
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant font-bold">
                        {selectedAsset.symbol}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface-container-highest/50 flex gap-3">
                <button 
                  onClick={() => setIsAlertModalOpen(false)}
                  className="flex-1 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-highest transition-colors"
                >
                  取消
                </button>
                <button 
                  onClick={saveAlert}
                  className="flex-1 py-3 bg-secondary text-background rounded-lg text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:opacity-80 transition-all"
                >
                  確認設置
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

