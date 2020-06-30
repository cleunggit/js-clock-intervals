/*------ constants ------*/
const INTERVAL = 1000
const SECONDS_IN_MIN = 60
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MIN
const SECONDS_IN_12_HOURS = 12 * SECONDS_IN_HOUR

/*------ event listeners ------*/
// document.addEventListener("DOMContentLoaded", function() {
//     setInterval(tick, INTERVAL)
// })

/*------ app's state (variables) ------*/
// initialize start time
let time = 0

// get CSS elements for each hand
const second = document.getElementById('second')
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')

/*------ function ------*/

// convert all units to seconds

function secondRotation(seconds) {
    let degrees = (seconds / SECONDS_IN_MIN) * 360
    return degrees
}

function minuteRotation(seconds) {
    let degrees = (seconds / SECONDS_IN_HOUR) * 360
    return degrees
}

function hourRotation(seconds) {
    let degrees = (seconds / SECONDS_IN_12_HOURS) * 360
    return degrees
}

function rotateHands() {
    second.style.transform = "rotate(" + secondRotation(time) + "deg)"
    minute.style.transform = "rotate(" + minuteRotation(time) + "deg)"
    hour.style.transform = "rotate(" + hourRotation(time) + "deg)"
}

function tick() {
    time++
    rotateHands()
}

// setInterval(tick, INTERVAL)