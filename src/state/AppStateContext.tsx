import React, {createContext, useContext, useEffect, Dispatch, PropsWithChildren} from 'react';
import {useImmerReducer} from 'use-immer';

import {DragItem} from '../components/DragItem';

import {withInitialState} from '../hoc/withInitialState';

import {save} from '../api';

import {appStateReducer, AppState, Column, Task} from './appStateReducer';
import {Action} from './actions';

// Const appData: AppState = {
// 	draggedItem: null,
// 	columns: [
// 		{
// 			id: '0',
// 			text: 'To Do',
// 			tasks: [{id: '00', text: 'Task 1 To Do'}],
// 		},
// 		{
// 			id: '1',
// 			text: 'In Progress',
// 			tasks: [{id: '10', text: 'Task 1 In Progress'}],
// 		},
// 		{
// 			id: '2',
// 			text: 'Done',
// 			tasks: [{id: '20', text: 'Task 1 Done'}],
// 		},
// 	],
// };

type AppStateContextProps = {
  draggedItem: DragItem | null;
  columns: Column[];
  getTasksByColumnId(id: string): Task[];
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => useContext(AppStateContext);

type AppStateProviderProps = PropsWithChildren<{ initialState: AppState }>;

export const AppStateProvider = withInitialState<AppStateProviderProps>(({children, initialState}) => {
	const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

	useEffect(() => {
		save(state);
	}, [state]);

	const {draggedItem, columns} = state;
	const getTasksByColumnId = (id: string) => columns.find((column: Column) => column.id === id)?.tasks || [];

	return (
		<AppStateContext.Provider value={{draggedItem, columns, getTasksByColumnId, dispatch}}>
			{children}
		</AppStateContext.Provider>
	);
});
