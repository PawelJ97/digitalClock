//Variables to which the downloaded data is assigned
function clockUpdate(){
    let time = new Date()
    let dayName = time.getDay(),
    month = time.getMonth(),
    dayNumber = time.getDate(),
    year = time.getFullYear(),
    hour = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds(),
    ph = "AM"

    if(hour == 0){
        hour = 12
    }

//Change phase of the day
    if(hour > 12){
        hour = hour - 12
        ph = "PM"
    }

// Building a arrays to assign the appropriate string to the return value of get.day and get.month - becouse this method returns intiger
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
    let months = ["January", "February", "March", "April"," May"," June", "July", "August", "September"," October", "November", "December"]
// array that we will iterate through getElementById
    let clockDT = ["day", "month", "daynumber", "year", "hour", "minutes", "seconds", "phase"]
// Array to which the previously created variables were assigned
    let val = [dayOfWeek[dayName], months[month], dayNumber, year, hour, min, sec, ph]

    for (let i = 0; i < clockDT.length; i++)
//Using data stored in variables to display them as the value of the first child of the id attribute
    document.getElementById(clockDT[i]).firstChild.nodeValue = val[i]
}

function setClock(){
    clockUpdate()
    window.setInterval("clockUpdate()", 1000)
}