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

    clockRefresh()

    function zeroChek (numb) {
        if (numb<10) {
            return `0${numb}`
        }
        else {
            return numb
        }
    }

    function clockRefresh() {
        const endTime = timeLeftOnDate();
        day_blocks.textContent= zeroChek(endTime.days);
        hours_block.textContent = zeroChek(endTime.hours);
        minutes_block.textContent = zeroChek(endTime.minutes);
        seconds_block.textContent = zeroChek(endTime.seconds);
        if (endTime.msc <= 0) {
            clearInterval(interval)
        }
    }
}

pushDateOnSite()