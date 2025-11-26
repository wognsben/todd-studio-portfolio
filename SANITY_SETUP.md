# Sanity.io CMS 설정 가이드

## 📦 1단계: 패키지 설치

```bash
npm install @sanity/client @sanity/image-url
npm install --save-dev @sanity/cli
```

## 🏗️ 2단계: Sanity 프로젝트 초기화

```bash
npx sanity init
```

선택사항:
- **Create new project**: Yes
- **Project name**: todd-studio-portfolio
- **Dataset**: production
- **Schema templates**: Clean project

## 📁 3단계: 프로젝트 구조

```
Homepage/
├── sanity/                    # Sanity Studio (CMS)
│   ├── schemas/
│   │   ├── portfolio.ts       # 포트폴리오 스키마
│   │   └── index.ts
│   ├── sanity.config.ts
│   └── package.json
├── src/
│   ├── lib/
│   │   └── sanity.ts          # Sanity 클라이언트
│   └── ...
```

## 🎨 4단계: 포트폴리오 스키마 정의

포트폴리오 데이터 구조:
- ✅ 제목 (title)
- ✅ 클라이언트 (client)
- ✅ 카테고리 (category)
- ✅ 연도 (year)
- ✅ 설명 (description)
- ✅ 색상 (color)
- ✅ 메인 이미지 (mainImage)
- ✅ 추가 이미지 (images array)
- ✅ 순서 (order) - 자동 정렬용
- ✅ 생성일 (createdAt) - 자동

## 🔑 5단계: API 키 설정

`.env.local` 파일:
```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-01-01
```

## 🌐 6단계: Sanity Studio 실행

```bash
cd sanity
npm run dev
```

→ `http://localhost:3333` 에서 CMS 관리

## 📝 7단계: 포트폴리오 추가

1. Sanity Studio 접속
2. "Portfolio" 클릭
3. 이미지 업로드 + 정보 입력
4. Publish
5. 자동으로 웹사이트에 반영 ✅

## 🎯 장점

- ✅ 코드 수정 없이 포트폴리오 추가/수정
- ✅ 이미지 자동 최적화
- ✅ 최신순 자동 정렬
- ✅ 가이드라인 제공 (필수 필드, 이미지 사이즈 등)

