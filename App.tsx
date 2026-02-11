
import React, { useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { INITIAL_SETTINGS, INITIAL_SERVICES, INITIAL_PROJECTS } from './constants';
import { AppState, SiteSettings, Project, Service } from './types';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import { Menu, X, Settings } from 'lucide-react';

const AppContext = createContext<AppState | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};

const Navbar = () => {
  const { settings } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/' || location.pathname === '') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-black tracking-tighter flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg rotate-45 border-2 border-[#00FF41] flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            <div className="w-5 h-5 bg-[#00FF41] rounded-sm animate-pulse" />
          </div>
          <span className="hidden sm:inline-block tracking-tighter">{settings.brandName}</span>
        </Link>

        {/* Desktop Menu - All English for Unity */}
        <div className="hidden md:flex items-center gap-10 font-black text-[10px] tracking-[0.25em] uppercase text-gray-300">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#00FF41] transition-colors">Home</Link>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-[#00FF41] transition-colors">Services</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-[#00FF41] transition-colors">Portfolio</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#00FF41] transition-colors">Contact</a>
          <Link 
            to={isAdmin ? "/" : "/admin"} 
            className="flex items-center gap-2 px-6 py-2.5 bg-[#00FF41]/10 border border-[#00FF41]/30 rounded-full hover:bg-[#00FF41] hover:text-black transition-all duration-300 text-white"
          >
            <Settings size={14} />
            {isAdmin ? "Exit Dashboard" : "Admin Console"}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#00FF41] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-20 bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 font-black uppercase tracking-[0.3em] text-xl">
          <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>Home</Link>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="text-[#00FF41] mt-8 border border-[#00FF41]/30 px-10 py-4 rounded-2xl">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [services] = useState<Service[]>(INITIAL_SERVICES);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const removeProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppContext.Provider value={{ settings, projects, services, updateSettings, addProject, removeProject }}>
      <HashRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Fallback to prevent blank screen on wrong URLs */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
          
          <footer className="bg-black border-t border-white/5 py-24 px-6 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FF41]/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
              <div className="max-w-sm">
                <div className="text-3xl font-black mb-8 tracking-tighter flex items-center gap-3">
                   <div className="w-8 h-8 rounded-sm rotate-45 border-2 border-[#00FF41] flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#00FF41] rounded-sm" />
                  </div>
                  {settings.brandName}
                </div>
                <p className="text-gray-500 text-base leading-relaxed font-light">
                  미래 지향적 테크놀로지와 시각적 럭셔리의 조화를 추구하는 하이엔드 크리에이티브 스튜디오입니다. 당신의 비전을 현실로 만듭니다.
                </p>
                <div className="mt-8 text-[#00FF41] font-bold text-lg">{settings.phoneNumber}</div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 text-sm">
                <div>
                  <h4 className="font-black text-[#00FF41] mb-8 uppercase tracking-[0.2em] text-xs">Explore</h4>
                  <ul className="space-y-4 text-gray-500 font-medium">
                    <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Home</Link></li>
                    <li><a href="#services" onClick={(e) => handleInternalLink(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="#portfolio" onClick={(e) => handleInternalLink(e, 'portfolio')} className="hover:text-white transition-colors">Portfolio</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-[#00FF41] mb-8 uppercase tracking-[0.2em] text-xs">Admin</h4>
                  <ul className="space-y-4 text-gray-500 font-medium">
                    <li><Link to="/admin" className="hover:text-white transition-colors">Console</Link></li>
                    <li><Link to="/admin" className="hover:text-white transition-colors">Management</Link></li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="font-black text-[#00FF41] mb-8 uppercase tracking-[0.2em] text-xs">Connect</h4>
                  <ul className="space-y-4 text-gray-500 font-medium">
                    {settings.socialLinks.youtube && <li><a href={settings.socialLinks.youtube} target="_blank" rel="noreferrer" className="hover:text-white truncate block">YouTube</a></li>}
                    {settings.socialLinks.instagram && <li><a href={settings.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-white truncate block">Instagram</a></li>}
                    <li><a href="#contact" onClick={(e) => handleInternalLink(e, 'contact')} className="hover:text-[#00FF41] truncate block font-black">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
