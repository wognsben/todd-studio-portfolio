# 🚀 TODD Studio 백엔드 완전 가이드

## 📋 현재 상태

✅ **완료된 작업:**
- Sanity 클라이언트 패키지 설치
- Sanity 연동 코드 작성 (`src/lib/sanity.ts`)
- 환경 변수 파일 생성 (`.env.local`)

⏳ **다음 단계:**
- Sanity.io 계정 생성 및 프로젝트 설정
- Sanity Studio 설치 (CMS 관리자 패널)

---

## 🎯 Step 1: Sanity.io 계정 생성

1. https://sanity.io 접속
2. **Sign up** 또는 **Login with GitHub**
3. 무료 플랜 선택

---

## 🏗️ Step 2: 새 프로젝트 생성

### 방법 A: 웹에서 생성
1. Dashboard → **Create new project**
2. Project name: `todd-studio-portfolio`
3. Dataset: `production`

### 방법 B: CLI로 생성
```bash
npx @sanity/cli init
```

선택사항:
- **Create new project**: Yes
- **Project name**: todd-studio-portfolio  
- **Dataset**: production
- **Schema templates**: Clean project
- **Output path**: ./sanity

---

## 🔑 Step 3: 프로젝트 ID 확인 및 설정

1. Sanity Dashboard에서 프로젝트 선택
2. **Settings** → **API** 
3. **Project ID** 복사

4. `.env.local` 파일 수정:
```env
VITE_SANITY_PROJECT_ID=abc123xyz  # 여기에 복사한 ID 입력
VITE_SANITY_DATASET=production
```

---

## 📁 Step 4: Sanity Studio 설치

```bash
# Sanity CLI 전역 설치
npm install -g @sanity/cli

# 프로젝트 폴더로 이동
cd Homepage

# Sanity Studio 초기화
npx sanity init --project abc123xyz --dataset production --output-path ./sanity
```

---

## 🎨 Step 5: 포트폴리오 스키마 생성

`sanity/schemas/portfolio.ts` 파일 생성:

```typescript
export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '프로젝트 제목',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: '클라이언트',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: '카테고리',
      type: 'string',
      options: {
        list: [
          { title: 'UI/UX Design', value: 'UI/UX Design' },
          { title: 'Web Design', value: 'Web Design' },
          { title: 'Brand Identity', value: 'Brand Identity' },
          { title: 'E-commerce', value: 'E-commerce' },
        ],
      },
    },
    {
      name: 'year',
      title: '연도',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: '설명',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().min(50).max(500),
    },
    {
      name: 'color',
      title: '대표 색상',
      type: 'string',
      description: '예: #4a5fdc',
    },
    {
      name: 'mainImage',
      title: '메인 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt 텍스트',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: '추가 이미지',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt 텍스트',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.min(2).max(5),
    },
    {
      name: 'order',
      title: '정렬 순서',
      type: 'number',
      description: '작은 숫자가 위에 표시됩니다',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'mainImage',
    },
  },
};
```

---

## 🌐 Step 6: Sanity Studio 실행

```bash
cd sanity
npm install
npm run dev
```

→ `http://localhost:3333` 접속
→ Google/GitHub 계정으로 로그인
→ 포트폴리오 추가 시작! 🎉

---

## 💻 Step 7: 프론트엔드 연동

기존 `src/data/portfolio.ts`를 Sanity에서 가져오도록 수정:

```typescript
// src/hooks/usePortfolios.ts (새 파일)
import { useState, useEffect } from 'react';
import { getPortfolios, urlFor } from '../lib/sanity';

export function usePortfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolios().then((data) => {
      // Sanity 데이터를 기존 형식으로 변환
      const formatted = data.map((item: any, index: number) => ({
        id: index + 1,
        title: item.title,
        client: item.client,
        category: item.category,
        year: item.year,
        description: item.description,
        color: item.color,
        tags: [], // tags 제거됨
        images: {
          main: urlFor(item.mainImage).width(1200).url(),
          image2: item.images[0] ? urlFor(item.images[0]).width(800).url() : '',
          image3: item.images[1] ? urlFor(item.images[1]).width(800).url() : '',
        },
      }));
      
      setPortfolios(formatted);
      setLoading(false);
    });
  }, []);

  return { portfolios, loading };
}
```

---

## 📝 Step 8: 포트폴리오 추가 방법

1. **Sanity Studio** 접속 (localhost:3333)
2. **Portfolio** 클릭
3. **+ Create new** 버튼
4. 정보 입력:
   - 프로젝트 제목
   - 클라이언트명
   - 카테고리 선택
   - 연도
   - 설명 (50-500자)
   - 대표 색상 (#4a5fdc 형식)
   - 메인 이미지 업로드 (권장: 1200x900px)
   - 추가 이미지 2개 이상 (권장: 800x600px)
5. **Publish** 버튼
6. 웹사이트 자동 업데이트! ✅

---

## 🎯 완료 후 작업 흐름

```
포트폴리오 추가/수정하고 싶을 때:
→ http://localhost:3333 접속
→ 로그인
→ Portfolio 편집
→ Publish
→ 웹사이트 자동 반영 ✨
```

**코드 수정 필요 없음!**

---

## 🚀 배포 시 설정

Netlify 환경 변수에 추가:
```
VITE_SANITY_PROJECT_ID=abc123xyz
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-01-01
```

---

## 📞 다음 단계

CLI로 계속 진행하시려면:
```bash
npx @sanity/cli init
```

또는 제가 단계별로 안내해드릴 수 있습니다!

