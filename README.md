# STAND_BY_LAB Front-End Test

## 파일 구조

```text
🎈STAND_BY_LAB_TEST
 ┣ 📂public
 ┃ ┗ 📂Images
 ┃
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂AddToCartButton
 ┃ ┃ ┣ 📂CartProductCard
 ┃ ┃ ┣ 📂CountOperator
 ┃ ┃ ┣ 📂OrderButton
 ┃ ┃ ┣ 📂ProductCard
 ┃ ┃ ┣ 📂ProductName
 ┃ ┃ ┗ 📂RemoveFromCartButton
 ┃ ┃
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📃usedragAndDrop
 ┃ ┃
 ┃ ┣ 📂screens
 ┃ ┃ ┣ 📂MainPage
 ┃ ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┃ ┣ 📂CartList
 ┃ ┃ ┃ ┃ ┗ 📂Checkout
 ┃ ┃ ┃ ┗ 📂Shopping
 ┃ ┃ ┃
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📃calc-checkout-info
 ┃ ┃ ┣ 📃num-to-money
 ┃ ┃ ┣ 📃split-name-by-comma
 ┃ ┃ ┗ 📃style-helper
 ┃ ┃
 ┃ ┣ 📃context
 ┃ ┃
 ┗ ┗ 📃App

```

 <br>

## 주요 파일 별 기능 명세

### ✔ components

화면을 그릴 때 사용되는 컴포넌트들을 구현 <br/>

- `AddToCartButton` : 장바구니 추가 버튼
- `CartProductCard` : 장바구니에 들어간 상품들의 정보를 출력해주는 상품 카드
- `CountOperator` : 장바구니 상품 수량 확인 및 변경 버튼
- `OrderButton` : 결제하기 버튼
- `ProductCard` : 상품 카드
- `ProductName` : 상품 이름 (,에 의해 두 줄로 분리)
- `RemoveFromCartButton` : 장바구니 상품 삭제 버튼

### ✔ hooks

커스텀 훅을 구현

- `useDragAndDrop` : 현 프로젝트에서 작동되어야 할 드래그앤드롭 관련 메서드들을 구현

### ✔ screens

컴포넌트를 조립하여 화면(뷰)를 구현

- `Cart` : 하단의 장바구니 리스트 & 결제 섹션
- `Shopping` : 상단의 쇼핑 섹션

### ✔ utils

유틸함수들

### ✔ context

상품과 장바구니의 상태관리를 위한 `contextAPI`

<br>

## 추가 기능 구현 정보

- 뷰포트의 width에 대응하여 `반응형 웹`을 구현

  - Shopping 컴포넌트에 존재하는 상단 상품 카드들의 크기 resize & flex-wrap
  - Cart 컴포넌트에 존재하는 장바구니 리스트에서 상품 정보 width resize & 특정 지점부터는 상품 이름 없이 이미지만 출력

- 상품을 `Drag&Drop`으로 장바구니에 투입할 수 있도록 구현
- LocalStorage에 cart 정보를 저장하여 새로고침 및 다시 시작해도 `이전 장바구니 상태를 불러올 수 있도록 구현`
- ContextAPI를 통한 `상태 관리`
