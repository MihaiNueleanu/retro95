<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadInput) {
		const url = '/appsettings.json';
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					APPSETTINGS: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not load configuration')
		};
	}
</script>

<script lang="ts">
	import { appsettings } from '$lib/stores/appsettings';
	export let APPSETTINGS;
	$appsettings = APPSETTINGS;
</script>

<slot />
