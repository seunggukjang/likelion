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
    document.getElementById('StopwatchTimer').innerHTML = leadingZeros(h, 2) + ':' + leadingZeros(min, 2) + ':' + leadingZeros(sec, 5);
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