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
      main: "https://images.unsplash.com/photo-1639244151653-7807947de5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWFnYXppbmUlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzYzOTgxNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image2: "https://images.unsplash.com/photo-1532455900982-24be47fa89de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwbGF5b3V0fGVufDF8fHx8MTc2NDA1NTAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image3: "https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQwMTk3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      main: "https://images.unsplash.com/photo-1618037087830-5e746497905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmxhY2slMjB3aGl0ZSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjQwNTUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image2: "https://images.unsplash.com/photo-1626828236991-5d6e6b5e97ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbWluaW1hbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjQwMTYzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image3: "https://images.unsplash.com/photo-1658751890679-ada5e8e53471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHZhc2UlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NDA1NTAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      main: "https://images.unsplash.com/photo-1744040982238-a64f0140b852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3NjQwNTUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image2: "https://images.unsplash.com/photo-1548853879-e3135725174c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2Mzk3MTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image3: "https://images.unsplash.com/photo-1665153949610-2366125a5635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwYXRoJTIwdHJlZXN8ZW58MXx8fHwxNzY0MDU1MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      main: "https://images.unsplash.com/photo-1638980660089-f8c568d5b9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY0MDU1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image2: "https://images.unsplash.com/photo-1762803841693-9efdc2fbf446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMHByb2R1Y3R8ZW58MXx8fHwxNzYzOTY2NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      image3: "https://images.unsplash.com/photo-1696774566203-b5883558badd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzaG93cm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQwNTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  },
];
