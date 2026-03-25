import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Coins, 
  Wand2, 
  Link as LinkIcon, 
  ArrowDown, 
  CheckCircle2, 
  Lock, 
  User, 
  Key, 
  History,
  AlertTriangle,
  ChevronRight,
  Wallet,
  Clock,
  HandHeart,
  Umbrella,
  Moon,
  Fingerprint,
  Database,
  ArrowRight,
  Info,
  Zap,
  Scale,
  Eye,
  Activity,
  FileText,
  LifeBuoy,
  ExternalLink,
  Plus,
  BookOpen,
  HelpCircle,
  Twitter,
  Github
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type RecoveryPath = 'family-password' | 'direct-transfer';

interface VaultState {
  isSetup: boolean;
  depositAmount: number;
  path: RecoveryPath | null;
  heirHandle: string;
  isVetoPeriod: boolean;
  daysRemaining: number;
}

// --- Components ---

const Badge = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="inline-flex items-center gap-2 bg-midnight-purple/10 text-midnight-purple border border-midnight-purple/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
    <Icon size={14} />
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-panel p-8 hover:midnight-glow transition-all duration-500 group">
    <div className="w-12 h-12 bg-midnight-purple/10 rounded-2xl flex items-center justify-center mb-6 text-midnight-purple group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const RiskItem = ({ risk, mitigation }: { risk: string, mitigation: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
    <div className="flex items-center gap-2 text-amber-500">
      <AlertTriangle size={16} />
      <span className="text-xs font-bold uppercase tracking-wider">Risk</span>
    </div>
    <p className="text-sm font-medium">{risk}</p>
    <div className="h-px bg-white/10 w-full" />
    <div className="flex items-center gap-2 text-emerald-400">
      <CheckCircle2 size={16} />
      <span className="text-xs font-bold uppercase tracking-wider">Mitigation</span>
    </div>
    <p className="text-sm text-gray-400">{mitigation}</p>
  </div>
);

