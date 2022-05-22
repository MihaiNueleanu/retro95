<script>
	import { apps } from '$lib/stores';

	import Window from '../Window.svelte';
</script>

<Window
	appKey="about"
	title="About"
	onClose={() => ($apps['about'].open = false)}
	size={{ x: 500, y: 300 }}
	position={{ x: 220, y: 40 }}
	resizable
>
	<pre class="pre">
           __             ___  ____
  _______ / /________    / _ \/ __/
 / __/ -_) __/ __/ _ \   \_, /__ \ 
/_/  \__/\__/_/  \___/  /___/____/ 
</pre>

	<br />
	<div>The virtual operating system for nostalgic people.</div>
</Window>

<style>
	.pre {
		font-family: Consolas, Courier, monospace;
	}
</style>
