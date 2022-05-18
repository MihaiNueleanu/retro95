import { writable } from 'svelte-local-storage-store';

export const notepad = writable('notepad', '');
