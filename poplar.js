document.addEventListener("DOMContentLoaded", function() {

    var easternTime = new Date().toLocaleTimeString("en-US", {timeZone: 'America/New_York', hour12: false});
    var currentDate = new Date().toLocaleDateString("en-US", {year: 'numeric', month: '2-digit', day: '2-digit'});

    timeNoSeconds = easternTime.replace(/(.*)\D\d+/, '$1');

    var dateSpan = document.getElementById('poplarDate');
    var timeSpan = document.getElementById('poplarTime');

    dateSpan.textContent = currentDate;
    timeSpan.textContent = timeNoSeconds;

})