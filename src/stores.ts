import { browser } from '$app/environment';
import { writable } from 'svelte/store';
interface Store {
	access_token: string;
	token_type: 'Bearer';
	expires_in: number;
}
export let token = writable(null as Store | null);

if (browser) {
	const localStorageKey = 'spotifyToken';
	const storedToken = JSON.parse(localStorage.getItem(localStorageKey) ?? '{}');
	token = writable(storedToken);
	token.subscribe((value) => {
		if (value && 'access_token' in value) {
			localStorage.setItem(localStorageKey, JSON.stringify(value));
		} else {
			localStorage.removeItem(localStorageKey);
		}
	});
}
