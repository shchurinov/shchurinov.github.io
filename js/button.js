function myFunction() {
		// Get the text field
		var copyText = document.getElementById("myInput");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);
			} 
function copyBTC() {
		// Get the text field
		var copyText = document.getElementById("btc");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);
			} 
function copyDoge() {
		// Get the text field
		var copyText = document.getElementById("doge");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);
			} 
