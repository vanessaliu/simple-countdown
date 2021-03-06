/**
 * Simple countdown
 * @param {object} data
 * @param {function} callback
 * @author Fredrik Lack, fredrik@nody.se
 * @url https://github.com/larsha/simple-countdown
 */
function Countdown(data, callback) {
	'use strict';

	// Private vars
	var countdown = new Date(data.countdown).getTime();

	// Start
	var i = setInterval(function timer() {
		var now = new Date().getTime(),
			diff = (countdown - now);

		if (countdown > now) {
			callback({
				days: pad(Math.floor(diff / 86400000)),
				hours: pad(Math.floor((diff % 86400000) / 3600000)),
				minutes: pad(Math.floor(((diff % 86400000) % 3600000) / 60000)),
				seconds: pad(Math.floor((diff / 1000) % 60))
			});

			return timer;
		} else {
			callback();
			clearInterval(i);
		}

		return undefined;
	}(), 1000);

	// Private functions
	function pad(i) {
		return (i < 10 ? i = '0' + i : i);
	}
}