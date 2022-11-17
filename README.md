
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

![todo-signup](https://user-images.githubusercontent.com/100185602/201822396-da3aa70a-f6f6-4b42-ab4f-1cc214d70c6e.gif)
  
 - password confirm input을 통해 입력한 두 개의 비밀번호가 다를 경우 빨간색 경고 문구 뜨게 구현.
 - 회원가입을 하자마자 이름을 설정할 수 있도록 displayName이 없을 경우 "이름입력"이라는 문구에 bounce 효과를 줌.
 

#### 2) 로그인

![todo-signin](https://user-images.githubusercontent.com/100185602/201822424-bbb57ab7-88a2-4700-901e-64c8bd334410.gif)


- 입력한 정보로 가입된 계정이 없을 경우 "일치하는 회원정보가 없습니다"
- Firebase에서 제공하는 google login 기능 추가

<br/>

### 2. Todo List

![todo-date](https://user-images.githubusercontent.com/100185602/201822519-894da067-a808-4603-aded-72e930aa8aa2.gif)


day.js 라이브러리를 사용해 날짜별로 투두를 생성하고 확인할 수 있도록 구현했습니다. (리드미 작성 날짜: 2022/11/15)
- 처음 로그인시 현재 날짜의 투두리스트가 보여짐.
- 화살표 버튼을 통해 이전/다음 날짜로 이동 가능.
<br/>

#### 1) todo 생성

![todo-create](https://user-images.githubusercontent.com/100185602/201822445-e54639b5-106d-48f0-8e24-8e41f9ce0ef1.gif)

⬇️ todo 생성시 저장되는 db구조

```js
    await addDoc(collection(dbService, userObj.uid), {
      text: todo,
      createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      creatorId: userObj.uid,
      date: date.format("YYYY.MM.DD"),
      checked: Boolean(false),
    });
  ```
  <br/>
  
  - date state는 날짜를 변경할 때마다 값이 변경되도록 만들어 todo를 생성할 때 같이 db에 저장되도록 함.
  - checked는 처음에 false로 생성하고, 이후 사용자가 체크박스를 클릭할 때 true로 업데이트 되도록 구현.

#### 2) todo 수정

![todo-update](https://user-images.githubusercontent.com/100185602/201822476-6e41435d-cccd-43b5-8eff-93487498b6ff.gif)

- 

#### 3) todo 삭제
![todo-delete](https://user-images.githubusercontent.com/100185602/201822717-c05b0c2a-e3c5-4ac0-a7ba-77362a89c1ff.gif)
