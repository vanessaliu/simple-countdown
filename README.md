simple-countdown
================

## Usage
´´´
Countdown({
	countdown: 1413567185 // Timestamp
}, function(timer) {
	if (timer) {
		// Do whatever you want with timer object
	} else {
		// Countdown has finished!
	}
});
´´´

### Callback object "timer"
´´´
{
	days: 01,
	hours: 03
	minutes: 10,
	seconds: 43
}
´´´