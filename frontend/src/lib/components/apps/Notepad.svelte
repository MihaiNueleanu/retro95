<script lang="ts">
	import { apps } from '$lib/stores';
	import { notepad } from '$lib/stores/localStorage';
	import Window from '../Window.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/env';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Button from '../Button.svelte';

	let element: HTMLElement;
	let editor: Editor;
	let activeTab = 0;

	$: activeTab, enableEditor();

	function enableEditor() {
		if (!browser) return;
		if (editor) {
			editor.destroy();
		}
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: $notepad[activeTab].body,
			onTransaction: () => {
				editor = editor;
			},
			onUpdate: (data) => {
				$notepad[activeTab] = {
					...$notepad[activeTab],
					body: data.editor.getJSON()
				};
			}
		});
	}

	function deleteTab(index: number) {
		$notepad = $notepad.filter((_, i) => i !== index);
		// if there are no tabs left, create a new one
		if ($notepad.length === 0) {
			$notepad = [...$notepad, { name: 'Untitled', body: {} }];
		}
		// switch to the next tab
		activeTab = Math.min(activeTab, $notepad.length - 1);
		enableEditor();
	}

	function handleDelete(index: number) {
		console.log('delete', $notepad[index].body);
		const body = $notepad[index].body;
		if (!body || Object.keys(body).length === 0) return deleteTab(index);
		if (confirm('Are you sure you want to delete this tab?')) {
			deleteTab(index);
		}
	}

	onMount(() => {
		enableEditor();
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<Window
	appKey="notepad"
	title={'Notepad'}
	onClose={() => ($apps['notepad'].open = false)}
	size={{ x: 500, y: 300 }}
	position={{ x: 220, y: 40 }}
	resizable
>
	<div class="wrap">
		<div class="left">
			<div bind:this={element} class="textarea" />
		</div>
		<div class="right">
			{#each $notepad as tab, i}
				<Button
					on:click={() => (activeTab = i)}
					fullWidth
					align="left"
					active={activeTab === i}
					bind:textValue={tab.name}
				>
					{tab.name}
					<div slot="iconRight" on:click={() => handleDelete(i)}>×</div>
				</Button>
			{/each}
			<Button
				on:click={() => ($notepad = [...$notepad, { name: 'File', body: {} }])}
				fullWidth
				align="left"
			>
				+ New tab
			</Button>
		</div>
	</div>
	<!-- <textarea name="notepad" bind:value={$notepad} class="textarea" /> -->
</Window>

<style>
	.wrap {
		display: flex;
		flex: 1;
		overflow-y: auto;
	}
	.textarea {
		height: 100%;
		resize: none;
	}

	.left {
		flex: 1;
		height: 100%;
	}
	.right {
		width: 140px;
		height: 100%;
	}

	:global(.ProseMirror) {
		height: 100%;
		padding: 5px 10px;
		background: white;
		box-sizing: border-box;
		border-radius: 0;
	}
	:global(.ProseMirror-focused) {
		outline: none;
	}
</style>
