export function formatSeconds(input: number) {
	const minutes = Math.floor(input / 60);
	const seconds = input % 60;

	function padTo2Digits(num: number) {
		return num.toString().padStart(2, '0');
	}

	const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
	return result;
}
