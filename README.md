![header](https://capsule-render.vercel.app/api?type=rounded&color=auto&height=150&section=header&text=weKEA&fontSize=100)

<br>

# Project

- wecode 38기 1차 프로젝트
- 스웨덴의 가구 브랜드 iKEA cloning project
- [weKEA 시연영상](https://youtu.be/F_pV4OFjY4A)

# 개발 인원 및 기간

- 개발기간 : 2022/10/17 ~ 2022/10/27
- 개발 인원 : Front-End 3명, Back-End 3명
- Front-End : [김도영](https://github.com/doyoungkim1994), [김솔(PM)](https://github.com/Solrasido55), [양동선](https://github.com/yangseon3)
- Back-End : [김희연](https://github.com/Cein1), [이찬우](https://github.com/c0zyb1ue), [정해만](https://github.com/haemong)

# 담당 티켓

## 김솔(PM)

-> `Detail Page`,`Cart`, `Wishlist`, `Nav Bar`

## 김도영

-> `Main Page`, `List Page`, `Footer`, `Purchase History`

## 양동선

-> `Login`, `Sign up`, `My page`, `Alert Modal`


# 적용 기술

- Front-End : <img src="https://img.shields.io/badge/Javscript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/sass-CC6699?style=flat&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/Create React App-09D3AC?style=flat&logo=CreateReactApp&logoColor=white"/>
- Back-End : <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/EC2-FF9900?style=flat&logo=AmazonEC2&logoColor=white"/> <img src="https://img.shields.io/badge/RDS-527FFF?style=flat&logo=AmazonRDS&logoColor=white"/> <img src="https://img.shields.io/badge/S3-569A31?style=flat&logo=AmazonS3&logoColor=white"/> <img src="https://img.shields.io/badge/PostMan-FF6C37?style=flat&logo=PostMan&logoColor=white"/>
- common : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=AmazonAWS&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white"/>
- 협업툴 : <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>

# 관련 링크

- [백엔드 깃헙주소](https://github.com/wecode-bootcamp-korea/38-1st-weKEA-backend)
- [프론트엔드 깃헙주소](https://github.com/wecode-bootcamp-korea/38-1st-weKEA-frontend)
- [Notion 프로젝트 소개](https://www.notion.so/a765855cac2d43ecb083e59a5a5957fd)

# 구현 기능

## Main Page

- 메인 페이지 레이아웃
- 해당 카테고리로 이동할 수 있는 링크가 달린 이미지

## Nav

- 로그인 여부에 따른 레이아웃 변화
<br>
  <img width="228" alt="스크린샷 2022-10-28 오후 5 50 27" src="https://user-images.githubusercontent.com/106805946/198546371-fe33a401-13aa-47d0-aee3-159a4f92bd0c.png">
  <img width="196" alt="스크린샷 2022-10-28 오후 5 48 56" src="https://user-images.githubusercontent.com/106805946/198546063-61f68e4b-5b97-4357-80de-d8e36695d226.png">
    <img width="478" alt="스크린샷 2022-10-28 오후 5 50 47" src="https://user-images.githubusercontent.com/106805946/198546388-c99d6908-22fe-4866-b3fe-7087b4082aa1.png">
  <img width="480" alt="스크린샷 2022-10-28 오후 5 49 19" src="https://user-images.githubusercontent.com/106805946/198546091-1a8b5af8-6581-4f0a-b80a-2fe7a245150b.png">
- 메뉴바, 로그인바 마운트/언마운트시 애니메이션

  ![NAV1](https://user-images.githubusercontent.com/106805946/198544228-592d2ecf-fb6d-4057-9b53-b556e2cfe22b.gif)

  ![NAV2](https://user-images.githubusercontent.com/106805946/198544243-cc44cffb-4d58-4e24-83ba-f7477d182beb.gif)

> mount될때는 transition을 사용해 애니메이션을 구성하고, Unmount될때는 먼저 @keyframes로 만들어둔 사라지는 애니메이션을 적용한 후 애니메이션이 끝나는 시점에 unmount되도록 setTimeout을 활용
## Footer

- 상수데이터를 활용한 레이아웃 구현

## Login

- 유효성 검사
- 유효성 여부에 의한 레이아웃 변화
  ![LOGIN1](https://user-images.githubusercontent.com/106805946/198544213-6982b8bd-2701-4a4d-9c8e-cb24a759acf9.gif)

## SignUp

- 유효성 검사
- 유효성 여부에 의한 레이아웃 변화

## List page

- 쿼리스트링을 사용한 pagination, sort, filter 기능
  ![list 1](https://user-images.githubusercontent.com/106805946/198544194-c3b01127-283c-4d70-a035-c816f9df0963.gif)
- 장바구니, 위시리스트에 추가 기능
  ![list 2](https://user-images.githubusercontent.com/106805946/198544201-8c13cf5c-7093-440b-b33f-3d1e9f558d7b.gif)

## Detail Page

- 제품 설명, 치수, 장바구니, 위시리스트를 눌렀을 때 나오는 사이드바를 하나의 컴포넌트로 재사용
  ![detail2](https://user-images.githubusercontent.com/106805946/198544161-ceb83842-3a1e-428b-b967-fcbeb5ca30ce.gif)
- 이미지를 클릭하면 캐러셀이 포함된 모달이 나오도록 구현
  ![detail1-1](https://user-images.githubusercontent.com/106805946/198544095-cecf8bf1-bf01-4c90-adfc-42b2cea76dc0.gif)
  
> 이미지를 클릭하면 해당 이미지의 인덱스+1을 State에 저장되고 캐러셀속 슬라이더의 위치값을 인덱스에 사이즈를 곱한값으로 이동시켜주도록 구현하고 forward화살표를 클릭하면 인덱스 state가 +1 되고 back화살표를 클릭하면 -1되도록 구현
  
- 색상을 선택하지 않으면 장바구니에 추가하지 못하게 설정
- 장바구니, 위시리스트에 추가 기능
  ![deatil 3](https://user-images.githubusercontent.com/106805946/198544020-27eb2a1d-fa37-4b84-9f01-d0a61d9532e4.gif)

## Cart

- 상품 수량 변경, 삭제 기능
  ![cart2](https://user-images.githubusercontent.com/106805946/198542869-bb19effc-de9e-4a81-850c-f04da041fb6d.gif)
  ![detail4](https://user-images.githubusercontent.com/106805946/198544181-4091f994-6989-4911-81e6-8bf1bdce1c14.gif)
- 위시리스트에 추가 기능
  ![cart1](https://user-images.githubusercontent.com/106805946/198542862-0fe191ed-0be2-4774-9ba4-47006c76a98c.gif)
- 가격과 수량을 곱해 품목별 총 가격을 표시
- 품목별 총 가격을 모두 더한 총 가격 표시
> 품목별 총 가격을 배열에 저장한 후 reduce 메소드를 사용해 누산해주는 방식
- 쿠폰 입력창 구현
  ![cart3](https://user-images.githubusercontent.com/106805946/198542877-bde061a0-9c7f-4fae-8658-2bbae2312ab5.gif)
- 결제하기 버튼을 클릭하면 "결제하시겠습니까?"가 포함된 모달이 mount됨
- 모달의 확인버튼을 누르면 카트에 담긴 제품이 결제되고 보유한 포인트가 차감됨
  ![cart4](https://user-images.githubusercontent.com/106805946/198542883-18d836da-b8e3-4522-b73c-03b36d1345ba.gif)

## WishList

> 장바구니에는 productOptionId를 저장하고, 위시리스트에는 productId로 저장하는 상태였는데, productId 하나당 productOptionId가 두개가 존재하여 하나의 productId를 위시리스트에 저장하면 두개의 productOptionId가 출력되는 문제가 있었다. 이러한 문제를 해결하기 위해 GET요청을 통해 위시리스트 목록 배열을 받아온 후 홀수번째의 요소만 state에 저장되도록 하여 해결했다.
```javascript
  const addAllProductToCart = () => {
    wishLists.map((product, index) => {
      if (index % 2 === 1) {
        addToCart(product.id, popAlertModal);
      }
    });
  };
  ```
- 장바구니에 추가 기능
- 모든 상품 장바구니에 추가 기능

![wishlist1](https://user-images.githubusercontent.com/106805946/198816079-c1f7e549-9d34-4fc6-a3e4-08012129ff7d.gif)

> 장바구니에 추가를 하면 fetch를 통해 POST요청을 보내 처리했는데, 위시리스트의 "장바구니에 모든 제품 추가"를 클릭하면 map 메소드를 사용해 위시리스트 배열속 요소의 수 만큼 POST요청을 보내도록 구현
- 상품 삭제 기능

## My Page

- 유저 정보를 받아와 이름과 포인트를 표시

## Purchase History

- 결제 내역 표시
- 주문취소 기능
  ![purchase1](https://user-images.githubusercontent.com/106805946/198544270-f60e6783-8a62-4327-bd26-f627a5f09e6e.gif)
  
## Toast
- 장바구니/위시리스트에 추가, 주문취소등의 상황에 Toast가 나타나도록 구현
- @keyframes를 사용해 마운트 됐을 때 화면 밖에서 나타났다가 잠깐 머무른 후 화면 밖으로 사라지게 만든 후 setTimeout을 사용해 애니메이션이 끝나는 시점에 unmount되도록 구현
