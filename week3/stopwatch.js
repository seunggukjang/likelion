const MILLISECOND = 1000;
const DT = 1;
const RecordList = document.getElementById('record');
const StopwatchTimer = document.getElementById('StopwatchTimer');
const pauseButton = document.getElementById('PauseButton');
let isPause = true;

let currentTime = 0;
let sec = 00;
let min = 00;
let h = 00;

setInterval(Timer, DT);

function RecordTimer() {
    const div = document.createElement('div');
    div.innerText = StopwatchTimer.innerHTML;
    RecordList.appendChild(div);
}

function TurnPause() {
    isPause = !isPause;
    if (isPause == true) {
        pauseButton.innerText = "Start";
    } else {
        pauseButton.innerText = "Pause";
    }
}

function ClearTimer() {
    sec = 0.00;
    min = 0;
    h = 0;
    showingTimer(2);
    RecordList.innerHTML = "";
}

function Timer() {
    if (isPause)
        return;
    const frame = DT / MILLISECOND;
    currentTime += frame;
    if (currentTime >= 3600) {
        ++h;
        currentTime = currentTime - (h * 3600);
    }
    if (currentTime >= 60) {
        ++min;
        currentTime = currentTime - (min * 60);
    }
    sec = currentTime.toFixed(2);
    showingTimer(5);
}

function showingTimer(num) {
    document.getElementById('StopwatchTimer').innerHTML = leadingZeros(h, 2) + ':' + leadingZeros(min, 2) + ':' + leadingZeros(sec, num);
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

function ShowingStopwatch() {
    let stopwatchDisplay = document.getElementById("StopwatchClass");
    if (stopwatchDisplay.style.display == 'none') {
        stopwatchDisplay.style.display = 'block';
    }
    let timerDisplay = document.getElementById("TimerClass");
    if (timerDisplay.style.display == 'block') {
        timerDisplay.style.display = 'none';
    }
}