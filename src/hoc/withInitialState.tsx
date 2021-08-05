import React, {useState, useEffect, ComponentType} from 'react';
import {AppState} from '../state/appStateReducer';
import {load} from '../api';

type InjectedProps = {
  initialState: AppState;
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

export function withInitialState<TProps>(WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>) {
	return (props: PropsWithoutInjected<TProps>) => {
		const [initialState, setInitialState] = useState<AppState>({
			draggedItem: null,
			columns: [],
		});

		const [isLoading, setIsLoading] = useState(true);
		const [error, setError] = useState<Error | undefined>();

		useEffect(() => {
			const fetchInitialState = async () => {
				try {
					const data = await load();
					setInitialState(data);
				} catch (error) {
					setError(error);
				}

				setIsLoading(false);
			};

			fetchInitialState();
		}, []);

		if (isLoading) {
			return <div>Loading stuff...</div>;
		}

		if (error) {
			return <div>Something went wrong: {error.message}</div>;
		}

		return (
			<WrappedComponent
				{...props}
				initialState={initialState}
			/>
		);
	};
}
