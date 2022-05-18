<script lang="ts">
	import { apps, focusedApp, openAppsStack, type AppKeys, type AppConfig } from '$lib/stores';
	import Icon from './Icon.svelte';

	function getKey<T extends AppKeys>(key: string) {
		return key as T;
	}
</script>

<div class="desktop">
	{#each Object.entries($apps) as [key, app]}
		{#if !app.hidden}
			<Icon
				label={app.title}
				src={app.icon}
				onClick={() => {
					app.open = true;
					focusedApp.set(getKey(key));
					openAppsStack.set([...$openAppsStack.filter((x) => x !== getKey(key)), getKey(key)]);
				}}
				position={app.position}
			/>
			{#if app.open}
				<div style={`z-index: ${$openAppsStack.findIndex((appKey) => appKey === key) + 100}`}>
					<svelte:component this={app.component} />
				</div>
			{/if}
		{/if}
	{/each}
</div>

<style>
	.desktop {
		position: relative;
		flex: 1;
		background-color: rgb(4, 121, 124);
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
</style>
