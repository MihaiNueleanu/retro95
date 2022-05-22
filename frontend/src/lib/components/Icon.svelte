<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';
	import { dragElement } from '$lib/utils/drag';
	import { onMount } from 'svelte';

	export let label: string;
	export let src: string;
	export let onClick: () => void;
	export let position: { x: number; y: number } = { x: 0, y: 0 };

	let icon: HTMLElement;
	let selected: boolean = false;

	onMount(() => {
		dragElement(icon);
		icon.style.top = `${position.y}px`;
		icon.style.left = `${position.x}px`;
	});
</script>

<div
	class="icon"
	class:selected
	bind:this={icon}
	use:clickOutside={() => {
		selected = false;
	}}
	on:click={() => {
		selected = true;
	}}
	on:dblclick={() => {
		onClick();
	}}
>
	<img {src} alt={label} />
	<div class="label">{label}</div>
</div>

<style>
	.icon {
		width: 50px;
		padding: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		z-index: 9;
		cursor: pointer;
	}
	img {
		width: 100%;
		/* height: 100%; */
	}
	.label {
		margin-top: 5px;
		font-family: monospace;
		color: white;
		text-align: center;
		font-size: 10px;
		width: 100%;
	}

	.selected {
		background-color: rgba(255, 255, 255, 0.288);
		outline: 1px dotted rgb(255, 255, 255);
	}
</style>
