# ReadMe
## 문제해결 방법 순서

1. 문제파악하기
> 1. 문제는? 스톱워치랑 타이머 만들기

2. 문제 해결 방법 찾기
> 1. 문제를 세분화 시키기
> > 1. 스톱워치 만들기
> > 2. 타이머 만들기

> 2. 세분화 시킨 문제 해결하기
> > 1. 스톱워치 만들기
> > > 1. 어떻게 만들 수 있는가?
> > > > 1. 떠오른 영감은? async 함수랑 setInterval이란 걸 이용하면 만들 수 있을 듯 하다.
> > > > 2. 영감과 문제해결 시작행동을 연관 짓기 위해선 무엇이 필요할까? 시간을 먼저 표시해보자
```html
<h1>스톱워치랑 타이머</h1>
    <p id="stopwatch">스톱워치 : </p>

    <script>
        setInterval(myTimer, 1000);

        function myTimer() {
            const d = new Date();
            document.getElementById("stopwatch").innerHTML = '스톱워치 :' + d.toLocaleTimeString();
        }
    </script>
```
> > > > 3. 알게 된 점(새로운 정보)와 새로운 영감은(문제해결의 실마리는) 무엇인가? setInterval은 일정한 시간마다 함수를 호출하는 window api다. 굳이 tick(delta time), while loop와 async를 이용해서 매 프레임마다 업데이트를 하는 함수를 만들 필요가 없어진다.
> > > > 4. 다시 영감을 이용해 문제해결하기
```html
    <h1>스톱워치랑 타이머</h1>
    <p id="stopwatch">스톱워치 : </p>

    <script>
        const deltaTime = 1000;
        let timer = 0;
        setInterval(myTimer, deltaTime);

        function myTimer() {
            timer += deltaTime;
            document.getElementById("stopwatch").innerHTML = '스톱워치 :' + timer;
        }
    </script>
```
> > > > 5. 알게 된 점(새로운 정보)와 새로운 영감은(문제해결의 실마리는) 무엇인가? 예상처럼 tick을 만들필요가 없어졌다. 하지만 deltaTime이란 변수에 너무 의존하게 되었다. Knapsack알고리즘을 이용해서 시,분,초로 나눌 수 있으니 나눠보자
> > > > 6. 다시 영감을 이용해 문제해결하기
```html
<h1>스톱워치랑 타이머</h1>
    <p id="stopwatch">스톱워치 : </p>

    <script>
        const MILLISECOND = 1000;
        const DT = 10;

        let timer = 0;
        let sec = 00;
        let min = 00;
        let h = 00;
        setInterval(myTimer, DT);

        function myTimer() {
            const frame = DT / MILLISECOND;
            timer += frame;
            if (timer > 3600) {
                h = timer % 3600;
                timer = timer - (h * 3600);
                h = h.toFixed(2);
            }
            if (timer > 60) {
                min = timer % 60;
                timer = timer - (min * 60);
                min = min.toFixed(2);
            }
            sec = timer.toFixed(2);
            document.getElementById("stopwatch").innerHTML = '스톱워치 :' + h + ':' + min + ':' + sec;
        }
    </script>
```
> > > > 5. 알게 된 점(새로운 정보)와 새로운 영감은(문제해결의 실마리는) 무엇인가? 소수점이하가 너무 많아 toFixed를 이용해 줄였다. 
> > > > 6. 다시 영감을 이용해 문제해결하기

```html
    <script>
        const MILLISECOND = 1000;
        const DT = 10;

        let timer = 55;
        let sec = 00;
        let min = 00;
        let h = 00;
        setInterval(myTimer, DT);

        function myTimer() {
            const frame = DT / MILLISECOND;
            timer += frame;
            if (timer > 3600) {
                h = timer % 3600;
                timer = timer - (h * 3600);
            }
            if (timer > 60) {
                min = min + timer % 60;
                timer = timer - (min * 60);
            }
            sec = timer.toFixed(2);
            document.getElementById("stopwatch").innerHTML = '스톱워치 :' + leadingZeros(h, 2) + ':' + leadingZeros(min, 2) + ':' + leadingZeros(sec, 5) + ':' + sec.length;
        }

        function leadingZeros(n, digits) {
            let zero = '';
            n = n.toString();

            if (n.length < digits) {
                for (let i = 0; i < digits - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        }
    </script>
```
> > > > 5. 알게 된 점(새로운 정보)와 새로운 영감은(문제해결의 실마리는) 무엇인가? c/c++처럼 일정숫자만 보여주는 기능은 없는 듯하다. 함수를 새로 구현했다. 앞으로 할 일은 버튼을 만들어 일시정지와 기록, 새로고침을 만들면 되는데 일시정지 부터 만들어보자
> > > > 6. 다시 영감을 이용해 문제해결하기

```html
<body>
    <h1>스톱워치랑 타이머</h1>
    <p id="stopwatch">스톱워치 : </p>
    <button type="button" onclick="TurnPause()">Pause</button>
    <script>
        const MILLISECOND = 1000;
        const DT = 1;

        let isPause = false;

        let timer = 5800;
        let sec = 00;
        let min = 00;
        let h = 00;

        setInterval(Timer, DT);

        function TurnPause() {
            isPause = !isPause;
            console.log(isPause);
        }

        function Timer() {
            if (isPause)
                return;
            const frame = DT / MILLISECOND;
            timer += frame;
            if (timer >= 3600) {
                ++h;
                timer = timer - (h * 3600);
            }
            if (timer >= 60) {
                ++min;
                timer = timer - (min * 60);
            }
            sec = timer.toFixed(2);
            document.getElementById("stopwatch").innerHTML = '스톱워치 :' + leadingZeros(h, 2) + ':' + leadingZeros(min, 2) + ':' + leadingZeros(sec, 5) + ':' + sec.length;
        }

        function leadingZeros(n, digits) {
            let zero = '';
            n = n.toString();

            if (n.length < digits) {
                for (let i = 0; i < digits - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        }
    </script>
```

> > > > 5. 알게 된 점(새로운 정보)와 새로운 영감은(문제해결의 실마리는) 무엇인가? 부동소수점의 크기 비교가 이상한데?? 왜 그러지? 그리고 %연산자를 굳이 쓸 필요가 없어서 ++로 대체했다. javascript를 매 프레임마다 호출하는 것이 아닌 한번만 호출하고 이후엔 비동기방식이나 따로 호출을 해야 js가 실행된다. 새로고침을 먼저 만들어 보자
> > > > 6. 다시 영감을 이용해 문제해결하기
