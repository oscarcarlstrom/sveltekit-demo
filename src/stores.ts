import { writable } from 'svelte/store';
interface Store {
	access_token: string;
	token_type: 'Bearer';
	expires_in: number;
}
export const token = writable({
	access_token:
		'BQAKii8XszzlPzIVUAzlfM_6k9ALLN2-2Ntc23CFDy6LFiPXsfOqew9SwrN3_D3X8TAuh9bCskUPye_Wh0OAVOsB_d5UvIi8ZcLc9b56rpKPutAIZVOS',
	token_type: 'Bearer',
	expires_in: 3600
} as Store | null);

// if (localStorage) {
// 	const localStorageKey = 'spotifyToken';
// 	const storedToken = JSON.parse(localStorage.getItem(localStorageKey) ?? '');
// 	token = writable(storedToken);
// 	token.subscribe((value) => {
// 		if (value && 'access_token' in value) {
// 			localStorage.setItem(localStorageKey, JSON.stringify(value));
// 		} else {
// 			localStorage.removeItem(localStorageKey);
// 		}
// 	});
// }
