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
## JavaScript Output
1. innerHTML : HTML 요소안에 쓰기 
2. document.write() : HTML 에서 write 파라미터의 결과를 보여준다. 
HTML output안에 쓰기
<details><summary>document.write() 단점
</summary>
 HTML 문서가 로드가 완료되고 document.wirte()를 호출하면 모든 로드된 HTML 데이터가  덮어 쓰여진다. 따라서 디버그 용도로 쓰여진다.
</details>
3. window.alert() : 브라우저의 알림 박스에 쓰기
<details>
<summary>window keyword
</summary>
window는 global 범위 객체다. 즉, 모든 변수, 속성 과 매소드는 디폴트로 윈도우 객체에 속해 있기에 윈도우 키워드는 생략이 가능하다.

```html
<script>
alert(5 + 6);
</script>
```
</details>
4. console.log() : 브라우저 콘솔에 쓰기
5. window.print() : 현재 윈도우를 실제로 프린터에서 프린트하기
## JavaScript Statements
## JavaScript Syntax
## JavaScript Comments
## JavaScript Variables
 * var : 재선언 가능
 * let
 * const
## JavaScript Let


| | let | var |
| --- | --- | --- |
| block scope | O | X |
| Redeclaring | *scope로 감싸있어야 가능 | 아무때나 가능 |
| *Hoisting | X | O |
>  scope로 감싸있기 예시 
```js
 let x = 2;    // Allowed
{
let x = 3;    // Allowed
}

{
let x = 4;    // Allowed
}
```
> Hoisting 예시
```js
carName = "Volvo";
var carName;
```
```js
carName = "Saab";// Error
let carName = "Volvo";
```
## JavaScript Const
const  
1. 재할당 불가능하고 정의만 가능하다.
근데 배열이나 객체의 속성을 바꿀 수 있다.
2. 예시
```js
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```
```js
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```
3. Hoisting 불가능하며 다른 타입으로 재선언 불가능하다. block scope로 구분지으면 같은 이름으로 새로운 const변수를 만들수 있다.

## JavaScript Operators
 * `**`은 지수다
 * `===`은 값과 타입이 같은 지 확인한다.
 * `!==`은 값 또는 타입이 다른 지 확인한다.
 * `instanceof`는 왼쪽의 인스턴스가 오른쪽의 클래스로 형변환이 가능하면 true를 반환한다.
## JavaScript Arithmetic
## JavaScript Assignment
## JavaScript Data Types
 * [Javascript는 숫자와 string을 합산하면 숫자를 string으로 변환시킨다. 그런데 좌에서 우로 해석하므로 숫자 + 숫자 + string이면 합산한 수를 string으로 바꾸로, string + 숫자 + 숫자면 숫자를 string으로 변환시켜 string+ string + string이 된다.](https://www.w3schools.com/js/tryit.asp?filename=tryjs_datatypes_addstring)
```html
<script>
let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;
</script>
```
 * 변수의 형변환이 동적이다.
```js
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```
 * string 정의 시, 따옴표를 넣을 수 있다.
```js
let answer1 = "It's alright";             // Single quote inside double quotes
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
```
 * `{}`를 이용해서 object를 정의할 수 있다. struct라고 생각하면 된다.
```html
<p id="demo"></p>

<script>
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>
```
* undefined라는 것이 있다.
```js
car = undefined;    // Value is undefined, type is undefined
```
## JavaScript Functions
 * Function Invocation : invoke란 call를 뜻하는 것이고 함수는 event가 발생하거나 JavaScript에서 호출되거나 스스로 호출했을 때 실행된다.
 * [() operator가 함수를 호출한다. 함수의 이름은 함수 객체를 지칭한다.](https://www.w3schools.com/js/tryit.asp?filename=tryjs_farenheit_to_celsius_2)
```js
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;
```
## JavaScript Object
 * Object는 class 객체처럼 사용한다. 그리고 주로 const를 이용하여 정의하며 Object 내의 함수도 맴버 변수에 함수를 할당하는 것과 유사하다.
```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
