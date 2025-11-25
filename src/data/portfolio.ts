// Portfolio data shared across Home and Work pages
import rbMain from "figma:asset/6a7575571474ebf4591c967ab1e6418384ba06b1.png";
import rbImage2 from "figma:asset/d412fb27c69f69d36d0cbffd88b059281e8b83ed.png";
import rbImage3 from "figma:asset/bad6b33e2ce93baf945c4c3d01c23b4902a3a132.png";
import bwMain from "figma:asset/3c576367987f0b1544d49df23f3b39859ba41267.png";
import bwImage2 from "figma:asset/7cf9c46d5d6c9269b6f36bcd004ea41b1918b5e0.png";
import bwImage3 from "figma:asset/dfe4ee2f9bfa01cde2a15eb4ab44cbf3a1fcc76e.png";
import mistMain from "figma:asset/710982991a83cb09d6719798395dd2feffd1943a.png";
import mistImage2 from "figma:asset/564fb4953c719c3a3be8b9725767596657850d0e.png";
import mistImage3 from "figma:asset/850ddb83e1d85608807bff85313a56431c85281e.png";
import yellowMain from "figma:asset/983dd6b4ec0dd780a2a30fabd5a275437c3f3689.png";
import yellowImage2 from "figma:asset/06a2f90cafc3c201c8bb2aa0a27e5dd8830b725d.png";
import yellowImage3 from "figma:asset/14b89926704be66532d28bbd529bb38d8ff8734a.png";

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
      main: rbImage3,
      image2: rbMain,
      image3: rbImage2,
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
      main: bwMain,
      image2: bwImage2,
      image3: bwImage3,
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
      main: mistMain,
      image2: mistImage2,
      image3: mistImage3,
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
      main: yellowMain,
      image2: yellowImage2,
      image3: yellowImage3,
    },
  },
];