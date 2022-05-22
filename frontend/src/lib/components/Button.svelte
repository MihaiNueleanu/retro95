<script lang="ts">
	export let fullWidth = false;
	export let align: 'left' | 'right' | 'center' = 'center';
	export let active: boolean = false;

	export let textValue: string | undefined = undefined;
</script>

{#if textValue !== undefined}
	<button
		class="button"
		class:fullWidth
		class:alignLeft={align === 'left'}
		class:alignCenter={align === 'center'}
		class:alignRight={align === 'right'}
		class:active
		on:click
	>
		<input type="text" bind:value={textValue} class="input" />
		<div class="iconRight">
			<slot name="iconRight" />
		</div>
	</button>
{:else}
	<button
		class="button"
		class:fullWidth
		class:alignLeft={align === 'left'}
		class:alignCenter={align === 'center'}
		class:alignRight={align === 'right'}
		class:active
		contenteditable={textValue !== undefined}
		on:click
	>
		<slot />
		<div class="iconRight">
			<slot name="iconRight" />
		</div>
	</button>
{/if}

<style>
	.input {
		width: 100%;
		background-color: transparent;
		border: none;
	}
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

	.button.active {
		border-style: groove;
		border-color: rgb(196, 196, 196);
	}

	.button > :global(svg) {
		width: 20px;
	}

	.fullWidth {
		width: 100%;
	}
	.alignLeft {
		text-align: left;
		justify-content: space-between;
	}
	.alignCenter {
		text-align: center;
		justify-content: center;
	}
	.alignRight {
		text-align: right;
		justify-content: flex-end;
	}
	.iconRight {
		align-self: flex-end;
		justify-self: flex-end;
		float: right;
	}
</style>
