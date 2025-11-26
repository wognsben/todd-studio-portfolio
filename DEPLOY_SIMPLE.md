# 🚀 Vercel CLI로 간단 배포 (GitHub 불필요)

## 단계별 가이드

### 1단계: Vercel CLI 설치
```bash
npm i -g vercel
```

### 2단계: Vercel 로그인
```bash
vercel login
```
브라우저가 열리면 GitHub/GitLab/Bitbucket 계정으로 로그인

### 3단계: 프로젝트 배포
```bash
vercel
```

질문에 답변:
- **Set up and deploy?** → `Y` (Yes)
- **Which scope?** → 본인 계정 선택
- **Link to existing project?** → `N` (No)
- **What's your project's name?** → Enter (기본값 사용) 또는 원하는 이름 입력
- **In which directory is your code located?** → `./` (Enter)

### 4단계: 환경 변수 설정
배포 후 Vercel 대시보드에서 환경 변수 추가:
1. https://vercel.com 접속
2. 프로젝트 선택
3. **Settings** → **Environment Variables**
4. 다음 변수 추가:
   - `VITE_SANITY_PROJECT_ID` = `ogeoz66y`
   - `VITE_SANITY_DATASET` = `production`
   - `VITE_SANITY_API_VERSION` = `2025-01-01`

### 5단계: 프로덕션 배포
```bash
vercel --prod
```

완료! 🎉


