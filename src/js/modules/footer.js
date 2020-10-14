export default () => {
	function randomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
		return rand;
	}
	function operatorOnline(min, max) {
		const op_on = randomInteger(min, max),
			op_raz = op_on - randomInteger(5, 9);
	
		$(".footer__count--online").text(op_on);
		$(".footer__count--offline").text(op_raz);
		setTimeout(operatorOnline, 15000, 42, 24);
	}
	operatorOnline(42, 24);


	// function getYear(classN, yNumber) {
	// 	const el = document.getElementById(classN);
	// 	let r = new Date().getFullYear()- yNumber;
	// 	return el.innerHTML = r;
	// }
	// getYear('yyyy-0', 0);
	// getYear('yyyy-5', 5);
	// getYear('yyyy-10', 10);
	// getYear('yyyy-15', 15);
	// getYear('yyyy-20', 20);
};