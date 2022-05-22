export async function getPlayer(): Promise<any> {
	return new Promise((resolve) => {
		if (window.myPlayer && window.myPlayerReady === true) {
			console.log('myPlayer already exists', window.myPlayer);
			return resolve(window.myPlayer);
		}

		const interval = setInterval(() => {
			if (window.myPlayer && window.myPlayerReady) {
				clearInterval(interval);
				return resolve(window.myPlayer);
			}
		}, 100);
	});
}
