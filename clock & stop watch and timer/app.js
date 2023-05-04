// animation slide up and slid down

$(".stopwatch-btn").click(function () {
    $(".outer-wrapper > div").slideUp();
    $(".Stopwatch").slideDown();
    $(".type").html("Stopwatch:");
})

$(".back-btn").click(function () {
    $(".outer-wrapper > div").slideUp();
    $(".clock").slideDown();
    $(".type").html("Clock:");
})

$(".timer-btn").click(function () {
    $(".outer-wrapper > div").slideUp();
    $(".timer").slideDown();
    $(".type").html("Timer:");
})


// Digital clock /////

function clock() {
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour >= 12) {
        hour = hour - 12
        document.querySelector("#ampm").innerHTML = "Pm"
        document.querySelector(".other-ampm").innerHTML = "Am"
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    let month = time.getMonth();
    let monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    month = monthNum[month];

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("day").innerHTML = time.getDate() + " / "
    document.getElementById("month").innerHTML = month + " / "
    document.getElementById("year").innerHTML = time.getFullYear();
}
let a = setInterval(clock, 1000);

// StopWatch //////

let stopwatchHours = 0,
    stopwatchMinutes = 0,
    stopwatchSeconds = 0,
    stopwatchMiliseconds = 0,
    stopwatchRunning = false,
    laps = 0,
    stopwatchInterval;

const stopwatch = () => {

    stopwatchMiliseconds++;

    if (stopwatchMiliseconds === 100) {
        stopwatchSeconds++;
        stopwatchMiliseconds = 0;
    }

    if (stopwatchSeconds === 60) {
        stopwatchMinutes++;
        stopwatchSeconds = 0;
    }

    if (stopwatchMinutes === 60) {
        stopwatchHours++;
        stopwatchMinutes = 0;
    }

    document.getElementById("stopwatch-hour").innerHTML = stopwatchHours
    document.getElementById("stopwatch-min").innerHTML = stopwatchMinutes
    document.getElementById("stopwatch-sec").innerHTML = stopwatchSeconds
    document.getElementById("stopwatch-ms").innerHTML = stopwatchMiliseconds
};

const startStopwatch = () => {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(stopwatch, 10);
        stopwatchRunning = true;
    }
};

const stopStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
};

const resetStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;
    stopwatchMiliseconds = 0;
    stopwatchRunning = false;

    document.getElementById("stopwatch-hour").innerHTML = 00
    document.getElementById("stopwatch-min").innerHTML = 00
    document.getElementById("stopwatch-sec").innerHTML = 00
    document.getElementById("stopwatch-ms").innerHTML = 00
};

const btnElem1 = document.querySelector(".start-stopwatch");
const btnElem2 = document.querySelector(".reset-stopwatch");
const btnElem3 = document.querySelector(".stop-stopwatch");

btnElem1.addEventListener('click', function () {
    startStopwatch();
})

btnElem2.addEventListener('click', function () {
    resetStopwatch();
})

btnElem3.addEventListener('click', function () {
    stopStopwatch();
})


// Timer //////

let time = 0,
    timerHours = 0,
    timerMinutes = 0,
    timerSeconds = 0,
    timerMiliseconds = 0,
    timerInterval;

const btnElem4 = document.querySelector(".start-timer");
const btnElem5 = document.querySelector(".reset-timer");
const btnElem6 = document.querySelector(".stop-timer");

const getTime = () => {
    time = prompt("Enter time in Minutes:")
    time = time * 60
    setTime();
};

const setTime = () => {
    timerHours = Math.floor(time / 3600);
    timerMinutes = Math.floor((time % 3600) / 60);
    timerSeconds = Math.floor(time % 60);

    document.getElementById("timer-hour").innerHTML = timerHours
    document.getElementById("timer-min").innerHTML = timerMinutes
    document.getElementById("timer-sec").innerHTML = timerSeconds
    document.getElementById("timer-ms ").innerHTML = timerMiliseconds

}

const timer = () => {

    timerMiliseconds--;

    if (timerMiliseconds === -1) {
        timerMiliseconds = 99
        timerSeconds--
    }
    if (timerSeconds === -1) {
        timerSeconds = 59
        timerMinutes--
    }
    if (timerMinutes === -1) {
        timerMinutes = 59
        timerHours--
    }

    document.getElementById("timer-hour").innerHTML = timerHours
    document.getElementById("timer-min").innerHTML = timerMinutes
    document.getElementById("timer-sec").innerHTML = timerSeconds
    document.getElementById("timer-ms").innerHTML = timerMiliseconds
    timeUp();
};

const startTimer = () => {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0 && timerMiliseconds === 0) {
        getTime();
    }
    else (
        timerInterval = setInterval(timer, 10)
    );
};

const resetTimer = () => {
    stoptTimer();
    time = 0;
    timerMiliseconds = 0
    setTime();
};

const stoptTimer = () => {
    clearInterval(timerInterval);
};

const timeUp = () => {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0 && timerMiliseconds === 0) {
        alert("Time's up");
        resetTimer();
    }
}

btnElem4.addEventListener('click', function () {
    startTimer();
});

btnElem6.addEventListener('click', function () {
    stoptTimer();;
});
btnElem5.addEventListener('click', function () {
    resetTimer();;
});

