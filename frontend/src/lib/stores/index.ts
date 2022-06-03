import About from '$lib/components/apps/About.svelte';
import AudioPlayer from '$lib/components/apps/AudioPlayer/AudioPlayer.svelte';
import Chat from '$lib/components/apps/Chat.svelte';
import NotePad from '$lib/components/apps/Notepad.svelte';
import Rain from '$lib/components/apps/Rain.svelte';
import Snake from '$lib/components/apps/Snake.svelte';
import { writable } from 'svelte/store';

export const isMediaPlayerOpen = writable(true);
export const isAboutOpen = writable(false);
export const isRainOpen = writable(false);
export const isLiteralOpen = writable(false);

const appsConfig = {
	music: {
		title: 'Music player',
		icon: '/icons/cd_audio.png',
		position: { x: 10, y: 10 },
		open: true,
		component: AudioPlayer
	},
	about: {
		title: 'About',
		icon: '/icons/computer_explorer_cool-0.png',
		position: { x: 10, y: 110 },
		open: false,
		component: About
	},
	rain: {
		title: 'Rain',
		icon: '/icons/paint_file-5.png',
		position: { x: 10, y: 210 },
		open: false,
		component: Rain
	},
	// literal: {
	// 	title: 'Literal',
	// 	icon: '/icons/paint_file-5.png',
	// 	position: { x: 100, y: 210 },
	// 	open: false,
	// 	component: Literal,
	// 	hidden: true
	// },
	notepad: {
		title: 'Notepad',
		icon: '/icons/template_empty-2.png',
		position: { x: 100, y: 10 },
		open: false,
		component: NotePad
	},
	chat: {
		title: 'Chat',
		icon: '/icons/envelope_closed-0.png',
		position: { x: 100, y: 110 },
		open: false,
		component: Chat,
		hidden: false
	},
	snake: {
		title: 'Snake',
		icon: '/icons/ms_dos-1.png',
		position: { x: 100, y: 210 },
		open: false,
		component: Snake,
		hidden: false
	}
};

export type AppKeys = keyof typeof appsConfig;

export type AppConfig = {
	title: string;
	component: any;
	icon: string;
	position: { x: number; y: number };
	open: boolean;
	hidden?: boolean;
};

export const apps = writable<{
	[key in AppKeys]: AppConfig;
}>(appsConfig);

export const openApps = writable<AppKeys[]>([]);
apps.subscribe((val) => {
	const keys = Object.keys(val) as AppKeys[];
	const result = keys.filter((key) => val[key].open);
	openApps.set(result);
});

export const openAppsStack = writable<AppKeys[]>([]);

export const focusedApp = writable<AppKeys>('music');
