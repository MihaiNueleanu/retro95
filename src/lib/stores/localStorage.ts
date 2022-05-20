import { writable } from 'svelte-local-storage-store';

type Notepad = {
	name: string;
	body: any;
};
export const notepad = writable<Notepad[]>('notepad', [{ name: 'File 1', body: {} }]);
