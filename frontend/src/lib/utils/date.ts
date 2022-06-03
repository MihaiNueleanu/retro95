export function formatDaysAgo(value: string) {
	const date = new Date(value);
	const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
	const formatter = new Intl.RelativeTimeFormat();
	return formatter.format(Math.round(deltaDays), 'days');
}
