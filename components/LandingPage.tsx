
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
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen scale-110 animate-glow"
          alt="Studio Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,65,0.1),_transparent_70%)]" />
      </div>

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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-[#0a0a0a] border border-white/5 p-12 rounded-[3rem] hover:border-[#00FF41]/50 transition-all duration-700 overflow-hidden shadow-2xl">
              <div className="w-20 h-20 rounded-3xl bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center text-[#00FF41] mb-10 group-hover:bg-[#00FF41] group-hover:text-black transition-all">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-3xl font-black mb-5 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">{service.description}</p>
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
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#00FF41] font-black uppercase tracking-[0.3em] text-sm">Portfolio</span>
          <h2 className="text-5xl md:text-8xl font-black mt-6 tracking-tighter">SELECTED WORK</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {['All', 'Video', 'Channel', 'Web'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-10 py-4 rounded-full text-xs font-black tracking-[0.25em] uppercase transition-all ${
                  filter === cat ? 'bg-[#00FF41] text-black shadow-lg shadow-[#00FF41]/30' : 'bg-white/5 text-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((project) => (
            <div key={project.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] mb-8 border border-white/5 group-hover:border-[#00FF41]/40 transition-all duration-700">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-black mb-3">{project.title}</h3>
              <p className="text-gray-500 font-light text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
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
        headers: { 'Accept': 'application/json' }
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
    setTimeout(() => setFormStatus('IDLE'), 5000);
  };

  return (
    <section id="contact" className="py-40 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <div>
          <span className="text-[#00FF41] font-black uppercase tracking-[0.3em] text-sm border-l-4 border-[#00FF41] pl-6">Get in Touch</span>
          <h2 className="text-5xl md:text-8xl font-black mt-6 tracking-tighter mb-10 leading-[0.85]">START YOUR<br/>ASCENSION</h2>
        </div>
        <div className="bg-[#0a0a0a] p-12 md:p-20 rounded-[4rem] border border-white/10 relative shadow-2xl">
          <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required name="name" type="text" placeholder="성함 또는 기업명" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:border-[#00FF41] transition-all font-bold" />
              <input required name="contact" type="text" placeholder="연락처" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:border-[#00FF41] transition-all font-bold" />
            </div>
            <select name="service" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:border-[#00FF41] appearance-none font-bold">
              <option value="YouTube Channel Creation">YouTube 채널 생성 (무료)</option>
              <option value="YouTube Video Production">YouTube 영상 제작 및 편집 의뢰</option>
              <option value="Web/App Development">홈페이지/앱 개발</option>
              <option value="Partnership">기타 제휴 및 문의하기</option>
            </select>
            <textarea required name="message" placeholder="상세 내용을 적어주세요." rows={4} className="w-full bg-black border border-white/10 rounded-3xl px-8 py-5 focus:border-[#00FF41] resize-none font-bold"></textarea>
            <button disabled={formStatus === 'SUBMITTING'} className="w-full py-6 bg-[#00FF41] text-black font-black uppercase tracking-widest rounded-3xl transition-all active:scale-95 shadow-lg shadow-[#00FF41]/30">
              {formStatus === 'IDLE' ? '전송하기' : formStatus === 'SUBMITTING' ? '전송 중...' : '완료!'}
            </button>
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
