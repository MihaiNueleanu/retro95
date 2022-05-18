<script>
	import { apps } from '$lib/stores';

	import Window from '../Window.svelte';
</script>

<Window
	appKey="about"
	title="About"
	onClose={() => ($apps['about'].open = false)}
	size={{ x: 200, y: 100 }}
	position={{ x: 220, y: 40 }}>About us</Window
>
