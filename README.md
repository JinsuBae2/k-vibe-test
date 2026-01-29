# K Vibe Test 🚀

사용자가 다양한 퀴즈를 즐기고 결과를 공유할 수 있는 인터랙티브 웹 애플리케이션입니다. **Spring Boot** (백엔드)와 **React + Vite** (프론트엔드) 기술 스택으로 구축되었습니다.

## ✨ 주요 기능

- **다양한 퀴즈 엔진**: 객관식, 성격 테스트, 점수 기반 등 다양한 퀴즈 유형 지원.
- **인터랙티브 UI**: 모바일 최적화 및 반응형 디자인, 부드러운 애니메이션 효과.
- **바이럴 콘텐츠**: 'K-직장인 생존 유형', 'MZ 용어 능력고사', '정신연령 테스트' 등 12종 이상의 꿀잼 퀴즈 탑재.
- **AI 이미지 생성**: 각 퀴즈 테마에 맞는 고퀄리티 커버 이미지 적용.
- **결과 공유**: 친구들과 퀴즈 결과를 쉽게 공유할 수 있는 기능 (예정).

## 🛠 기술 스택 (Tech Stack)

### Backend
- **Java 17+**
- **Spring Boot 3.x**
- **Lombok**
- **Maven**

### Frontend
- **React 18**
- **Vite**
- **Tailwind CSS**
- **Axios**

## 🚀 시작하기 (Getting Started)

### 필요 조건 (Prerequisites)
- JDK 17 이상
- Node.js 18 이상
- Maven (선택 사항, 프로젝트 내 wrapper 포함)

### 백엔드 실행 (Backend Setup)
```bash
cd backend
mvn spring-boot:run
```
서버 실행 주소: `http://localhost:8080`

### 프론트엔드 실행 (Frontend Setup)
```bash
cd frontend
npm install
npm run dev
```
클라이언트 실행 주소: `http://localhost:5173`

## 📂 프로젝트 구조 (Project Structure)

```
├── backend/          # 스프링 부트 애플리케이션
│   ├── src/main/java # 자바 소스 코드
│   └── src/main/resources # 설정 파일 및 JSON 데이터
├── frontend/         # 리액트 애플리케이션
│   ├── src/components # UI 컴포넌트
│   └── src/pages     # 페이지 컴포넌트 (홈, 퀴즈, 결과)
└── README.md         # 프로젝트 문서
```

## 📝 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.
