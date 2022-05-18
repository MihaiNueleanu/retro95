<script lang="ts">
	import { apps, focusedApp, openApps, openAppsStack } from '$lib/stores';
	import { onMount } from 'svelte';

	function getDate() {
		const today = new Date();
		const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
		const time = today.getHours() + ':' + today.getMinutes();
		return { date, time };
	}

	let dateTime = getDate();

	onMount(() => {
		setInterval(() => {
			dateTime = getDate();
		}, 1000);
	});
</script>

<div class="taskbar">
	<div class="left">
		<div class="start">
			<img src="/icons/world-5.png" alt="Start icon" />
			<span>Start</span>
		</div>

		<div class="apps">
			{#each $openApps as appKey}
				<div
					class="app"
					on:click={() => {
						focusedApp.set(appKey);
						openAppsStack.set([...$openAppsStack.filter((x) => x !== appKey), appKey]);
					}}
				>
					<div class="app-icon">
						<img src={$apps[appKey].icon} alt="App icon" />
					</div>
					<div class="app-title">
						{$apps[appKey].title}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="right">
		<div class="clock">
			<div>
				{dateTime.time}
			</div>
			<div>
				{dateTime.date}
			</div>
		</div>
	</div>
</div>

<style>
	.taskbar {
		height: 50px;
		width: 100vw;
		background-color: rgb(195, 195, 194);
		border-width: 3px 3px 0 0;
		border-style: groove;
		border-color: rgb(244, 244, 244);
		box-sizing: border-box;
		overflow: hidden;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.left {
		display: flex;
	}

	.start {
		width: 70px;
		border-width: 2px;
		border-style: outset;
		border-color: rgb(241, 241, 241);
		margin: 5px 5px;

		font-size: 18px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		user-select: none;
	}
	.start:active {
		border-style: groove;
		border-color: rgb(196, 196, 196);
	}

	.start img {
		margin-right: 5px;
	}

	.clock {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 5px;
		width: 100px;
		border-left: 2px groove rgb(241, 241, 241);
		margin: 3px;
	}

	.apps {
		height: 100%;
		display: flex;
		flex-direction: row;
		margin-left: 10px;
	}

	.app {
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;

		border-color: rgb(237, 237, 237);
		border-width: 2px;
		border-style: outset;
		background-color: rgb(195, 195, 194);
		margin: 5px 0;
		padding: 0 10px;
	}

	.app:active {
		border-style: groove;
		border-color: rgb(196, 196, 196);
	}

	.app img {
		height: 20px;
		width: 20px;
		margin-right: 5px;
	}
</style>
