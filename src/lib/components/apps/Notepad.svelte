<script>
	import { apps } from '$lib/stores';
	import { notepad } from '$lib/stores/localStorage';
	import Window from '../Window.svelte';
</script>

<Window
	appKey="notepad"
	title={'Notepad'}
	onClose={() => ($apps['notepad'].open = false)}
	size={{ x: 500, y: 300 }}
	position={{ x: 220, y: 40 }}
>
	<textarea name="notepad" rows="10" cols="30" bind:value={$notepad} class="textarea" />
</Window>

<style>
	.textarea {
		width: 100% !important;
	}
</style>
