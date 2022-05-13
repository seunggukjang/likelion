let timers = document.getElementById('Timer');
let Hours = 0;
let Mins = 0;
let Sec = 0.00;
// let last = Date().now;

// function Init() {
//     last = Date().now;
// }
// async function GetTick() {
//     let current = new Date().now;
//     const tick = current - last;
//     last = current;
// }

// async function Start() {
//     Init();
//     const deltaTime = GetTick();
//     await new Promise(10);
//     alert(1);
// }

// function UpdateSec(dt) {
//     Sec -= dt;
//     return Sec;
// }
const DELTA = 1000;
let TotalTime = GetTotalTime();
let IsTimeOut = false;

function Start() {
    IsTimeOut = false;
    setInterval(UpdateTimer, DELTA)
}

function UpdateTimer() {
    if (IsTimeOut == true)
        return;
    TotalTime = GetTotalTime();
    TotalTime -= (DELTA / 1000);
    while (TotalTime >= 3600) {
        ++Hours;
        TotalTime -= 3600;
    }
    while (TotalTime >= 60) {
        ++Mins;
        TotalTime -= 60;
    }
    Sec = TotalTime;
    if (Sec < 0) {
        console.log(Sec);
        if (Mins <= 0) {
            if (Hours <= 0) {
                alert("Time out!");
                IsTimeOut = true;
                Hours = 0;
                Mins = 0;
                Sec = 0;
                return;
            }
        }
    }
    Sec.toFixed(2);
    ShowTimer();
}

function ShowTimer() {
    timers.innerHTML = leadingZeros(Hours, 2) + ':' + leadingZeros(Mins, 2) + ':' + leadingZeros(Sec, 2);
}

function GetTotalTime() {
    let totalTime = 0;
    totalTime = Hours * 3600;
    totalTime += Mins * 60;
    totalTime += Sec;
    Hours = 0;
    Mins = 0;
    Sec = 0;
    return totalTime;
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

function AddOneHours() {
    ++Hours;
    if (Hours >= 24)
        Hours = 0;
    ShowTimer();
}


function AddMin(min) {
    Mins += min;
    if (Mins >= 60)
        Mins = 0;

    ShowTimer();
}

function AddTenMin() {
    AddMin(10);
}

function AddOneMin() {
    AddMin(1);
}

function AddSec(sec) {
    Sec += sec;
    if (Sec >= 60)
        Sec = 0;
    ShowTimer();
}

function AddOneSec() {
    AddSec(1);
}

function AddTenSec() {
    AddSec(10);
}