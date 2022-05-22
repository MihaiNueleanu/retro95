<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ForwardStepIcon from '$lib/components/icons/ForwardStepIcon.svelte';
	import PauseIcon from '$lib/components/icons/PauseIcon.svelte';
	import PlayIcon from '$lib/components/icons/PlayIcon.svelte';
	import PreviousStepIcon from '$lib/components/icons/PreviousStepIcon.svelte';
	import Range from '$lib/components/Range.svelte';
	import Window from '$lib/components/Window.svelte';
	import { apps } from '$lib/stores';
	import { playlists } from '$lib/utils/constants';
	import { formatSeconds } from '$lib/utils/format';
	import { getPlayer } from '$lib/utils/ytPlayer';
	import { onDestroy, onMount } from 'svelte';
	import TrackList from './TrackList.svelte';

	let myPlayer: any;
	let activePlaylist = playlists.chopin;
	let script: HTMLScriptElement;
	let progress: number = 0;
	let duration: number = 0;
	let playerState: number;
	let videoData: any;
	let playlist: string[] = [];
	let currentIndex: number = 0;

	$: progressFormatted = formatSeconds(progress);
	$: durationFormatted = formatSeconds(duration);

	function onClose() {
		$apps['music'].open = false;
	}

	onMount(async () => {
		myPlayer = await getPlayer();

		console.log('myPlayer.loadPlaylist', myPlayer.loadPlaylist);

		myPlayer.loadPlaylist(activePlaylist.tracks.map((x) => x.id));

		setInterval(() => {
			progress = parseInt(myPlayer.getCurrentTime());
			duration = parseInt(myPlayer.getDuration());
			playerState = myPlayer.getPlayerState();
			videoData = myPlayer.getVideoData();
			playlist = myPlayer.getPlaylist();
			currentIndex = myPlayer.getPlaylistIndex();
		}, 200);
	});
</script>

<Window
	appKey="music"
	title="Music player"
	{onClose}
	position={{ x: 200, y: 10 }}
	size={{ x: 500, y: 490 }}
>
	<div class="playback">
		<div class="progress">
			{progressFormatted}/{durationFormatted}
		</div>
		<div class="info">
			{#if videoData?.title}
				<div>Track {currentIndex + 1} / {playlist.length}</div>
				<div class="track-title">{videoData.title}</div>
			{:else}
				Loading...
			{/if}
		</div>
	</div>

	<div class="controls">
		<Button on:click={() => myPlayer.playVideo()}>
			<PlayIcon />
		</Button>
		<Button on:click={() => myPlayer.pauseVideo()}>
			<PauseIcon />
		</Button>
		<Button on:click={() => myPlayer.previousVideo()}>
			<PreviousStepIcon />
		</Button>
		<Button on:click={() => myPlayer.nextVideo()}>
			<ForwardStepIcon />
		</Button>
		<div style="width:10px" />
		<Range
			valueFormatted={progressFormatted}
			initialValue={progress}
			max={duration}
			on:change={(e) => myPlayer.seekTo(e.detail.value)}
		/>
	</div>

	<div>
		<TrackList
			tracks={activePlaylist.tracks}
			{currentIndex}
			onSelectTrack={(index) => myPlayer.playVideoAt(index)}
		/>
	</div>
</Window>

<style>
	.controls {
		display: flex;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.playback {
		background-color: black;
		color: rgb(68, 208, 68);
		width: 100%;

		padding: 10px;
		box-sizing: border-box;
		font-size: 20px;
		font-family: monospace;
	}
	.progress {
		font-size: 30px;
	}
	.info {
		font-size: 16px;
	}
	.track-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
