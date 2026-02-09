# UI 구현 및 정보 구조 (IA) 명세서
본 문서는 프로젝트의 디렉토리 구조가 실제 서비스의 정보 구조와 어떻게 매핑되는지를 정의한 명세서입니다.

## 1. 프로젝트 디렉토리 구조(Directory Tree)
```
08_UI구현
├─ common
│  ├─ footer.html
│  └─ header.html
├─ css
│  ├─ footer.css
│  ├─ header.css
│  ├─ index.css
│  ├─ login.css
│  ├─ mypage.css
│  ├─ normalize.css
│  ├─ order.css
│  ├─ product.css
│  └─ style.css
├─ images
│  ├─ icn_cart.svg
│  ├─ icn_menu.svg
│  ├─ icn_search.svg
│  ├─ icn_user.svg
│  ├─ logo.svg
│  ├─ index
│  │  ├─ best1.png
│  │  ├─ best2.png
│  │  ├─ best3.png
│  │  ├─ best4.png
│  │  ├─ main_img.jpg
│  │  └─ photo.png
│  ├─ mypage
│  │  ├─ icn_bell.png
│  │  ├─ icn_cupon.png
│  │  ├─ icn_heart.png
│  │  ├─ icn_point.png
│  │  ├─ icn_review.png
│  │  └─ line.png
│  ├─ order
│  │  ├─ grayline.png
│  │  ├─ kakao.png
│  │  ├─ naver.png
│  │  ├─ payco.png
│  │  ├─ product_img.png
│  │  ├─ samsung.png
│  │  ├─ ssg.png
│  │  └─ toss.png
│  └─ pro_list
│     ├─ num1.png
│     ├─ num2.png
│     ├─ num3.png
│     ├─ num4.png
│     ├─ num5.png
│     └─ pro_main.png
│     ├─ product1.png
│     ├─ product2.png
│     ├─ product3.png
│     ├─ product4.png
│     ├─ product5.png
│     ├─ product6.png
├─ js
│  ├─ common.js
│  └─ jquery-3.1.1.min.js
├─ index.html
├─ login.html
├─ mypage.html
├─ order.html
└─ product_list.html

```

## 2. 정보 구조(IA) 및 기능 매핑

| 구분 | 페이지명 | 파일명 | 설명 |
|------|----------|--------|------|
| 메인 | 메인 페이지 | index.html | 메인 배너, 베스트 상품 영역, 모델 이미지 배치 |
| 로그인 | 로그인 페이지 | login.html | 로그인 입력 폼 및 소셜 로그인 UI 구현 |
| 마이페이지 | 마이페이지 | mypage.html | 회원 정보/메뉴 리스트 UI 구현 |
| 주문/결제 | 주문결제 페이지 | order.html | 결제 예정 금액, 배송지 정보 UI 구현 |
| 공통 | 헤더 | common/header.html | 로고, 메뉴/검색/장바구니/마이페이지 아이콘 구성 |
| 공통 | 푸터 | common/footer.html | 이용약관/개인정보처리방침, 회사 정보 표시 |

---

## 3. 구조 설계 원칙

- ### 자원 분리
  이미지, css, js 파일을 폴더별로 분리하여 프로젝트 규모가 커져도 파일 탐색과 관리가 쉽도록 구조를 통일하였습니다.
- ### 폴더 구조의 명확성 확보 
  폴더 및 파일명은 한눈에 목적이 드러나도록 구성하여 작업 중 혼동 없이 원하는 파일을 빠르게 찾을 수 있도록 구성하였습니다.
- ### IA 기반 구조화
  기획된 정보구조(페이지 구성 및 메뉴 흐름)가 실제 프로젝트 폴더 구조와 동일하게 연결되도록 설계하여 유지보수 및 확장에 용이하도록 하였습니다.

## 4.기술적 특징

### 4.1 CSS 공통 스타일 적용
  CSS는 리셋 파일과 공통 스타일을 구분하여 관리하였습니다.
  - normailze.css (리셋) / style.css (공통)

### 4.2 이미지 리소스
  이미지 리소스(아이콘/배너)를 images 폴더로 통합 관리 하고, alt 속성을 작성하여, 접근성과 관리 편의성을 확보하였습니다.

### 4.3 공통 Header/Footer 삽입 방식 적용
  공통 영역은 jQuery의 `.load()` 기능을 활용하여 각 페이지에 삽입하였습니다.  
이를 통해 코드 중복을 줄이고 수정 시 전체 페이지에 자동 반영될 수 있도록 구성하였습니다.

```js
$(function () {
  $("#headers").load("common/header.html");
  $("#footers").load("common/footer.html");
});