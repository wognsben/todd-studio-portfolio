# 이미지 참조 가이드

사용자가 제공한 모든 이미지들을 **제공 순서대로** 정리

## 사용자 제공 이미지 순서

### 📸 첫 번째 세트 (초기 스크리블 이미지들)
**이미지 1**: 스크리블 아트
- **파일**: `704eb0ad72d4b75ea89f692f5bb4f374d8ae5163.png`
- **변수명**: `scribbleArt`
- **현재 사용**: App.tsx 배경 장식 (페이지 상단 우측)

**이미지 2**: 스크리블 꽃다발
- **파일**: `e642f3a26144e8fc59144d43a92d2a476ca151ff.png`
- **변수명**: `scribbleBouquet`
- **현재 사용**: App.tsx 배경 장식 (페이지 좌측 상단)

**이미지 3**: 스크리블 초상화
- **파일**: `43460bda5851173b4cdca07ffd882dfb8b33bdf2.png`
- **변수명**: `scribblePortrait`
- **현재 사용**: App.tsx 배경 장식 (페이지 우측 하단)

**이미지 4**: 스크리블 강아지
- **파일**: `2859654151b52e65793142075abda8486ff717f9.png`
- **변수명**: `scribbleDog`
- **현재 사용**: App.tsx 배경 장식 (페이지 좌측 중간)

**이미지 5**: 스크리블 드레스
- **파일**: `d5d28dd51f8ce7a652e2272d03ae2495caef90e0.png`
- **변수명**: `scribbleDress`
- **현재 사용**: App.tsx 배경 장식 (페이지 우측 중간)

---

### 📸 두 번째 세트 (여자아이들 & 꽃/구름)
**이미지 6**: 여자아이들이 꽃을 들고 있는 모습
- **파일**: `ea039ee23a556654d0118d8d231ce3642645dbd3.png`
- **변수명**: `scribbleGirls`
- **현재 사용**: 미사용 (이전 버전에서 Hero 섹션에 사용됨)

**이미지 7**: 꽃 사진과 구름 사진
- **파일**: `f152d5908596c6814eea47e93655fb74a52aecd8.png`
- **변수명**: `scribbleFlowersClouds`
- **현재 사용**: 미사용 (이전 버전에서 Hero 섹션에 사용됨)

---

### 📸 세 번째 세트 (사람들)
**이미지 8**: 사람들 스크리블
- **파일**: `263b30ab3afed5c92c17ca0d40a0ee132614a897.png`
- **변수명**: `scribblePeople`
- **현재 사용**: App.tsx 배경 장식 (페이지 하단 좌측)

---

### 📸 네 번째 세트 (히어로 & 빨간 테두리)
**이미지 9**: 히어로 섹션 메인 이미지
- **파일**: `041816a1438c5725d64b6c4914971421357a2e5b.png`
- **변수명**: `heroImage`
- **현재 사용**: ✅ **Home.tsx - Hero 섹션 메인 이미지** (우측 대형 이미지)

**이미지 10**: 빨간 테두리 사진
- **파일**: `b39c7c87301682d4eb10ef7e190e471806679f84.png`
- **변수명**: `drawnImage`
- **현재 사용**: ✅ **Home.tsx - "Drawn by Life" 섹션 우측 이미지**

---

## 현재 페이지별 사용 현황

### 🏠 Home.tsx
- **이미지 9** (heroImage) → 히어로 섹션 메인
- **이미지 10** (drawnImage) → "Drawn by Life" 우측
- Unsplash 이미지 → "Drawn by Life" 좌측 (흑인이 꽃 들고 있는 사진)

### 📱 App.tsx (배경 장식)
- **이미지 1** (scribbleArt)
- **이미지 2** (scribbleBouquet)
- **이미지 3** (scribblePortrait)
- **이미지 4** (scribbleDog)
- **이미지 5** (scribbleDress)
- **이미지 8** (scribblePeople)

### ℹ️ About.tsx
- **이미지 2** (scribbleBouquet) - 장식용

### ❌ 미사용
- **이미지 6** (scribbleGirls)
- **이미지 7** (scribbleFlowersClouds)