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
    "0": "12 AM",
    "1": "1 AM",
    "2": "2 AM",
    "3": "3 AM",
    "4": "4 AM",
    "5": "5 AM",
    "6": "6 AM",
    "7": "7 AM",
    "8": "8 AM",
    "9": "9 AM",
    "10": "10 AM",
    "11": "11 AM",
    "12": "12 PM",
    "13": "1 PM",
    "14": "2 PM",
    "15": "3 PM",
    "16": "4 PM",
    "17": "5 PM",
    "18": "6 PM",
    "19": "7 PM",
    "20": "8 PM",
    "21": "9 PM",
    "22": "10 PM",
    "23": "11 PM"
}

time.innerHTML = `- Time zone: CDT (${hours[UTCTime-5]}) (for debugging: ${UTCTime-5})-`

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
