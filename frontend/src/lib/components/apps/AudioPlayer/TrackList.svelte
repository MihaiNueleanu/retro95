<script lang="ts">
	export let tracks: {
		id: string;
		title: string;
	}[] = [];

	export let currentIndex: number | undefined = undefined;
	export let onSelectTrack: (id: number) => void;
</script>

<div class="tracklist">
	{#each tracks as track, index}
		<div
			class="track"
			class:active={currentIndex === index}
			on:dblclick={() => onSelectTrack(index)}
		>
			<div class="title" title={track.title}>{track.title}</div>
		</div>
	{/each}
</div>

<style>
	.tracklist {
		height: 300px;
		overflow-y: auto;
		background-color: white;
		padding: 5px;
		flex: 1;
	}

	.track {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		padding: 3px 5px;
		user-select: none;
	}
	.track:hover {
		background-color: rgb(240, 240, 240);
	}
	.active {
		background-color: rgb(3, 0, 128);
		color: white;
	}
	.active:hover {
		background-color: rgb(3, 0, 128);
		color: white;
	}
</style>
