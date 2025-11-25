// Portfolio data shared across Home and Work pages

export interface PortfolioProject {
  id: number;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  color: string;
  tags: string[];
  images: {
    main: string;
    image2: string;
    image3: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "RB",
    client: "TODD Fashion Magazine",
    category: "UI/UX Design",
    year: "2024",
    description: "실험적이고 대담한 패션 매거진 웹사이트. 그리드 레이아웃과 타이포그래피로 트렌디한 브랜드 경험을 구축했습니다.",
    color: "#4a5fdc",
    tags: ["UI/UX", "Web", "Fashion"],
    images: {
      main: "/images/portfolio/rb/main.png",
      image2: "/images/portfolio/rb/2.png",
      image3: "/images/portfolio/rb/3.png",
    },
  },
  {
    id: 2,
    title: "B&W",
    client: "Portfolio Template",
    category: "Web Design",
    year: "2024",
    description: "미니멀하고 세련된 포트폴리오 템플릿. 흑백 대비와 깔끔한 레이아웃으로 작품에 집중할 수 있는 경험을 제공합니다.",
    color: "#1a1a1a",
    tags: ["Web", "Minimalist"],
    images: {
      main: "/images/portfolio/bw/main.png",
      image2: "/images/portfolio/bw/2.png",
      image3: "/images/portfolio/bw/3.png",
    },
  },
  {
    id: 3,
    title: "MIST FOREST",
    client: "Nature Brand",
    category: "Brand Identity",
    year: "2025",
    description: "자연에서 영감을 받은 브랜드 아이덴티티. 안개 낀 숲의 신비로운 분위기를 웹사이트에 담아냈습니다.",
    color: "#4ecdc4",
    tags: ["Branding", "Web"],
    images: {
      main: "/images/portfolio/mist/main.png",
      image2: "/images/portfolio/mist/2.png",
      image3: "/images/portfolio/mist/3.png",
    },
  },
  {
    id: 4,
    title: "YELLOW FI",
    client: "Furniture Store",
    category: "E-commerce",
    year: "2025",
    description: "대담한 노란색과 픽셀 아트 스타일의 가구 쇼핑몰. 독특한 비주얼과 사용자 경험으로 차별화된 브랜드를 구축했습니다.",
    color: "#ffe66d",
    tags: ["E-commerce", "Web", "3D"],
    images: {
      main: "/images/portfolio/yellow/main.png",
      image2: "/images/portfolio/yellow/2.png",
      image3: "/images/portfolio/yellow/3.png",
    },
  },
];