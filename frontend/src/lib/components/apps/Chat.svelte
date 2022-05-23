<script lang="ts">
	import { apps, type AppKeys } from '$lib/stores';
	import { onMount } from 'svelte';
	import Window from '../Window.svelte';
	import { io, Socket } from 'socket.io-client';
	import { browser } from '$app/env';
	import { chatName } from '$lib/stores/localStorage';
	import type { ChatMessage } from '$lib/utils/chat';

	let appKey: AppKeys = 'chat';
	let socket: Socket;
	let inputText: string = '';
	let messages: ChatMessage[] = [];

	onMount(() => {
		if (!browser) return;

		const url = import.meta.env.VITE_SOCKET_URL;
		socket = io(url, { transports: ['websocket'] });

		socket.on('connect', () => {
			socket.emit('name', $chatName);
		});

		socket.on('message', (message: ChatMessage) => {
			console.log(message);
			messages = [...messages, message];
		});
	});

	function sendMessage() {
		socket.emit('message', inputText);
		inputText = '';
	}
</script>

<Window
	{appKey}
	title={$apps[appKey].title}
	onClose={() => ($apps[appKey].open = false)}
	size={{ x: 640, y: 330 }}
	position={{ x: 800, y: 200 }}
	resizable={false}
>
	<div class="messages">
		{#each messages as message}
			<div class="message">
				<div class="name">{message.from}</div>
				<div class="time">{message.time}</div>
				<div class="text">{message.text}</div>
			</div>
		{/each}
	</div>
	<div class="input">
		<textarea
			name="text"
			id="text"
			bind:value={inputText}
			on:keypress={(e) => {
				if (e.key === 'Enter') {
					sendMessage();
				}
			}}
		/>
	</div>
</Window>

<style>
	.messages {
		display: flex;
		flex-grow: 1;
		background-color: rgb(245, 245, 245);
		margin-bottom: 10px;
	}
	.input {
		height: 80px;
		overflow: hidden;
		box-sizing: content-box;
		overflow: visible;
	}
	textarea {
		width: 100% !important;
		height: 100% !important;
		padding: 5px;
		box-sizing: border-box;
	}

	.messages {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
