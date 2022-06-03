<script lang="ts">
	import type { AppKeys } from '$lib/stores';
	import { openAppsStack, focusedApp } from '$lib/stores';
	import { dragElement, makeResizableDiv } from '$lib/utils/drag';
	import { onMount } from 'svelte';

	export let appKey: AppKeys;
	export let title: string;
	export let onClose: () => void;
	export let resizable: boolean = false;
	export let position: { x: number; y: number } = { x: 0, y: 0 };
	export let size: { x: number; y: number } = { x: 0, y: 0 };

	let container: HTMLElement;

	onMount(() => {
		dragElement(container);
		if (resizable) {
			makeResizableDiv(container);
		}
		container.style.top = `${position.y}px`;
		container.style.left = `${position.x}px`;
		container.style.width = `${size.x}px`;
		container.style.height = `${size.y}px`;
	});
</script>

<div
	class="container"
	class:focused={$focusedApp === appKey}
	bind:this={container}
	on:click={() => {
		focusedApp.set(appKey);
		openAppsStack.set([...$openAppsStack.filter((x) => x !== appKey), appKey]);
	}}
>
	<div class="topbar">
		<div class="title">{title}</div>
		<div class="controls">
			<div class="close" on:click={onClose}>×</div>
		</div>
	</div>
	<div class="content" on:mousedown|stopPropagation>
		<slot />
	</div>

	{#if resizable}
		<div class="resizers">
			<div class="resizer top-left" />
			<div class="resizer top-right" />
			<div class="resizer bottom-left" />
			<div class="resizer bottom-right" />
		</div>
	{/if}
</div>

<style>
	.container {
		resize: both;
		overflow: none;
		position: absolute;
		z-index: 10;
		background-color: rgb(195, 195, 194);
		min-width: 300px;
		min-height: 200px;
		width: 500px;
		border-width: 2px;
		border-style: outset;
		border-color: rgb(237, 237, 237);
		display: flex;
		flex-direction: column;
	}
	.container.focused {
		z-index: 100;
	}

	.container.focused .topbar {
		/* background-color: rgb(3, 0, 128); */
		background: linear-gradient(to right, rgba(3, 0, 128, 1) 0%, rgb(20, 18, 133) 100%);
	}

	.controls {
		display: flex;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.content {
		padding: 5px;
		flex: 1;
		display: flex;
		flex-direction: column;
		z-index: 2;
		height: 100%;
	}
	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: rgb(128, 128, 128);
		color: white;
		font-size: 12px;
		font-family: monospace;
		height: 20px;
		padding: 5px;
		cursor: move;
		z-index: 3;
	}
	.close {
		font-size: 20px;
		line-height: 14px;
		color: black;
		border-color: rgb(237, 237, 237);
		border-width: 2px;
		border-style: outset;
		background-color: rgb(195, 195, 194);
		width: 14px;
		height: 14px;
		text-align: center;
		cursor: pointer;
	}
	.close:active {
		border-style: groove;
		border-color: rgb(196, 196, 196);
	}

	.resizers {
		z-index: 1;
		width: 100%;
		height: 100%;
		/* border: 3px solid #4286f4; */
		box-sizing: border-box;
		position: absolute;
	}

	.resizers .resizer {
		width: 15px;
		height: 15px;
		border-radius: 50%; /*magic to turn square into circle*/
		/* background: white; */
		/* border: 3px solid #4286f4; */
		position: absolute;
	}

	.resizers .resizer.top-left {
		left: -5px;
		top: -5px;
		cursor: nwse-resize;
	}
	.resizers .resizer.top-right {
		right: -5px;
		top: -5px;
		cursor: nesw-resize;
	}
	.resizers .resizer.bottom-left {
		left: -5px;
		bottom: -5px;
		cursor: nesw-resize;
	}
	.resizers .resizer.bottom-right {
		right: -5px;
		bottom: -5px;
		cursor: nwse-resize;
	}
</style>
