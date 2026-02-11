
import React, { useState } from 'react';
import { useApp } from '../App';
import { ArrowRight, Play, ExternalLink, Mail, MessageSquare, ChevronRight, Video, BarChart, Layout, Phone, Youtube, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Category } from '../types';

const Hero = () => {
  const { settings } = useApp();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen scale-110 animate-glow"
          alt="Studio Background"
        />
        <div className="absolute top-[10%] left-[5%] opacity-10 animate-pulse delay-700">
           <Youtube size={120} className="text-[#00FF41]" />
        </div>
        <div className="absolute bottom-[10%] right-[10%] opacity-10 animate-bounce duration-[5000ms]">
           <Video size={100} className="text-[#00FF41]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,65,0.1),_transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#00FF41] opacity-[0.04] blur-[200px] rounded-full" />
        
        {/* Moving grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)`, 
            backgroundSize: '80px 80px',
            animation: 'slide-grid 60s linear infinite'
          }} 
        />
      </div>

      <style>{`
        @keyframes slide-grid {
          from { background-position: 0 0; }
          to { background-position: 500px 500px; }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF41]/40 bg-[#00FF41]/10 text-[#00FF41] text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-[0_0_30px_rgba(0,255,65,0.15)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-ping" />
          Quantum AI Strategy
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[1.1] text-white">
          {settings.heroTitle.split(', ').map((line, idx) => (
            <React.Fragment key={idx}>
              {line.split("'").map((part, i) => (
                <span key={i} className={i === 1 ? "text-[#00FF41] drop-shadow-[0_0_30px_rgba(0,255,65,0.5)]" : ""}>
                  {part}
                </span>
              ))}
              {idx === 0 && settings.heroTitle.includes(', ') && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-14 max-w-4xl mx-auto font-light leading-relaxed">
          {settings.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="group relative px-12 py-6 bg-[#00FF41] text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_15px_60px_rgba(0,255,65,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.2em] text-xs">
              상담 신청하기 <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
          </a>
          <a 
            href="#portfolio" 
            className="group flex items-center gap-4 px-12 py-6 border border-white/20 rounded-full hover:border-[#00FF41] hover:bg-[#00FF41]/5 transition-all backdrop-blur-sm"
          >
            <Play size={20} className="text-[#00FF41] fill-[#00FF41]/20" />
            <span className="font-black tracking-[0.2em] uppercase text-xs group-hover:text-[#00FF41]">Portfolio showcase</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent animate-pulse" />
      </div>
    </section>
  );
};

const Services = () => {
  const { services } = useApp();
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Video': return <Video size={40} />;
      case 'BarChart': return <BarChart size={40} />;
      case 'Layout': return <Layout size={40} />;
      default: return <Layout size={40} />;
    }
  };

  return (
    <section id="services" className="py-40 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <span className="text-[#00FF41] font-black uppercase tracking-widest text-sm border-l-4 border-[#00FF41] pl-5">Specialties</span>
            <h2 className="text-4xl md:text-7xl font-black mt-6 tracking-tighter">OUR EXPERTISE</h2>
          </div>
          <p className="max-w-md text-gray-500 leading-relaxed font-light text-xl">
            단순한 영상 제작을 넘어 성과를 만드는 파트너로서 함께합니다. 당신의 가치를 수치로 증명합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-[#0a0a0a] border border-white/5 p-12 rounded-[3rem] hover:border-[#00FF41]/50 transition-all duration-700 overflow-hidden shadow-2xl">
              <div className="w-20 h-20 rounded-3xl bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center text-[#00FF41] mb-10 group-hover:bg-[#00FF41] group-hover:text-black transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(0,255,65,0.4)]">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-3xl font-black mb-5 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                {service.description}
              </p>
              <div className="flex items-center gap-3 text-[#00FF41] font-black text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Explore More <ChevronRight size={18} />
              </div>
              <div className="absolute -bottom-16 -right-16 p-4 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity rotate-12 scale-[2.5] duration-700">
                {getIcon(service.icon)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { projects } = useApp();
  const [filter, setFilter] = useState<Category>('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-40 px-6 bg-[#030303] border-y border-white/5 relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(0,255,65,0.03),_transparent_40%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#00FF41] font-black uppercase tracking-[0.3em] text-sm">Portfolio</span>
          <h2 className="text-5xl md:text-8xl font-black mt-6 tracking-tighter">SELECTED WORK</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {['All', 'Video', 'Channel', 'Web'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-10 py-4 rounded-full text-xs font-black tracking-[0.25em] uppercase transition-all duration-500 ${
                  filter === cat 
                    ? 'bg-[#00FF41] text-black shadow-[0_0_35px_rgba(0,255,65,0.5)]' 
                    : 'bg-white/5 text-gray-500 hover:text-white border border-transparent hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] mb-8 border border-white/5 group-hover:border-[#00FF41]/40 transition-all duration-700 shadow-xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-115 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-700 shadow-2xl">
                    <ExternalLink size={30} className="text-[#00FF41]" />
                  </div>
                </div>
                <div className="absolute top-8 left-8 px-6 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-[#00FF41] shadow-lg">
                  {project.category}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 group-hover:text-[#00FF41] transition-colors tracking-tight">{project.title}</h3>
              <p className="text-gray-500 font-light line-clamp-2 leading-relaxed text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { settings } = useApp();
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('SUBMITTING');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzdadyzr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('SUCCESS');
        form.reset();
      } else {
        setFormStatus('ERROR');
      }
    } catch (error) {
      setFormStatus('ERROR');
    }

    setTimeout(() => {
      if (formStatus === 'SUCCESS' || formStatus === 'ERROR') {
        setFormStatus('IDLE');
      }
    }, 5000);
  };

  return (
    <section id="contact" className="py-40 px-6 bg-black relative overflow-hidden">
      <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] bg-[#00FF41] opacity-[0.04] blur-[180px] rounded-full" />
      <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-[#00FF41] opacity-[0.03] blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <div>
          <span className="text-[#00FF41] font-black uppercase tracking-[0.3em] text-sm border-l-4 border-[#00FF41] pl-6">Get in Touch</span>
          <h2 className="text-5xl md:text-8xl font-black mt-6 tracking-tighter mb-10 leading-[0.85]">START YOUR<br/>ASCENSION</h2>
          <p className="text-2xl text-gray-400 font-light mb-16 max-w-lg leading-relaxed">
            당신의 비전을 성과로 변환시킬 준비가 되셨나요? 지금 바로 전문가와 상담하세요.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-8 p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-[#00FF41]/40 transition-all group shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] group-hover:bg-[#00FF41] group-hover:text-black transition-all shadow-lg shadow-[#00FF41]/5">
                <Mail size={30} />
              </div>
              <div>
                <p className="text-[11px] text-gray-600 uppercase tracking-[0.3em] font-black mb-2">Direct Mail</p>
                <p className="text-2xl font-black tracking-tighter">{settings.contactEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-8 p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-[#00FF41]/40 transition-all group shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] group-hover:bg-[#00FF41] group-hover:text-black transition-all shadow-lg shadow-[#00FF41]/5">
                <Phone size={30} />
              </div>
              <div>
                <p className="text-[11px] text-gray-600 uppercase tracking-[0.3em] font-black mb-2">Voice Call</p>
                <p className="text-2xl font-black tracking-tighter">{settings.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#00FF41]/5 blur-[100px] rounded-full" />
          <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-600 ml-3">이름</label>
                <input required name="name" type="text" placeholder="성함 또는 기업명" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-[#00FF41] transition-all placeholder:text-gray-800 font-bold text-lg" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-600 ml-3">연락처</label>
                <input required name="contact" type="text" placeholder="연락처 (010-0000-0000)" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-[#00FF41] transition-all placeholder:text-gray-800 font-bold text-lg" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-600 ml-3">서비스 선택</label>
              <select name="service" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-[#00FF41] transition-all appearance-none cursor-pointer font-bold text-lg">
                <option value="YouTube Channel Creation (Free)">YouTube 채널 생성 (무료)</option>
                <option value="YouTube Video Production/Editing">YouTube 영상 제작 및 편집 의뢰</option>
                <option value="Web/App Development">홈페이지/앱 개발</option>
                <option value="Partnership/Inquiry">기타 제휴 및 문의하기</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-600 ml-3">문의 내용</label>
              <textarea required name="message" placeholder="함께 이루고 싶은 비전이나 고민을 들려주세요." rows={4} className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-[#00FF41] transition-all resize-none placeholder:text-gray-800 font-bold text-lg leading-relaxed"></textarea>
            </div>
            
            <button 
              disabled={formStatus === 'SUBMITTING'}
              className={`w-full py-6 flex items-center justify-center gap-3 font-black uppercase tracking-[0.3em] text-sm rounded-3xl transition-all active:scale-95 duration-500 
                ${formStatus === 'SUCCESS' ? 'bg-[#00FF41] text-black shadow-[0_0_40px_rgba(0,255,65,0.6)]' : 
                  formStatus === 'ERROR' ? 'bg-red-500 text-white' : 
                  'bg-[#00FF41] text-black hover:shadow-[0_25px_60px_rgba(0,255,65,0.5)]'}`}
            >
              {formStatus === 'IDLE' && (
                <>문의하기 <ArrowRight size={20} /></>
              )}
              {formStatus === 'SUBMITTING' && (
                <>전송 중... <Loader2 className="animate-spin" size={20} /></>
              )}
              {formStatus === 'SUCCESS' && (
                <>전송 완료 <CheckCircle size={20} /></>
              )}
              {formStatus === 'ERROR' && (
                <>전송 실패 <AlertCircle size={20} /></>
              )}
            </button>

            {formStatus === 'SUCCESS' && (
              <p className="text-[#00FF41] text-center text-xs font-bold tracking-widest uppercase animate-fade-in">
                메시지가 성공적으로 전달되었습니다. 곧 연락드리겠습니다.
              </p>
            )}
            {formStatus === 'ERROR' && (
              <p className="text-red-500 text-center text-xs font-bold tracking-widest uppercase animate-fade-in">
                오류가 발생했습니다. 나중에 다시 시도해주세요.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default LandingPage;
