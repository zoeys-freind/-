const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const date = new Date()
const day = date.getDay()
const month = date.getMonth()
const year = date.getFullYear()
const weekday = days[day]
const monthName = months[month]
const UTCTime = date.getUTCHours()

const dateNumber = date.getDate()
const datetext = document.getElementById("date")
const weekdaytext = document.getElementById("weekday")

datetext.innerHTML = `${monthName} ${dateNumber}, ${year}`
weekdaytext.style.margin_top = 0
weekdaytext.innerHTML = `(${weekday})`


const overhead = document.getElementById("overhead")
// background-image (resize image to fit overhead (div))
overhead.style.backgroundImage = `url('months/${monthName}.jpg')`
overhead.style.backgroundSize = "cover"
overhead.style.backgroundPosition = "center"


datetext.style.textShadow = "0 0 5px #000"
weekdaytext.style.textShadow = "0 0 5px #000"

const time = document.getElementById("time")

const hours = {
    "0": "7 PM",
    "1": "8 PM",
    "2": "9 PM",
    "3": "10 PM",
    "4": "11 PM",
    "5": "12 AM",
    "6": "1 AM",
    "7": "2 AM",
    "8": "3 AM",
    "9": "4 AM",
    "10": "5 AM",
    "11": "6 AM",
    "12": "7 AM",
    "13": "8 AM",
    "14": "9 AM",
    "15": "10 AM",
    "16": "11 AM",
    "17": "12 PM",
    "18": "1 PM",
    "19": "2 PM",
    "20": "3 PM",
    "21": "4 PM",
    "22": "5 PM",
    "23": "6 PM"
}

time.innerHTML = `- Time zone: CST (${hours[UTCTime]}) -`

function randbttn() {
    const btn = document.getElementById("rit-bttn")
    btn.innerHTML = `Random number: ${Math.floor(Math.random() * 100)} (Click again for another)`
}

var pfp = document.getElementById("pfp")
pfp.src = "pfp.gif"
pfp.src = "pfp.png"

const ritin = document.getElementById("rit-input")

if (localStorage.getItem("rit-input") != null) {
    ritin.value = localStorage.getItem("rit-input")
}

function ritinput() {
    localStorage.setItem("rit-input", ritin.value)
}
var debounce = true
function spinpfp() {
    if (debounce) {
        debounce = false
        var pfp = document.getElementById("pfp")
        pfp.src = "protogen-furry.gif"
        setTimeout(function() {
            pfp.src = "pfp.png";
            debounce = true
        }, 2000)
    }
}
