import type { JSONContent } from '@tiptap/core';
import { writable } from 'svelte-local-storage-store';

type Notepad = {
	name: string;
	body: JSONContent;
};
export const notepad = writable<Notepad[]>('notepad', [{ name: 'File 1', body: {} }]);
