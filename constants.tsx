
import { Project, Service, SiteSettings } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  brandName: "QUANTUM STUDIO",
  accentColor: "#00FF41",
  heroTitle: "AI 프론티어 '퀀텀'이, 당신의 '성공 파트너'가 되겠습니다",
  heroSubtitle: "인공지능 기술과 크리에이티브의 결합으로 유투브 시장의 새로운 패러다임을 제시합니다. 당신의 비즈니스를 가장 스마트하게 성장시킬 최적의 전략을 만나보세요.",
  contactEmail: "contact@quantumstudio.kr",
  phoneNumber: "010-9920-9934",
  socialLinks: {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    github: "https://github.com"
  }
};

export const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    title: "YouTube 영상 제작",
    description: "시네마틱한 연출과 고도화된 편집 기술로 시청자의 시선을 사로잡는 고품질 영상을 제작합니다.",
    icon: "Video"
  },
  {
    id: '2',
    title: "채널 매니지먼트",
    description: "데이터 분석 기반의 알고리즘 최적화와 브랜딩 전략으로 채널의 비약적인 성장을 지원합니다.",
    icon: "BarChart"
  },
  {
    id: '3',
    title: "웹/홈페이지 제작",
    description: "최신 Dark Tech 트렌드를 반영한 반응형 웹사이트로 당신의 비즈니스에 디지털 생명력을 불어넣습니다.",
    icon: "Layout"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Tech Review 2024",
    description: "글로벌 테크 유튜버를 위한 고감도 언박싱 & 리뷰 영상",
    category: "Video",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    date: "2024-03"
  },
  {
    id: 'p2',
    title: "E-Commerce Platform",
    description: "하이엔드 패션 브랜드를 위한 럭셔리 쇼핑몰 구축",
    category: "Web",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    date: "2024-02"
  },
  {
    id: 'p3',
    title: "Gamer Channel Growth",
    description: "누적 구독자 50만 돌파를 위한 채널 리브랜딩 및 관리",
    category: "Channel",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    date: "2024-01"
  }
];
