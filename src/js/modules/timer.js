const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t/1000) % 60),
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/(1000 * 60 * 60)) % 24),
              days = Math.floor((t/(1000 * 60 * 60 * 24)))
        return {
            'totalTime' : endtime,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };
    //adding zero before digits
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');
         //set time update     
        const timeInterval = setInterval(updateClock, 1000);

        //update clock from static html
        updateClock();

        function updateClock () {
            const t = getTimeRemaining(endtime)

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval)
            };
        };
    };

    setClock(id, deadline)
};

export default timer;
