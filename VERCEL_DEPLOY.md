# 🚀 Vercel 배포 가이드

## 📋 배포 전 체크리스트

### ✅ 완료된 작업
- [x] Vercel 설정 파일 생성 (`vercel.json`)
- [x] 빌드 출력 디렉토리 설정 (`dist`)
- [x] SPA 라우팅 설정 (rewrites)

## 🔧 배포 단계

### 방법 1: Vercel CLI 사용 (권장)

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **Vercel 로그인**
   ```bash
   vercel login
   ```

3. **프로젝트 배포**
   ```bash
   vercel
   ```
   
   - 첫 배포 시 질문에 답변:
     - Set up and deploy? **Yes**
     - Which scope? (계정 선택)
     - Link to existing project? **No**
     - Project name? (프로젝트 이름 입력 또는 Enter)
     - Directory? **./** (현재 디렉토리)
     - Override settings? **No**

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

### 방법 2: Vercel 웹 대시보드 사용

1. **GitHub/GitLab/Bitbucket에 코드 푸시**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Vercel 대시보드 접속**
   - https://vercel.com 접속
   - 로그인 후 **Add New Project** 클릭

3. **프로젝트 연결**
   - Git 저장소 선택
   - 프로젝트 설정:
     - **Framework Preset**: Vite
     - **Root Directory**: `./` (현재 디렉토리)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

4. **환경 변수 설정**
   - Settings → Environment Variables에서 추가:
     ```
     VITE_SANITY_PROJECT_ID=ogeoz66y
     VITE_SANITY_DATASET=production
     VITE_SANITY_API_VERSION=2025-01-01
     ```

5. **배포**
   - **Deploy** 버튼 클릭

## 🔑 필수 환경 변수 설정

Vercel 대시보드에서 다음 환경 변수를 설정해야 합니다:

| 변수명 | 값 | 설명 |
|--------|-----|------|
| `VITE_SANITY_PROJECT_ID` | `ogeoz66y` | Sanity 프로젝트 ID |
| `VITE_SANITY_DATASET` | `production` | Sanity 데이터셋 이름 |
| `VITE_SANITY_API_VERSION` | `2025-01-01` | Sanity API 버전 |

### 환경 변수 설정 방법

1. Vercel 대시보드 → 프로젝트 선택
2. **Settings** → **Environment Variables**
3. 각 변수 추가:
   - **Name**: `VITE_SANITY_PROJECT_ID`
   - **Value**: `ogeoz66y`
   - **Environment**: Production, Preview, Development 모두 선택
4. **Save** 클릭
5. 나머지 변수도 동일하게 추가

## 📝 배포 후 확인 사항

1. ✅ 빌드가 성공적으로 완료되었는지 확인
2. ✅ 웹사이트가 정상적으로 로드되는지 확인
3. ✅ Sanity 데이터가 정상적으로 표시되는지 확인
4. ✅ 이미지가 정상적으로 로드되는지 확인
5. ✅ 라우팅이 정상적으로 작동하는지 확인

## 🔄 자동 배포 설정

Git 저장소와 연결하면:
- `main` 브랜치에 푸시 → 프로덕션 배포
- 다른 브랜치에 푸시 → 프리뷰 배포
- Pull Request 생성 → 프리뷰 배포

## 🐛 문제 해결

### 빌드 실패 시
1. 로컬에서 빌드 테스트:
   ```bash
   npm run build
   ```
2. 빌드 로그 확인 (Vercel 대시보드)
3. 환경 변수 확인

### 환경 변수 문제
- Vercel 대시보드에서 환경 변수가 올바르게 설정되었는지 확인
- 변수명 앞에 `VITE_` 접두사가 있는지 확인
- 배포 후 환경 변수 변경 시 재배포 필요

### 라우팅 문제
- `vercel.json`의 `rewrites` 설정 확인
- 모든 경로가 `/index.html`로 리다이렉트되는지 확인

## 📚 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html#vercel)


