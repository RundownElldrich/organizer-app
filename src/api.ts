import {AppState} from './state/appStateReducer';

export const save = (payload: AppState) => fetch(`${process.env.REACT_APP_BACKEND}/save`, {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(payload),
}).then(response => {
	if (response.ok) {
		return response.json();
	}

	throw new Error('Error while saving the state.');
});

export const load = () => fetch(`${process.env.REACT_APP_BACKEND}/load`).then(
	response => {
		if (response.ok) {
			return response.json() as Promise<AppState>;
		}

		throw new Error('Error while loading the state.');
	},
);
