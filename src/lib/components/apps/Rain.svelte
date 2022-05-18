<script lang="ts">
	import { apps } from '$lib/stores';
	import { onMount } from 'svelte';
	import Window from '../Window.svelte';

	let player: any;
	let ready = false;

	onMount(() => {
		player = new window.YT.Player('rainPlayer', {
			height: '390',
			width: '640',
			videoId: 'iLs04Z6uBqU',
			playerVars: {
				autoplay: 1,
				controls: 0,
				modestbranding: 1,
				autohide: 1,
				showinfo: 0
			},
			events: {
				onReady: () => {
					ready = true;
					player.playVideo();
				}
			}
		});
	});
</script>

<Window
	appKey="rain"
	title="Rain"
	onClose={() => ($apps['rain'].open = false)}
	size={{ x: 640, y: 330 }}
	resizable={false}
>
	<div class="rainWrapper">
		<div id="rainPlayer" />
	</div>
</Window>

<style>
	.rainWrapper {
		height: 290px;
		position: relative;
		overflow: hidden;
		pointer-events: none;
	}

	#rainPlayer {
		position: absolute;
		top: -60px;
	}
</style>
