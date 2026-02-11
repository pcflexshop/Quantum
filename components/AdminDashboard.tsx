
import React, { useState } from 'react';
import { useApp } from '../App';
import { Settings, Image as ImageIcon, Layout, Plus, Trash2, Save, LogOut, CheckCircle, Sparkles } from 'lucide-react';
import { Category, Project } from '../types';

const AdminDashboard: React.FC = () => {
  const { settings, updateSettings, projects, addProject, removeProject } = useApp();
  const [activeTab, setActiveTab] = useState<'general' | 'portfolio' | 'appearance'>('general');
  const [newProject, setNewProject] = useState<Partial<Project>>({
    category: 'Video',
    title: '',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    date: new Date().toISOString().split('T')[0]
  });

  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSave = () => {
    setSaveStatus("저장되었습니다!");
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      addProject({
        id: `p-${Date.now()}`,
        title: newProject.title,
        description: newProject.description,
        category: newProject.category as Category,
        imageUrl: newProject.imageUrl || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        date: newProject.date || '2024-01'
      });
      setNewProject({ 
        category: 'Video', 
        title: '', 
        description: '', 
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', 
        date: new Date().toISOString().split('T')[0] 
      });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#050505] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter flex items-center gap-4">
              <Settings className="text-[#00FF41]" size={40} />
              ADMIN CONSOLE
            </h1>
            <p className="text-gray-500 mt-2">퀀텀 스튜디오의 모든 설정을 실시간으로 제어합니다.</p>
          </div>
          <div className="flex items-center gap-4">
             {saveStatus && (
               <div className="flex items-center gap-2 text-[#00FF41] font-bold text-sm animate-pulse">
                 <CheckCircle size={16} /> {saveStatus}
               </div>
             )}
             <button onClick={handleSave} className="px-6 py-2 bg-[#00FF41] text-black font-bold rounded-lg hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all">
                Update All
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'general', label: 'General Settings', icon: Layout },
              { id: 'portfolio', label: 'Work Management', icon: ImageIcon },
              { id: 'appearance', label: 'Theme & Style', icon: Sparkles },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#00FF41] text-black shadow-lg shadow-[#00FF41]/20' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 bg-black border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            {activeTab === 'general' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#00FF41] font-black ml-2">Brand Name</label>
                    <input 
                      type="text" 
                      value={settings.brandName} 
                      onChange={(e) => updateSettings({ brandName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00FF41] transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#00FF41] font-black ml-2">Contact Email</label>
                    <input 
                      type="text" 
                      value={settings.contactEmail} 
                      onChange={(e) => updateSettings({ contactEmail: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00FF41] transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#00FF41] font-black ml-2">Phone Number</label>
                  <input 
                    type="text" 
                    value={settings.phoneNumber} 
                    onChange={(e) => updateSettings({ phoneNumber: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00FF41] transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#00FF41] font-black ml-2">Hero Main Title</label>
                  <input 
                    type="text" 
                    value={settings.heroTitle} 
                    onChange={(e) => updateSettings({ heroTitle: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00FF41] transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#00FF41] font-black ml-2">Hero Subtitle</label>
                  <textarea 
                    value={settings.heroSubtitle} 
                    rows={4}
                    onChange={(e) => updateSettings({ heroSubtitle: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#00FF41] transition-all resize-none font-medium leading-relaxed"
                  />
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase tracking-tighter"><Plus className="text-[#00FF41]" /> Add New Project</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input 
                      placeholder="Project Title" 
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      className="bg-black border border-white/10 rounded-2xl px-4 py-3 focus:border-[#00FF41] transition-all" 
                    />
                    <select 
                      value={newProject.category}
                      onChange={(e) => setNewProject({...newProject, category: e.target.value as Category})}
                      className="bg-black border border-white/10 rounded-2xl px-4 py-3 focus:border-[#00FF41] transition-all cursor-pointer"
                    >
                      <option value="Video">Video</option>
                      <option value="Channel">Channel</option>
                      <option value="Web">Web</option>
                    </select>
                  </div>
                  <textarea 
                    placeholder="Project Description" 
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 mb-6 focus:border-[#00FF41] transition-all resize-none"
                  />
                  <button onClick={handleAddProject} className="w-full py-4 bg-[#00FF41] text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_10px_30px_rgba(0,255,65,0.3)] transition-all">
                    Register Project
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black mb-6 uppercase tracking-tighter">Current Portfolio Items</h3>
                  {projects.map(project => (
                    <div key={project.id} className="flex items-center justify-between p-6 bg-[#080808] border border-white/5 rounded-2xl hover:border-white/20 transition-all group">
                      <div className="flex items-center gap-6">
                        <img src={project.imageUrl} className="w-20 h-14 object-cover rounded-xl" />
                        <div>
                          <p className="font-bold text-lg">{project.title}</p>
                          <p className="text-[10px] text-[#00FF41] uppercase tracking-[0.2em] font-black">{project.category}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeProject(project.id)}
                        className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="p-10 rounded-[2.5rem] bg-[#00FF41]/5 border border-[#00FF41]/20">
                    <h3 className="text-2xl font-black mb-4 tracking-tighter">Visual Customization</h3>
                    <p className="text-gray-400 mb-8 font-light">색상 테마 및 브랜드 컬러를 실시간으로 조정합니다.</p>
                    
                    <div className="flex items-center gap-8">
                       <div className="space-y-2">
                          <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-500">Accent Color</label>
                          <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-white/5">
                             <input 
                                type="color" 
                                value={settings.accentColor} 
                                onChange={(e) => updateSettings({ accentColor: e.target.value })}
                                className="w-12 h-12 rounded-full border-none cursor-pointer overflow-hidden bg-transparent"
                             />
                             <span className="font-mono text-sm tracking-widest uppercase font-bold text-[#00FF41]">{settings.accentColor}</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
                      <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Social Presence</h4>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[8px] uppercase tracking-widest text-gray-600 font-black ml-2">YouTube URL</span>
                          <input 
                            placeholder="https://youtube.com/..." 
                            value={settings.socialLinks.youtube}
                            onChange={(e) => updateSettings({ socialLinks: { ...settings.socialLinks, youtube: e.target.value }})}
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00FF41] transition-all" 
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[8px] uppercase tracking-widest text-gray-600 font-black ml-2">Instagram URL</span>
                          <input 
                            placeholder="https://instagram.com/..." 
                            value={settings.socialLinks.instagram}
                            onChange={(e) => updateSettings({ socialLinks: { ...settings.socialLinks, instagram: e.target.value }})}
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00FF41] transition-all" 
                          />
                        </div>
                      </div>
                   </div>
                   <div className="p-8 bg-gradient-to-br from-[#00FF41]/10 to-transparent rounded-[2rem] border border-[#00FF41]/20 flex flex-col items-center justify-center text-center">
                      <Sparkles size={40} className="text-[#00FF41] mb-6 animate-pulse" />
                      <p className="font-black text-lg mb-2 uppercase tracking-tighter">AI Creative Engine</p>
                      <p className="text-xs text-gray-500 mb-6 font-medium leading-relaxed">Gemini AI를 이용해 문구를 최적화하고<br/>최신 트렌드 문구로 자동 교정합니다.</p>
                      <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#00FF41] hover:text-black transition-all">Enable Intelligence</button>
                   </div>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
