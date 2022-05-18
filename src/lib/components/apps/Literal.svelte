<script>
	import { apps } from '$lib/stores';
	import Window from '../Window.svelte';
</script>

<Window
	appKey="literal"
	title="Literal.club"
	onClose={() => ($apps['literal'].open = false)}
	size={{ x: 900, y: 700 }}
	position={{ x: 220, y: 40 }}
>
	<iframe src="https://literal.club" frameborder="0" title="Literal" />
</Window>
