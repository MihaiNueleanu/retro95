<script lang="ts">
	import { apps, type AppKeys } from '$lib/stores';
	import { onMount } from 'svelte';
	import Window from '../Window.svelte';

	let appKey: AppKeys = 'chat';
</script>

<Window
	{appKey}
	title={$apps[appKey].title}
	onClose={() => ($apps[appKey].open = false)}
	size={{ x: 640, y: 330 }}
	position={{ x: 800, y: 200 }}
	resizable={false}
>
	<div class="messages" />
	<div class="input">
		<textarea name="text" id="text" />
	</div>
</Window>

<style>
	.messages {
		display: flex;
		flex-grow: 1;
		background-color: rgb(245, 245, 245);
		margin-bottom: 10px;
	}
	.input {
		height: 80px;
		overflow: hidden;
		box-sizing: content-box;
		overflow: visible;
	}
	textarea {
		width: 100% !important;
		height: 100% !important;
		padding: 5px;
		box-sizing: border-box;
	}
</style>
