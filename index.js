function startCountdown() {
    // Get the selected countdown date and time
    const countdownDate = new Date(document.getElementById("datetime-local").value).getTime();
    // Get the current date and time
    const now = new Date().getTime();
    // Calculate the time remaining in milliseconds
    const timeRemaining = countdownDate - now;
    // Convert the time remaining to days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    let countdownText = " ";
    if (days > 0) {
        countdownText += days + "d ";
      }
      if (hours > 0 || days > 0) {
        countdownText += hours + "h ";
      }
      if (minutes > 0 || hours > 0 || days > 0) {
        countdownText += minutes + "m ";
      }
      countdownText += seconds + "s";
      document.getElementById("count").innerHTML = countdownText;

    // Update the countdown timer every second
    setTimeout(startCountdown, 1000);
  }