<script lang="ts">
	import { apps, type AppKeys } from '$lib/stores';
	import { onMount } from 'svelte';
	import Window from '../Window.svelte';
	import { io, Socket } from 'socket.io-client';
	import { browser } from '$app/env';
	import { chatName } from '$lib/stores/localStorage';
	import type { ChatMessage } from '$lib/utils/chat';
	import moment from 'moment';
	import { appsettings } from '$lib/stores/appsettings';

	let appKey: AppKeys = 'chat';
	let socket: Socket;
	let inputText: string = '';
	let messages: ChatMessage[] = [];
	let messagesRef: HTMLDivElement;

	onMount(() => {
		if (!browser) return;

		const url = $appsettings.SOCKET_URL;
		console.log({ url });
		socket = io(url, { transports: ['websocket'] });

		socket.on('connect', () => {
			socket.emit('name', $chatName);
			socket.emit('getMessagesRequest');
		});

		socket.on('message', (message: ChatMessage) => {
			console.log(message);
			messages = [...messages, message];
			setTimeout(() => {
				messagesRef.scrollTop = messagesRef.scrollHeight;
			});
		});

		socket.on('getMessagesResponse', (msg: ChatMessage[]) => {
			console.log(msg);
			messages = msg;
			setTimeout(() => {
				messagesRef.scrollTop = messagesRef.scrollHeight;
			}, 300);
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
	<div class="messages" bind:this={messagesRef}>
		{#each messages as message, i}
			<div class="message">
				{#if !messages[i - 1] || (messages[i - 1] && messages[i - 1].from !== message.from)}
					<div class="topline">
						<div class="name">{message.from}</div>
						<div class="time">{moment(message.time).fromNow()}</div>
					</div>
				{/if}

				<div class="text">{message.text}</div>
			</div>
		{/each}
	</div>
	<div class="input">
		<div class="myName">
			{$chatName}:
		</div>
		<textarea
			name="text"
			id="text"
			bind:value={inputText}
			on:keypress={(e) => {
				if (e.key === 'Enter') sendMessage();
			}}
		/>
	</div>
</Window>

<style>
	.messages {
		flex-direction: column;
		display: flex;
		background-color: rgb(245, 245, 245);
		margin-bottom: 10px;
		overflow-y: auto;
		padding: 10px;
		height: calc(100% - 150px);
	}

	.topline {
		display: flex;
		align-items: flex-end;
		margin-top: 10px;
	}

	.message:first-child .topline {
		margin-top: 0;
	}

	.name {
		font-weight: bold;
		font-size: 14px;
	}
	.time {
		margin-left: 5px;
		color: rgb(174, 174, 174);
		font-size: 12px;
	}

	.input {
		height: 80px;
		overflow: hidden;
		box-sizing: content-box;
		overflow: visible;
		position: relative;
	}

	.myName {
		position: absolute;
		left: 6px;
		top: 5px;
		font-size: 14px;
		pointer-events: none;
	}

	textarea {
		width: 100% !important;
		height: 100% !important;
		padding: 5px;
		box-sizing: border-box;
		padding-top: 20px;
	}
</style>
