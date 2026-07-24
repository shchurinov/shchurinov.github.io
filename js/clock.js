function updateClock() {
		const now = new Date();
		// Formats date/time based on the visitor's local computer settings
		document.getElementById('clock').innerHTML = now.toLocaleString();
		}
  
		// Update the clock immediately, then refresh it every 1 second
		updateClock();
		setInterval(updateClock, 1000);
