<script lang="ts">
</script>

<button class="button" on:click>
	<slot />
</button>

<style>
	.button {
		color: black;
		border-color: rgb(237, 237, 237);
		border-width: 2px;
		border-style: outset;
		background-color: rgb(195, 195, 194);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.button:active {
		border-style: groove;
		border-color: rgb(196, 196, 196);
	}

	.button > :global(svg) {
		width: 20px;
	}
</style>
