목표 : 달력에 TODO List를 넣을 수 있는 웹을 만들어 다른 사람들도 이용가능하게 만들기

1. 우선 html로 형태를 만들었다.</br>
(https://seunggukjang.github.io/likelion/)

2. 하지만 계속 값을 추가하는 방법과 쿠키 같은 걸 지워도 값이 저장되는 지 모르겠다.

3. <u>c/c++를 배웠고 c#과 python, 그리고 Javascript의 변수 선언과 loop문, 함수 정의도 할 줄 알지만 왜 웹페이지를 못 만들고 있을까?? 또 한,Unity나 Zero Engine 그리고 Custom Engine을 이용해봤는데 Browser의 API를 어떻게 이용해야할 지를 모르는 걸까???</u>

문제점을 분석해보자
1. 언어를 쓸 줄은 알지만 웹페이지를 못만들고 있다. 그렇다면 웹 페이지를 만들기 위해서는 언어뿐만 아니라 무엇도 알아야하는 거지??<br>
-> 웹 페이지에 무엇이 있는 지 알아보기.
2. Zero Engine은 예시를 보면서 값만 바꾸면서 진행했고, Custom Engine은 직접 만들었으니 어떻게 이용할 지 알았다면 현재 사용 중인 Unity는 어떻게 사용하고 있을까??<br>
->지금은 기능이 익숙해졌기에 사용하고 있고, 게임 엔진을 다루거나 만들거나 수업을 통해 엔진틀을 배웠기에 Unity Engine이 무엇들로 이루어져 있는 지 예상가능해 응용한 것 뿐이다. 그렇다면 Browser Engine의 틀을 알아야겠다.



해결점
1. 웹 페이지에 무엇이 있는가?
> 1. BOM : Browser Ojbect Model
> > Object Model은 객체 지향


# HTML/CSS/Javascript
 웹 프로그래밍에서 프론트 엔드는 Browser Engine과 각종 API를 이용하여 HTML Document를 꾸민다. 
# HTML : Hyper Text Markup Language
 Hyper Text : 다른 문서로 넘어갈 수 있는 문서
 Markup :  
 
 # JavaScript Tutorial
## JS Introduction

 * document.getElementById().innerHTML : DOM의 최상위 객체인 document를 불러와 ()안의 ID를 가진 요소를 찾는다.
 이 때, 요소가 가진 tag의 속성을 이용할 수 있다.
```html
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

document.getElementById("demo").style.display = "none";
```
* onclick은 이벤트 핸들러이다.(아마도 이게 함수형 언어일듯 하다.)

## JS Where To
1. HTML 내부에 넣기
```html
<script>
document.getElementById().innerHTML = "My First JavaScript"
</script>
```
* HTML 안에서 ```<script>``` 태그를 이용해 ```<head>``` 혹은 ```<body>```에  JS code를 넣을 수 있다.
* 옛날 방식에서 타입 속성으로 JS를 지정했지만 HTML에선 JS가 디폴트 스크립트 언어이기에 더 이상 타입속성이 필요하지 않다.<br>
```<script type="text/javascript">```
스크립트 해석기의 속도가 느려```<body>```의 아래에 두는 것이 문서를 더 빨리보여준다.
2. HTML 외부에 넣기
```<script src="myScript.js"></script>```
```src```를 이용하여 외부 스크립트를 사용할 수 있다.
* 외부 스크립트의 장점은 HTML와 code를 분리 할 수 있고 가독이 좋아진다. 또한 JavaScript파일을 캐시를 통해 페이지 로드의 속도가 빨라진다.
```html
<script src="https://www.w3schools.com/js/myScript.js"></script>
```
* URL을 이용해서 혹은 파일의 경로 혹은 경로없이 외부스크립트를 참조할 수 있다.
# JavaScript Tutorial
## JavaScript Output
* innerHTML : HTML 요소안에 쓰기
* document.write() : HTML 에서 write 파라미터의 결과를 보여준다. HTML output안에 쓰기
<details><summary>document.write() 단점
</summary>
 HTML 문서가 로드가 완료되고 document.wirte()를 호출하면 모든 로드된 HTML 데이터가  덮어 쓰여진다. 따라서 디버그 용도로 쓰여진다.
</details>

* window.alert() : 브라우저의 알림 박스에 쓰기
* console.log() : 브라우저 콘솔에 쓰기
