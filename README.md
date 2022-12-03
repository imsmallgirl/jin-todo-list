![header](https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&section=header&text=[React]%todo-list&fontSize=90)

## :information_desk_person:&nbsp;  Demo Site
* [https://imsmallgirl.github.io/jin-todo-list/](https://imsmallgirl.github.io/jin-todo-list/)

### :books:&nbsp; 사용 언어
<!-- 주석 -->
<img src="https://img.shields.io/badge/HTML5-EC6231?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-3795ce?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JAVASCRIPT-f8c327?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<!-- 주석 -->
### :mag_right:&nbsp; 사용 스킬
<!-- 주석 -->
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white"/>
<!-- 주석 -->
---

### :bookmark_tabs:&nbsp;&nbsp; 기능 설명

> 할일 추가
* 사용자가 input에 입력한 value 값을 useState (inputText)에 문자열 형태로 넣어줍니다.

* input 옆에 있는 추가 button을 클릭하면, nextTodoList 라는 변수 안에 객체 형태로 데이터를 넣어줍니다.

  - id 값 : App.js 에 있는 todolist 배열 개수 (현재 들어가는 데이터가 첫번째일경우 1)
  - inputText : 유저가 input 에 입력한 할 일 텍스트
  - checked : 할 일이 끝났는지 여부를 알기 위한 기본 값 (false)
  - deleted : 할 일을 지울 건지 여부를 알기 위한 기본 값 (false) => confirm 을 통해 true, false를 알아냄
 
* 객체 형태로 만들어진 데이터는 App.js 에 있는 todoList (useState)로 배열 형태로 들어가게끔 했고, 전에 있던 데이터가 있을 경우 전에 데이터와 합쳐질 수 있도록 concat() 함수를 사용했습니다.

* 추가 button 을 클릭 시, input 의 value 는 비워지도록 했습니다. 또한 비워진 input 일 때 input 창이 focus 될 수 있도록, useRef 을 사용했습니다.
  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/108922353/205433830-35e56b47-c3e0-482e-9acb-d6e4d7283169.gif)


> 할일 삭제
* 생성 된 할 일 목록에서 delete button 을 클릭 시, window 에서 자체적으로 confirm 하는 모달이 나와 true , false 여부를 알 수 있도록 했습니다.
  
  - 어떤 아이템을 클릭했는지 알기 위해서, confirm 에서 확인버튼을 클릭했을 시에, if 문을 사용해 confirm 이 true 일 경우에 <br> todoList에서 아이템을 가져와, 전체 아이템 데이터와, deleted 데이터만 todoList.id 와 todoItem.id 가 같을 시에 true로 변경할 수 있도록 했습니다.
  - 바뀐 데이터를 다시 원래 todoList로 업데이트해줬습니다.

* todoList.deleted 가 true 일 경우에는 null 을 반환하게 해, 삭제 된 item 은 ui 에 보이지 않도록 해주었습니다.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/108922353/205433890-a4e0bfe6-62b7-486e-80ed-33792c55493b.gif)


> 할일 수정
* 수정 button 을 클릭 시, useState 인 edited 를 true 로 만들어줍니다. (현재 수정 상태라는 뜻)
  
  - 수정 전과 수정 중 의 아이콘이 toggle 식으로 바뀔수 있도록 했습니다.
  - edited 가 true 일때 (현재 수정 상태라면) 수정 input 창에 focus가 되도록 useRef 을 사용했습니다.
  
* 수정 input에서 사용자 입력한 값을 newInputText 라는 변수로 값을 넣어주었습니다.

* 수정이 끝난 후, 수정완료 버튼을 클릭시

  - 원래 todoList 의 데이터를 map() 함수를 통해, inputText 값만 수정한 값으로 변경했습니다. (deleted 방식과 유사)
  - 변경한 데이터값을 다시 setTodoList 를 통해 값을 업데이트 해줬습니다.

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/108922353/205434284-d6c55de3-88f0-48cd-a082-3621159b1111.gif)


> 할일 체크
* 체크 button 을 클릭시
  
  - todoList 의 checked 를 toggle 식으로 값이 바뀔 수 있도록, 현재 todoList.checked 값을 부정연산자(!) 를 이용해서, 계속 반대의 값으로 바뀌도록 했습니다.
  - 바뀐 checked 값을 setTodoList 를 사용해, 값을 업데이트 해주었습니다.
  - todoList.checked 값이 true 일 경우 true 인 아이템들은 className 을 checked 로 변경해, css 가 바뀌도록 해주었습니다.
  
* App.js 에서 check 전, check 후 로 ui 를 나누어서 보일 수 있도록 해주었습니다.

  - checkedList 의 초기값은 true 로 지정해, 처음 데이터들은 모두 할 일 목록에서 보일 수 있도록 해주었습니다.
  - checkedList 의 초기값과 todoList.checked 의 boolean 값이 다른 아이템만 완료한 항목에서 보일 수 있도록 해주었습니다.
  
  ```
  if(checkedList !== todoItem.checked) return null;
  ```
  
* checked 가 true 일 경우엔, 수정이 되지 않도록 구현했습니다.

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/108922353/205435187-799684df-b5a1-4d3c-b2f9-b4398120d1cf.gif)

