
## **1. 프로젝트 소개**
### ✨CRUD 연습을 위한 개인 프로젝트입니다✨
- 날짜별로 각각 todo를 생성하고 수정/삭제할 수 있도록 구현
- 프로젝트 링크👉 https://dumibell.github.io/todolist/
<br/>


## **2. 개발 기간 및 인원**

- 개발 기간 : 2022/10/31 ~ 2022/11/01
- 개발 인원

  - 프론트엔드(1명): 조예지
  - 백엔드(1명): 조예지

<br/>


## **3. 적용 기술**

#### Front-End
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/TailwindCss-14263D?style=for-the-badge&logo=TailwindCss&logoColor=white"/>

#### Back-End
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/>
<br/>


## **4. 구현 기능**
### 1. 회원가입/로그인
  - Firebase Authentication 이용
  - 라우터를 이용해 로그인이 되어있을 경우 메인 화면을, 로그인이 되어있지 않을 경우 로그인 화면을 띄우도록 구현.
  
#### 1) 회원가입
  ![todo-signUp](https://user-images.githubusercontent.com/100185602/201638624-a4154ef6-ddd9-44ff-9826-5d05478e963d.gif)
  
 - password confirm input을 통해 입력한 두 개의 비밀번호가 다를 경우 빨간색 경고 문구 뜨게 구현.
 - 회원가입을 하자마자 이름을 설정할 수 있도록 displayName이 없을 경우 "이름입력"이라는 문구가 bounce되도록 구현.
 

#### 2) 로그인
![todo-signIn](https://user-images.githubusercontent.com/100185602/201638670-c73b4576-95d1-4d59-a2ed-873b4d55d2b4.gif)

- 입력한 정보로 가입된 계정이 없을 경우 "일치하는 회원정보가 없습니다"
- Firebase에서 제공하는 google login 기능 추가

<br/>

### 2. Todo List
#### 1) todo 생성
![todo](https://user-images.githubusercontent.com/100185602/201640679-3599569b-f212-4c9f-a3b9-86d307f33fcc.gif)

