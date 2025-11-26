// Sanity 클라이언트 설정
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity 클라이언트 생성
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ogeoz66y',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-11-26',
  useCdn: true, // 빠른 로딩을 위한 CDN 사용
});

// 이미지 URL 빌더
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// 포트폴리오 가져오기 함수
export async function getPortfolios() {
  const query = `*[_type == "portfolio"] | order(order asc, _createdAt desc) {
    _id,
    _createdAt,
    title,
    year,
    description,
    mainImage,
    "images": images[]{
      asset,
      alt
    },
    videoUrl,
    "videoFile": videoFile.asset->{url},
    order
  }`;
  
  const result = await client.fetch(query);
  return result;
}

// 특정 포트폴리오 가져오기
export async function getPortfolioById(id: string) {
  const query = `*[_type == "portfolio" && _id == $id][0] {
    _id,
    _createdAt,
    title,
    year,
    description,
    mainImage,
    "images": images[]{
      asset,
      alt
    },
    order
  }`;
  
  return await client.fetch(query, { id });
}

