<script lang="ts">
	import { apps, type AppKeys } from '$lib/stores';
	import { Game } from '$lib/utils/snake';
	import { onDestroy, onMount } from 'svelte';
	import Window from '../Window.svelte';

	let canvas: HTMLCanvasElement;
	let game: Game;

	let appKey: AppKeys = 'snake';
	$: app = $apps[appKey];

	onMount(() => {
		game = new Game(canvas);
		game.start();
	});

	// onDestroy(() => {
	// 	game.stop();
	// });
</script>

<Window
	{appKey}
	title={app.title}
	onClose={() => (app.open = false)}
	size={{ x: 610, y: 340 }}
	resizable={false}
>
	<canvas bind:this={canvas} />
</Window>
