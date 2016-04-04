/*! simpleClock v1.0 | (c) 2012, 2016 TICKTOO Systems GmbH - https://ticktoo.com | MIT License */

/*
---------------- JS ----------------

    $(document).ready(function() {
      $('#clock').simpleClock();
    });    

--------------- HTML ---------------

    <div id="clock">
      <div id="time">
        <span class="hour"></span>
        <span class="minute"></span>
        <span class="second"></span>
      </div>
      <div id="date"></div>
    </div>
    
------------------------------------    
*/

(function($) {

	$.fn.simpleClock = function() {

		// Define weekdays and months
		var weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
		var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

		// getTime - The Gathering
		function getTime() {
			var date = new Date(),
				hour = date.getHours();
			return {
				day: weekdays[date.getDay()],
				date: date.getDate(),
				month: months[date.getMonth()],
				hour: appendZero(hour),
				minute: appendZero(date.getMinutes()),
				second: appendZero(date.getSeconds())
			};
		}

		// appendZero - If the number is less than 10, add a leading zero. 
		function appendZero(num) {
			if (num < 10) {
				return "0" + num;
			}
			return num;
		}

		// refreshTime - Build the clock.
		function refreshTime() {
			var now = getTime();
			$('#date').html(now.day + ', ' + now.date + '. ' + now.month);
			$('#time').html("<span class='hour'>" + now.hour + "</span>" + "<span class='minute'>" + now.minute + "</span>" + "<span class='second'>" + now.second + "</span>");
		}

		// Tick tock - Run the clock.
		refreshTime();
		setInterval(refreshTime, 1000);

	};
})(jQuery);