<script lang="ts">
	import type { AppKeys } from '$lib/stores';
	import { openAppsStack, focusedApp } from '$lib/stores';
	import { clickOutside } from '$lib/utils/clickOutside';
	import { dragElement } from '$lib/utils/drag';
	import { onMount } from 'svelte';

	export let appKey: AppKeys;
	export let title: string;
	export let onClose: () => void;
	export let resizable: boolean = false;
	export let position: { x: number; y: number } = { x: 0, y: 0 };
	export let size: { x: number; y: number } = { x: 0, y: 0 };

	let container: HTMLElement;

	onMount(() => {
		dragElement(container, resizable);
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
</div>

<style>
	.container {
		resize: both;
		overflow: auto;
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
		background-color: rgb(3, 0, 128);
	}

	.controls {
		display: flex;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.content {
		padding: 5px;
		flex: 1;
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
</style>
