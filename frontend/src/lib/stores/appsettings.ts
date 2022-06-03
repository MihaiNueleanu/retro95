import type { Appsettings } from 'src/routes/appsettings.json';
import { writable } from 'svelte/store';

export const appsettings = writable<Appsettings>();
