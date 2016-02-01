function startTime() {
    var today = new Date();
    var h = today.getHours();
    var ampm;



    if (h >= 23) {
        document.getElementById('timedesc').innerHTML =
        "Make sure to sleep soon, sir.";
    }
    else if (h >= 18) {
        document.getElementById('timedesc').innerHTML =
        "It is said that the most work gets done at night. Don't prove me wrong.";
    }
    
    else if (h >= 12) {
        document.getElementById('timedesc').innerHTML =
        "Lovely afternoon, isn't it?";
    }
    else if (h >= 6) {
        document.getElementById('timedesc').innerHTML =
        "Top of the morning.";
    }
    else if (h >= 3) {
        document.getElementById('timedesc').innerHTML =
        "Evening. This time is optimal for a short walk.";
    }

     else {

    }


    // no military time for us
    if ( h > 12) {
        h-=12;
        ampm = "PM";
    } else {
        ampm = "AM"
    }



    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = 
    "<span class='hour'>" + h + ":" + "</span>" + 
    "<span class='minute'>" + m + ":" + "</span>" + 
    "<span class='second'>" + s + "</span>";

    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
