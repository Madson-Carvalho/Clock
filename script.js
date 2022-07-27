const showTime = () => {

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let session = "AM"

    if(hour === 0 ) {
        hour = 12
    }

    if (hour > 12) {
        session = "PM"
    }

    if (hour < 10) {
        hour = "0" + hour
    } else {
        hour
    }

    if (minute < 10) {
        minute = "0" + minute
    } else {
        minute
    }

    if (second < 10) {
        second = "0" + second
    } else {
        second
    }

    const time = hour + ":" + minute + ":" + second + " " + session

    document.querySelector('.clock').innerText = time
    document.querySelector('.clock').textContent = time

    setTimeout(showTime, 1000)
}

showTime()