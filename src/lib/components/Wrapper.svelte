<script>
	import Desktop from './Desktop.svelte';
	import Taskbar from './Taskbar.svelte';
</script>

<div class="container">
	<Desktop />
	<Taskbar />
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
</style>
