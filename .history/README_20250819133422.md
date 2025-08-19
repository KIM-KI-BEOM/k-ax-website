# 🤖 K-AX | Korea AI Transformation

> 인공지능 기술로 미래를 혁신하는 전문 기업

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)](https://pages.github.com/)

## 📋 프로젝트 소개

Korea AI Transformation(K-AX)의 공식 홈페이지입니다. 
TypeScript와 모던 웹 기술을 활용하여 제작된 반응형 기업 웹사이트입니다.

## ✨ 주요 기능

- 🎨 **모던 UI/UX**: 깔끔하고 전문적인 디자인
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- 🔥 **TypeScript**: 타입 안전성과 개발 효율성
- 🌙 **다크모드**: 사용자 선호도에 따른 테마 전환
- ✉️ **문의 양식**: 실시간 폼 검증 및 사용자 피드백
- 📰 **뉴스 시스템**: 동적 뉴스 및 공지사항 관리
- 🔍 **검색 기능**: 컨텐츠 검색 및 하이라이트
- 🎭 **애니메이션**: 부드러운 페이지 전환 효과
- 📊 **성능 모니터링**: 로딩 시간 및 리소스 추적

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, TypeScript
- **Build Tool**: TypeScript Compiler
- **Deployment**: GitHub Pages
- **Fonts**: Noto Sans KR (Google Fonts)
- **Icons**: Emoji & Unicode Symbols

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/yourusername/k-ax-website.git
   cd k-ax-website
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **빌드**
   ```bash
   npm run build
   ```

5. **로컬 서버 실행**
   ```bash
   npm run serve
   ```

## 📁 프로젝트 구조

```
k-ax-website/
├── src/
│   └── script.ts          # TypeScript 소스 코드
├── dist/                  # 컴파일된 JavaScript 파일
├── index.html             # 메인 HTML 파일
├── styles.css             # 스타일시트
├── tsconfig.json          # TypeScript 설정
├── package.json           # 프로젝트 의존성
├── .gitignore            # Git 제외 파일
├── README.md             # 프로젝트 문서
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions 배포 설정
```

## 🎯 주요 섹션

### 🏠 HOME
- 히어로 섹션
- 주요 서비스 소개
- 회사 통계

### 🏢 COMPANY
- **Introduce**: 회사 소개 및 비전
- **History**: 회사 연혁
- **News & Notice**: 뉴스 및 공지사항
- **Recruit**: 채용 정보

### 💼 BUSINESS
- **AI Solution**: AI 솔루션 소개
- **Consulting**: AI 컨설팅 서비스
- **Automation**: 업무 자동화

### 🛠️ SOLUTION
- **Products**: 제품 정보
- **Services**: 서비스 정보
- **Portfolio**: 포트폴리오

### 📞 SUPPORT
- **Contact Us**: 연락처 및 문의 양식
- **FAQ**: 자주 묻는 질문
- **Download**: 자료 다운로드

### 🤝 PARTNER
- **Partners**: 파트너십 정보
- **Investors**: 투자자 정보

## 🔧 개발 가이드

### TypeScript 컴파일

```bash
# 타입 체크만 실행
npm run type-check

# 개발 모드 (파일 변경 감지)
npm run dev

# 프로덕션 빌드
npm run build
```

### 코드 품질

```bash
# ESLint 실행
npm run lint
```

### 배포

```bash
# GitHub Pages 배포
npm run deploy
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: #ffd700 (Golden Yellow)
- **Secondary**: #1a1a2e (Dark Blue)
- **Accent**: #ff6b6b (Coral Red)
- **Background**: #f8f9fa (Light Gray)
- **Text**: #333333 (Dark Gray)

### 타이포그래피

- **Primary Font**: Noto Sans KR
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### 반응형 브레이크포인트

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🌐 배포

### GitHub Pages

1. GitHub 저장소에 코드 푸시
2. `npm run deploy` 실행
3. GitHub Pages에서 자동 배포

### 커스텀 도메인

`www.k-ax.com` 도메인을 사용하려면:

1. DNS 설정에서 CNAME 레코드 추가
2. GitHub 저장소 설정에서 커스텀 도메인 설정
3. SSL 인증서 자동 발급

## 📱 모바일 최적화

- 반응형 그리드 시스템
- 터치 친화적 인터페이스
- 모바일 우선 디자인
- 성능 최적화

## ♿ 접근성

- WCAG 2.1 AA 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 고대비 모드 지원

## 🔒 보안

- XSS 방지
- CSRF 보호
- 입력값 검증
- HTTPS 강제

## 📊 성능

- 이미지 최적화
- CSS/JS 압축
- 지연 로딩
- 캐싱 전략

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **Website**: [www.k-ax.com](https://www.k-ax.com)
- **Email**: info@k-ax.com
- **Phone**: 02-1234-5678
- **Address**: 서울특별시 강남구 테헤란로 123길 45

## 🙏 감사의 말

- [Noto Sans KR](https://fonts.google.com/specimen/Noto+Sans+KR) - 한글 폰트 제공
- [TypeScript](https://www.typescriptlang.org/) - 타입 안전성 제공
- [GitHub Pages](https://pages.github.com/) - 무료 호스팅 제공

---

**K-AX | Korea AI Transformation** - AI 기술로 미래를 혁신합니다 🚀