export default function App() {
  const [demoMode, setDemoMode] = useState<'setup' | 'inheritance'>('setup');
  const [setupStep, setSetupStep] = useState(0);
  const [inheritanceStep, setInheritanceStep] = useState(0);
  const [recoveryPath, setRecoveryPath] = useState<RecoveryPath>('family-password');
  const [heirHandle, setHeirHandle] = useState('');
  const [showRisks, setShowRisks] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const resetDemo = () => {
    setSetupStep(0);
    setInheritanceStep(0);
    setHeirHandle('');
  };

  return (
    <div className="min-h-screen selection:bg-midnight-blue/30 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20 pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-midnight-purple/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-midnight-blue/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge icon={Shield}>Midnight Network Native Utility</Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-8 font-display"
          >
            Family Heirloom —<br />
            <span className="text-gradient">What Midnight Was Built For</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed mb-12"
          >
            A self-funding, zero-knowledge inheritance utility built as a lightweight add-on for any Cardano wallet. Solving the #1 unsolved problem in crypto: <span className="text-white font-medium">“What happens to my assets when I die?”</span>
          </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 text-lg font-bold bg-midnight-purple rounded-2xl shadow-lg shadow-midnight-purple/30 flex items-center gap-3 hover:scale-105 transition-all active:scale-95"
              >
                Try the Interactive Demo
                <ArrowDown size={20} />
              </button>
              <button 
                onClick={() => setShowDocs(true)}
                className="px-10 py-5 text-lg font-bold bg-white/5 border border-midnight-purple/30 rounded-2xl flex items-center gap-3 hover:bg-midnight-purple/10 transition-all active:scale-95"
              >
                View Developer Docs
                <BookOpen size={20} />
              </button>
              <button 
                onClick={() => setShowRisks(true)}
                className="px-10 py-5 text-lg font-bold bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all active:scale-95"
              >
                Risk & Mitigation
                <Scale size={20} />
              </button>
              <button 
                onClick={() => setShowFAQ(true)}
                className="px-10 py-5 text-lg font-bold bg-white/5 border border-midnight-blue/30 rounded-2xl flex items-center gap-3 hover:bg-midnight-blue/10 transition-all active:scale-95"
              >
                FAQ
                <HelpCircle size={20} />
              </button>
            </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {['Lace', 'Eternl', 'Nami', 'Yoroi'].map(wallet => (
              <div key={wallet} className="text-xl font-bold tracking-widest">{wallet}</div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5">
        <div className="text-center mb-20">
          <Badge icon={Umbrella}>Midnight Umbrella Architecture</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Two-Layer Security Model</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Family Heirloom leverages Midnight's unique multi-layer structure to provide perpetual, private, and compliant inheritance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[30%] right-[30%] h-px bg-gradient-to-r from-midnight-purple to-midnight-blue opacity-20" />

          {/* Layer 0 */}
          <div className="glass-panel p-10 border-midnight-purple/20 relative">
            <div className="absolute -top-4 left-10 bg-midnight-purple px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Layer 0</div>
            <div className="w-14 h-14 bg-midnight-purple/10 rounded-2xl flex items-center justify-center mb-8 text-midnight-purple">
              <Moon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Midnight Umbrella</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">The zero-knowledge privacy and legal compliance foundation. Everything below is shielded by Midnight's core protocol.</p>
            <ul className="space-y-3 text-xs text-gray-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-midnight-purple" /> ZK-Privacy by default</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-midnight-purple" /> Regulatory compliance hooks</li>
            </ul>
          </div>

          {/* Layer 1 */}
          <div className="glass-panel p-10 border-midnight-purple/40 midnight-glow relative">
            <div className="absolute -top-4 left-10 bg-midnight-purple px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Layer 1</div>
            <div className="w-14 h-14 bg-midnight-purple/10 rounded-2xl flex items-center justify-center mb-8 text-midnight-purple">
              <Fingerprint size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">$cryptopassport</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">The identity & compliance root. User completes KYC once. This is where the 100 NIGHT is staked to fund the ecosystem.</p>
            <div className="bg-white/5 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                <span>Staking Rewards</span>
                <span className="text-midnight-purple">100% to Devs</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-midnight-purple w-full" />
              </div>
              <p className="text-[10px] text-gray-500">Funds upkeep, KYC maintenance, and legal opinions.</p>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="glass-panel p-10 border-midnight-blue/40 blue-glow relative">
            <div className="absolute -top-4 left-10 bg-midnight-blue px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">Layer 2</div>
            <div className="w-14 h-14 bg-midnight-blue/10 rounded-2xl flex items-center justify-center mb-8 text-midnight-blue">
              <Database size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">$familyheirloom</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">The actual vault layer. User creates sub-handles (e.g. johnsvault.familyheirloom). Funded by DUST from Layer 1.</p>
            <div className="bg-midnight-blue/5 border border-midnight-blue/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-midnight-blue mb-2">
                <Zap size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">DUST Powered</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-relaxed">All Layer 1 DUST is redirected to the <span className="text-white font-medium">$familyheirloom</span> root handle to perpetually fund security and maintenance for all vaults. <span className="text-midnight-blue">Zero ongoing cost to user.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMICS SECTION */}
      <section className="bg-midnight-card/30 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge icon={Coins}>100 NIGHT Economics</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">The Perpetual Endowment Model</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Instead of monthly subscriptions that can fail, Family Heirloom uses a one-time refundable deposit to create a self-sustaining security engine.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Refundable Deposit", desc: "100 NIGHT is staked into the $cryptopassport pool. It remains yours and is fully refunded to heirs after inheritance." },
                { title: "Zero User Rewards", desc: "You forgo staking rewards in exchange for perpetual vault maintenance and legal compliance." },
                { title: "Developer Upkeep", desc: "Staking income pays for KYC, server upkeep, and the legal framework that protects your legacy." },
                { title: "DUST Redirection", desc: "All DUST is pooled at the $familyheirloom root handle to pay for global ZK proofs and notary calls." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-midnight-purple/20 flex items-center justify-center text-midnight-purple shrink-0 mt-1">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel p-8 md:p-12 border-white/5 relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-midnight-purple rounded-xl flex items-center justify-center">
                    <Coins size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Vault Balance</p>
                    <p className="text-2xl font-bold tracking-tighter">100.00 NIGHT</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Status</p>
                  <div className="text-xs text-emerald-400 font-bold flex items-center gap-1 justify-end">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Staking Active
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative h-24 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500 mb-2">Layer 1 Pool</p>
                      <div className="w-12 h-12 bg-midnight-purple/10 rounded-full flex items-center justify-center text-midnight-purple mx-auto">
                        <Database size={20} />
                      </div>
                    </div>
                    <div className="flex-1 px-4 relative">
                      <div className="h-px bg-white/10 w-full" />
                      <motion.div 
                        animate={{ x: [0, 150, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-midnight-blue rounded-full shadow-[0_0_10px_#00D4FF]" 
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500 mb-2">Layer 2 Vault</p>
                      <div className="w-12 h-12 bg-midnight-blue/10 rounded-full flex items-center justify-center text-midnight-blue mx-auto">
                        <Shield size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Ongoing Maintenance</span>
                    <span className="text-emerald-400 font-bold">PAID BY DUST</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">ZK-Proof Generation</span>
                    <span className="text-emerald-400 font-bold">PAID BY DUST</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Legal Compliance</span>
                    <span className="text-emerald-400 font-bold">PAID BY STAKING</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-midnight-purple/20 blur-3xl rounded-[3rem] -z-10" />
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section id="demo" className="max-w-6xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <Badge icon={Zap}>Interactive Simulator</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Experience the Flow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">One button for everyone. Whether you're setting up your legacy or claiming an inheritance, the experience is seamless.</p>
        </div>

        <div className="glass-panel overflow-hidden border-white/5 shadow-2xl">
          {/* Demo Header */}
          <div className="bg-white/5 px-8 py-6 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-4">
              <button 
                onClick={() => { setDemoMode('setup'); resetDemo(); }}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${demoMode === 'setup' ? 'bg-midnight-purple text-white' : 'text-gray-500 hover:text-white'}`}
              >
                1. Setup (While Alive)
              </button>
              <button 
                onClick={() => { setDemoMode('inheritance'); resetDemo(); }}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${demoMode === 'inheritance' ? 'bg-midnight-blue text-black' : 'text-gray-500 hover:text-white'}`}
              >
                2. Inheritance (After Death)
              </button>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Midnight Mainnet
            </div>
          </div>

          <div className="p-8 md:p-20 min-h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {demoMode === 'setup' ? (
                <motion.div 
                  key="setup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-xl w-full"
                >
                  {setupStep === 0 && (
                    <div className="text-center space-y-8">
                      <div className="w-24 h-24 bg-midnight-purple/10 rounded-3xl flex items-center justify-center mx-auto text-midnight-purple">
                        <HandHeart size={48} />
                      </div>
                      <h3 className="text-3xl font-bold">Start Your Legacy</h3>
                      <p className="text-gray-400">Click the Family Heirloom button in your wallet to begin the setup process.</p>
                      <button 
                        onClick={() => setSetupStep(1)}
                        className="w-full py-5 bg-midnight-purple rounded-2xl text-xl font-bold hover:midnight-glow transition-all"
                      >
                        Family Heirloom / Helpline
                      </button>
                    </div>
                  )}

                  {setupStep === 1 && (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-midnight-purple/10 rounded-xl flex items-center justify-center text-midnight-purple font-bold">1</div>
                        <h3 className="text-2xl font-bold">Layer 1: Identity & Stake</h3>
                      </div>
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">KYC Verification</span>
                          <span className="text-emerald-400 font-bold flex items-center gap-2"><CheckCircle2 size={16} /> Verified</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Staking Deposit</span>
                          <span className="text-white font-bold">100 NIGHT</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">By staking 100 NIGHT, you create a perpetual endowment that fuels your vault forever. You can withdraw this anytime to cancel the vault.</p>
                      </div>
                      <button 
                        onClick={() => setSetupStep(2)}
                        className="w-full py-5 bg-midnight-purple rounded-2xl text-xl font-bold"
                      >
                        Stake & Move to Layer 2
                      </button>
                    </div>
                  )}

                  {setupStep === 2 && (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-midnight-blue/10 rounded-xl flex items-center justify-center text-midnight-blue font-bold">2</div>
                        <h3 className="text-2xl font-bold">Layer 2: Create Vault</h3>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Root ADA Handle</label>
                          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-mono text-gray-400">$johndodgson</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-midnight-blue">Vault Sub-Handle (One-time fee)</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              placeholder="family"
                              className="w-full bg-white/5 border border-midnight-blue/30 rounded-2xl px-6 py-4 font-mono focus:outline-none focus:border-midnight-blue transition-all"
                            />
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-mono">.familyheirloom</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <button 
                            onClick={() => setRecoveryPath('family-password')}
                            className={`p-4 rounded-2xl border transition-all text-left ${recoveryPath === 'family-password' ? 'border-midnight-purple bg-midnight-purple/5' : 'border-white/5 bg-white/5'}`}
                          >
                            <Key size={20} className="mb-2 text-midnight-purple" />
                            <span className="text-sm font-bold">Family Password</span>
                          </button>
                          <button 
                            onClick={() => setRecoveryPath('direct-transfer')}
                            className={`p-4 rounded-2xl border transition-all text-left ${recoveryPath === 'direct-transfer' ? 'border-midnight-blue bg-midnight-blue/5' : 'border-white/5 bg-white/5'}`}
                          >
                            <Wand2 size={20} className="mb-2 text-midnight-blue" />
                            <span className="text-sm font-bold">Direct Transfer</span>
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSetupStep(3)}
                        className="w-full py-5 bg-midnight-blue text-black rounded-2xl text-xl font-bold"
                      >
                        Finalize Setup
                      </button>
                    </div>
                  )}

                  {setupStep === 3 && (
                    <div className="text-center space-y-8">
                      <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-3xl font-bold">Vault Secured</h3>
                      <p className="text-gray-400">Your legacy is now protected by Midnight's ZK-Umbrella. Your heirs can claim it using the same button when the time comes.</p>
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-left space-y-3">
                        <div className="flex justify-between text-sm"><span className="text-gray-500">Vault Handle</span><span className="font-mono">johnsvault.familyheirloom</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-500">Recovery Mode</span><span className="font-bold capitalize">{recoveryPath.replace('-', ' ')}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-500">Endowment</span><span className="text-midnight-purple font-bold">100 NIGHT Staked</span></div>
                      </div>
                      <button 
                        onClick={() => setSetupStep(0)}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                      >
                        Back to Start
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="inheritance"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-xl w-full"
                >
                  {inheritanceStep === 0 && (
                    <div className="text-center space-y-8">
                      <div className="w-24 h-24 bg-midnight-blue/10 rounded-3xl flex items-center justify-center mx-auto text-midnight-blue">
                        <LifeBuoy size={48} />
                      </div>
                      <h3 className="text-3xl font-bold">Claim Inheritance</h3>
                      <p className="text-gray-400">Family members click the <span className="text-white font-bold">exact same button</span> on the owner's device to begin the recovery process.</p>
                      <button 
                        onClick={() => setInheritanceStep(1)}
                        className="w-full py-5 bg-midnight-blue text-black rounded-2xl text-xl font-bold hover:blue-glow transition-all"
                      >
                        Family Heirloom / Helpline
                      </button>
                    </div>
                  )}

                  {inheritanceStep === 1 && (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-midnight-blue/10 rounded-xl flex items-center justify-center text-midnight-blue font-bold">1</div>
                        <h3 className="text-2xl font-bold">Verify Identity</h3>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Family Password</label>
                          <input 
                            type="password" 
                            placeholder="••••••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-midnight-blue transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Death Certificate (ZK-Upload)</label>
                          <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-midnight-blue/50 transition-all cursor-pointer">
                            <FileText size={32} className="mx-auto mb-4 text-gray-500" />
                            <p className="text-sm text-gray-400">Drag and drop certificate or click to browse</p>
                            <p className="text-[10px] text-gray-600 mt-2">Midnight will verify the document privately using ZK-Proofs</p>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setInheritanceStep(2)}
                        className="w-full py-5 bg-midnight-blue text-black rounded-2xl text-xl font-bold"
                      >
                        Initiate Claim
                      </button>
                    </div>
                  )}

                  {inheritanceStep === 2 && (
                    <div className="text-center space-y-8">
                      <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto text-amber-500">
                        <Clock size={48} className="animate-spin-slow" />
                      </div>
                      <h3 className="text-3xl font-bold">30-Day Safe-Lock</h3>
                      <p className="text-gray-400">The claim has been initiated. A 30-day countdown has started. An alert has been sent to the owner's primary device.</p>
                      
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Veto Period Remaining</span>
                          <span className="text-amber-500 font-bold">29 Days, 23 Hours</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "100%" }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 2 }}
                            className="h-full bg-amber-500" 
                          />
                        </div>
                      </div>

                      <div className="bg-midnight-purple/5 border border-midnight-purple/20 p-4 rounded-2xl flex gap-3 text-left">
                        <Shield className="text-midnight-purple shrink-0" size={18} />
                        <p className="text-xs text-gray-400 leading-relaxed">
                          If the owner is alive, they can click the button to <span className="text-white font-bold">VETO</span> this claim immediately, locking the vault and flagging the attempt.
                        </p>
                      </div>

                      <button 
                        onClick={() => setInheritanceStep(3)}
                        className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all"
                      >
                        Simulate Time Lapse (30 Days)
                      </button>
                    </div>
                  )}

                  {inheritanceStep === 3 && (
                    <div className="text-center space-y-8">
                      <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-3xl font-bold">Assets Recovered</h3>
                      <p className="text-gray-400">The veto period has expired. Assets have been automatically swept to the designated heir wallet.</p>
                      
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-left space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Assets Transferred</span>
                          <span className="text-emerald-400 font-bold">14,250 ADA + NFTs</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Endowment Refunded</span>
                          <span className="text-midnight-purple font-bold">100 NIGHT</span>
                        </div>
                        <div className="h-px bg-white/10" />
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Recipient</span>
                          <span className="font-mono">$tracydodgson</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => setInheritanceStep(0)}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                      >
                        Back to Start
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Demo Footer */}
          <div className="bg-white/5 px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 border-t border-white/5">
            <div className="flex gap-6">
              <div className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-emerald-500" /> ZK-Proof: Valid</div>
              <div className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Legal: Compliant</div>
            </div>
            <div className="flex gap-6">
              <span>One-Time Fee: 50 ADA</span>
              <span>Ongoing Cost: 0.00 NIGHT/Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-white/5">
        <div className="text-center mb-20">
          <Badge icon={Zap}>Core Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Built for Peace of Mind</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Wand2} 
            title="Direct Transfer Recovery" 
            description="Set-and-forget ZK-Delegation to a designated root handle. No passwords required for heirs, just a 30-day wait."
          />
          <FeatureCard 
            icon={Clock} 
            title="30-Day Veto Window" 
            description="Every claim triggers a 30-day safe-lock. If you're alive, you can veto any claim with a single click."
          />
          <FeatureCard 
            icon={Shield} 
            title="ZK-Privacy" 
            description="Your inheritance plan, next-of-kin, and asset details are never visible on-chain. Only the proof of compliance exists."
          />
          <FeatureCard 
            icon={Plus} 
            title="One-Time Fee" 
            description="Pay a small sub-handle registration fee once. Pooled DUST at the $familyheirloom root handle covers all maintenance costs forever."
          />
          <FeatureCard 
            icon={History} 
            title="Grandfather Rights" 
            description="Early adopters lock in their 100 NIGHT endowment terms forever, regardless of future network changes."
          />
          <FeatureCard 
            icon={LifeBuoy} 
            title="Portable Identity" 
            description="Your $cryptopassport is yours. Take it to any Midnight-compatible wallet and your vault follows you."
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-5xl mx-auto px-8 py-32 text-center">
        <div className="glass-panel p-12 md:p-20 border-midnight-purple/30 midnight-glow">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display">Ready to build the future of digital legacy?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Family Heirloom is an open concept for the Midnight Network. We're looking for developers and designers to bring this to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setShowDocs(true)}
              className="px-10 py-5 bg-midnight-purple rounded-2xl text-lg font-bold flex items-center gap-3 hover:scale-105 transition-all"
            >
              View Developer Docs
              <BookOpen size={20} />
            </button>
            <a 
              href="https://x.com/johndodgson6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              Contact me on X
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/JohnDodgson/-cryptopassport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              View on GitHub
              <Github size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-white/5 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-display">Family Heirloom</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              The self-funding, zero-knowledge inheritance utility for the Midnight Network. Protecting your digital legacy for generations to come.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Framework</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Midnight SDK</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Community</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://x.com/johndodgson6" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
              <li><a href="https://github.com/JohnDodgson/-cryptopassport" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-gray-600 uppercase tracking-widest font-bold">
          <p>© 2026 Family Heirloom Concept</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FAQ MODAL */}
      <AnimatePresence>
        {showFAQ && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFAQ(false)}
              className="absolute inset-0 bg-midnight-bg/95 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 relative z-10 border-midnight-blue/30 shadow-2xl"
            >
              <div className="sticky top-0 bg-midnight-card/80 backdrop-blur-xl px-8 py-6 border-b border-white/5 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-midnight-blue/20 rounded-xl flex items-center justify-center text-midnight-blue">
                    <HelpCircle size={20} />
                  </div>
                  <h2 className="text-2xl font-bold font-display tracking-tight">Frequently Asked Questions</h2>
                </div>
                <button 
                  onClick={() => setShowFAQ(false)}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Plus size={24} className="rotate-45" />
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-10">
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-start gap-3">
                    <span className="text-midnight-blue">Q:</span>
                    If I have 1000 ADA (or any other assets) inside my vault, can I still stake them to a normal Cardano staking pool?
                  </h4>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p className="font-bold text-emerald-400">Yes — absolutely.</p>
                    <p>
                      The vault is <span className="text-white font-medium">not</span> a rigid lockbox. While you are alive you keep full control of everything inside $familyheirloom (tokens, NFTs, ADA, etc.).
                    </p>
                    <p>You can:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-400">
                      <li>Send / receive ADA normally</li>
                      <li>Stake your ADA to any Cardano staking pool you want (via the normal wallet interface in Lace, Eternl, etc.)</li>
                      <li>Delegate, undelegate, claim rewards — everything works exactly as it does today.</li>
                    </ul>
                    <p className="pt-4 border-t border-white/5 text-sm">
                      The <span className="text-white font-bold">only</span> thing that is actually staked and locked is the 100 NIGHT (in Layer 1 $cryptopassport pool). Your 1000 ADA is completely separate and remains fully usable.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-start gap-3">
                    <span className="text-midnight-blue">Q:</span>
                    If I hold NIGHT tokens in my vault, what happens to the DUST?
                  </h4>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      The DUST collected from any NIGHT tokens you hold <span className="text-white font-medium">inside</span> your vault will accumulate in your vault exactly as it would in any other Midnight-compatible wallet.
                    </p>
                    <p>
                      It is important to distinguish between two types of NIGHT in this system:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-400">
                      <li>
                        <span className="text-white font-bold">The 100 NIGHT Endowment:</span> This is the stake in Layer 1 ($cryptopassport) that funds the ecosystem. Its DUST is redirected to the <span className="text-midnight-blue">$familyheirloom</span> root handle for global maintenance.
                      </li>
                      <li>
                        <span className="text-white font-bold">Your Personal NIGHT:</span> Any additional NIGHT you choose to store in your vault (e.g., 500 NIGHT) remains your personal asset. You keep 100% of the DUST generated by these tokens.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                  More questions will be added as the project grows.<br />
                  This FAQ is part of the public demo to help both users and developers understand the system.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DOCUMENTATION MODAL */}
      <AnimatePresence>
        {showDocs && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDocs(false)}
              className="absolute inset-0 bg-midnight-bg/95 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel max-w-5xl w-full max-h-[90vh] overflow-y-auto p-0 relative z-10 border-midnight-purple/30 shadow-2xl"
            >
              <div className="sticky top-0 bg-midnight-card/80 backdrop-blur-xl px-8 py-6 border-b border-white/5 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-midnight-purple/20 rounded-xl flex items-center justify-center text-midnight-purple">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-2xl font-bold font-display tracking-tight">Developer Documentation</h2>
                </div>
                <button 
                  onClick={() => setShowDocs(false)}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Plus size={24} className="rotate-45" />
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-16 text-gray-300">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-midnight-purple/10 flex items-center justify-center text-midnight-purple text-xs font-bold">1</div>
                    <h3 className="text-2xl font-bold text-white">Overall Architecture</h3>
                  </div>
                  <p className="mb-8 leading-relaxed">The add-on is a lightweight browser extension + Midnight Wallet SDK that adds a single “Family Heirloom / Helpline” button to any Cardano wallet.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-midnight-purple/30 transition-colors">
                      <strong className="block text-white mb-1">Layer 0 — Midnight Umbrella</strong>
                      <span className="text-xs text-midnight-blue font-medium">ZK privacy + legal compliance</span>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-midnight-purple/30">
                      <strong className="block text-white mb-1">Layer 1 — $cryptopassport</strong>
                      <span className="text-xs text-midnight-purple font-medium">Identity & staking pool</span>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-midnight-blue/30">
                      <strong className="block text-white mb-1">Layer 2 — $familyheirloom</strong>
                      <span className="text-xs text-midnight-blue font-medium">Vault & sub-handles</span>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-midnight-purple/10 flex items-center justify-center text-midnight-purple text-xs font-bold">2</div>
                    <h3 className="text-2xl font-bold text-white">100 NIGHT Staking Economics (Layer 1)</h3>
                  </div>
                  <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                    <ul className="space-y-4 text-sm">
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-midnight-purple mt-1.5 shrink-0" />
                        <span>User stakes exactly <span className="text-white font-bold">100 NIGHT</span> into the official $cryptopassport staking pool.</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-midnight-purple mt-1.5 shrink-0" />
                        <span>User receives <span className="text-white font-bold">zero rewards</span>.</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-midnight-purple mt-1.5 shrink-0" />
                        <span>All staking rewards go to the pool owner (developers) for Layer 1 upkeep, KYC, legal opinions, and admin costs.</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-midnight-purple mt-1.5 shrink-0" />
                        <span>All <span className="text-midnight-blue font-bold">DUST</span> generated is automatically redirected to the <span className="text-white font-bold">$familyheirloom</span> root handle to fund global vault maintenance.</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-midnight-purple mt-1.5 shrink-0" />
                        <span>The stake is fully refundable at any time (cancels the vault).</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-midnight-purple mt-1.5 shrink-0" />
                        <span>After successful inheritance, the 100 NIGHT is returned to the heirs.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-midnight-purple/10 flex items-center justify-center text-midnight-purple text-xs font-bold">3</div>
                    <h3 className="text-2xl font-bold text-white">Layer 2 — $familyheirloom Vault</h3>
                  </div>
                  <p className="mb-6">After Layer 1 is complete, the user is automatically taken to Layer 2 where they:</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Create vault sub-handles (e.g. johnsvault.familyheirloom)",
                      "Pay a one-time sub-handle registration fee only",
                      "Set a simple family password (salted hash stored privately)",
                      "Optionally enable Direct Transfer Recovery (ZK-Delegation)"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        <span className="text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-emerald-400 text-xs font-medium">
                    After the one-time fee → zero ongoing cost forever. DUST pooled at the $familyheirloom root handle keeps the ecosystem fueled.
                  </div>
                </section>

                <section className="bg-white/5 rounded-3xl p-8 border border-midnight-blue/50">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-midnight-blue/10 rounded-xl flex items-center justify-center text-midnight-blue">
                      <Fingerprint size={20} />
                    </div>
                    Edge Case: User Changes or Loses Device After Setup
                  </h3>
                  <p className="mb-6 text-gray-300">The inheritance flow must still work even if the original device is lost, broken, or replaced.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <strong className="text-white block mb-1">Primary Path (Recommended)</strong>
                      <p className="text-sm text-gray-400">Family uses the original device + normal PIN + Helpline button + family password + death certificate → 30-day safe-lock.</p>
                    </div>
                    
                    <div>
                      <strong className="text-white block mb-1">Secondary / Portable Recovery Path</strong>
                      <p className="text-sm text-gray-400">$cryptopassport lives on Midnight Layer 1 and is fully portable. Family can:</p>
                      <ul className="list-disc pl-6 text-sm mt-3 space-y-2 text-gray-400">
                        <li>Open <span className="text-white font-medium">any</span> Midnight-enabled wallet (Lace, Eternl, Nami, etc.) on a new device</li>
                        <li>Click the same “Family Heirloom / Helpline” button</li>
                        <li>Enter the family password + upload death certificate</li>
                        <li>Complete the 30-day safe-lock</li>
                        <li>Assets move (via Direct Transfer Recovery or manual sweep)</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-emerald-400 text-sm font-medium flex items-center gap-3">
                      <CheckCircle2 size={18} />
                      Direct Transfer Recovery (set-and-forget) removes device dependency — assets auto-sweep to a pre-designated handle after 30 days.
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-midnight-purple/10 flex items-center justify-center text-midnight-purple text-xs font-bold">4</div>
                    <h3 className="text-2xl font-bold text-white">User & Inheritance Flow (Same Button)</h3>
                  </div>
                  <p className="mb-8">The “Family Heirloom / Helpline” button is used for both setup and inheritance.</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-3xl border border-midnight-purple/20">
                      <strong className="block text-xl text-white mb-2">Setup (Alive)</strong>
                      <p className="text-sm text-gray-400 leading-relaxed">Layer 1 KYC + stake → Layer 2 vault creation + family password</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-midnight-blue/20">
                      <strong className="block text-xl text-white mb-2">Inheritance (After Death)</strong>
                      <p className="text-sm text-gray-400 leading-relaxed">Family uses device PIN + same button + family password + death certificate → 30-day safe-lock → assets move</p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-midnight-purple/10 flex items-center justify-center text-midnight-purple text-xs font-bold">5</div>
                    <h3 className="text-2xl font-bold text-white">Technical Implementation Notes</h3>
                  </div>
                  <ul className="space-y-4 text-sm">
                    {[
                      "Midnight Wallet SDK for ZK proofs and $cryptopassport",
                      "Compact smart contract for vault logic, ZK-Delegation, and auto-sweep",
                      "Browser extension (or native wallet integration) to inject the button",
                      "30-day Safe-Lock with owner veto alert",
                      "Full Risk Assessment & Mitigation section built into the UI"
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">•</div>
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="pt-12 border-t border-white/5 text-center">
                  <p className="text-xs text-gray-500 font-medium italic">
                    This documentation is the exact spec the add-on must follow. Ready for implementation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RISK MODAL */}
      <AnimatePresence>
        {showRisks && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRisks(false)}
              className="absolute inset-0 bg-midnight-bg/90 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative z-10 border-midnight-purple/30"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold font-display">Risk Assessment & Mitigation</h2>
                <button 
                  onClick={() => setShowRisks(false)}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Plus size={24} className="rotate-45" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <RiskItem 
                  risk="Legal challenges to ZK-verified death certificates in certain jurisdictions."
                  mitigation="Layer 1 $cryptopassport includes a legal opinion hash that is updated by regional notaries to ensure local compliance."
                />
                <RiskItem 
                  risk="Oracle failure or manipulation of death certificate data feeds."
                  mitigation="Multi-oracle consensus + manual notary override capability for high-value vaults. 30-day veto window provides ultimate protection."
                />
                <RiskItem 
                  risk="Device dependency: Heirs lose access to the physical device or PIN."
                  mitigation="The vault is portable. Heirs can claim from any device using the Family Password + ZK-Proof of identity."
                />
                <RiskItem 
                  risk="Brute-force attacks on the Family Password."
                  mitigation="Exponential backoff on claim attempts + owner alert on first failed attempt. Midnight's ZK-layer hides the vault's existence until a valid claim starts."
                />
                <RiskItem 
                  risk="Staking pool underperformance leading to insufficient DUST."
                  mitigation="The 100 NIGHT endowment is calculated with a 50% safety margin. Developers subsidize shortfalls from their 100% reward share."
                />
                <RiskItem 
                  risk="Smart contract vulnerabilities in the auto-sweep logic."
                  mitigation="Formal verification of the Midnight contract + multi-stage audit process. 30-day delay allows for emergency pause if bugs are found."
                />
              </div>

              <div className="mt-12 p-6 bg-midnight-purple/5 border border-midnight-purple/20 rounded-3xl text-center">
                <p className="text-sm text-gray-400">
                  Our goal is to make digital inheritance as safe as a physical bank vault, but with the privacy and speed of the Midnight Network.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
