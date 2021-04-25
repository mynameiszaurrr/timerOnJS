function timeLeftOnDate () {
    const dateNow = new Date(),
        saleEnd = new Date(2021, 4, 20, 0, 0, 0),
        timeLeft = new Date(saleEnd-dateNow),
        daysLeft = timeLeft.getDate(),
        hoursLeft = timeLeft.getHours(),
        minutesLest = timeLeft.getMinutes(),
        secondsLeft = timeLeft.getSeconds(),
        mscLeft = timeLeft.getMilliseconds();
    return {
        'days': daysLeft,
        'hours': hoursLeft,
        'minutes': minutesLest,
        'seconds': secondsLeft,
        'msc': mscLeft
    }
}

function pushDateOnSite () {
    const day_blocks = document.querySelector('#days'),
        hours_block = document.querySelector('#hours'),
        minutes_block = document.querySelector('#minutes'),
        seconds_block = document.querySelector('#seconds'),
        interval = setInterval(clockRefresh, 1000);

    function clockRefresh() {
        const endTime = timeLeftOnDate();
        if (endTime.days<10) {
            day_blocks.textContent=`0${endTime.days}`;
        } else {
            day_blocks.textContent= endTime.days;
        }
        if (endTime.hours<10) {
            hours_block.textContent = `0${endTime.hours}`;
        } else {
            hours_block.textContent = endTime.hours;
        }
        if (endTime.minutes<10) {
            minutes_block.textContent = `0${endTime.minutes}`;
        } else {
            minutes_block.textContent = endTime.minutes;
        }
        if (endTime.seconds<10){
            seconds_block.textContent = `0${endTime.seconds}`;
        } else {
            seconds_block.textContent = endTime.seconds;
        }
        if (endTime.msc <= 0) {
            clearInterval(interval)
        }
    }
}

pushDateOnSite()