const timer = (selector, daysSelector, hoursSelector, minutesSelector, secondsSelector, deadline) => {

  const checkTime = () => {
    const total = Date.parse(deadline) - Date.parse(new Date),
          days = Math.round(total / (1000 * 60 * 60 * 24)),
          hours = Math.round((total / (1000 * 60 * 60)) % 24),
          minutes = Math.round((total / (1000 * 60)) % 60),
          seconds = Math.round((total / (1000)) % 60);
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const updateClock = () => {
    const parent = document.querySelector(selector),
          daysInput = parent.querySelector(daysSelector),
          hoursInput = parent.querySelector(hoursSelector),
          minutesInput = parent.querySelector(minutesSelector),
          secondsInput = parent.querySelector(secondsSelector);
    const update = () => {
      const info = checkTime();

      info.days.toString().length == 1? daysInput.textContent = `0${info.days}` : daysInput.textContent = info.days;
      info.hours.toString().length == 1? hoursInput.textContent = `0${info.hours}` : hoursInput.textContent = info.hours;
      info.minutes.toString().length == 1? minutesInput.textContent = `0${info.minutes}` : minutesInput.textContent = info.minutes;
      info.seconds.toString().length == 1? secondsInput.textContent = `0${info.seconds}` : secondsInput.textContent = info.seconds;

      const timer = setTimeout(update, 1000)

      if (info.total <= 0) {
        daysInput.textContent = '00';
        hoursInput.textContent = '00';
        minutesInput.textContent = '00';
        secondsInput.textContent = '00';
      }
    }
    update()
  };
  updateClock()
};

export default timer;