function updateTimes() {
	document.querySelectorAll(".time").forEach((e) => {
		let timestamp = Number(e.dataset.timestamp);
		if (!e.title) {
			e.title = e.textContent;
		}
		let diff = Math.floor(Date.now()/1000)-timestamp;
		let fin;
		if (diff <= 0 && diff > -86400) {
			fin = "today";
		} else if (diff < 86400) {
			fin = "today";
		} else if (diff >= 86400 && diff < 129600) {
			fin = "yesterday";
		} else {
			fin = moment.unix(timestamp).fromNow();
		}
		e.textContent = fin;
		e.classList.add("parsed");
	});
}
updateTimes();
setInterval(updateTimes, 60000);
