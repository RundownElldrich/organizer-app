import React, {createContext, useContext, Dispatch, PropsWithChildren, ReactNode} from 'react';
import {useImmerReducer} from 'use-immer';

import {DragItem} from '../DragItem';

import {appStateReducer, AppState, Column, Task} from './appStateReducer';

import {Action} from './actions';

const appData: AppState = {
	draggedItem: null,
	columns: [
		{
			id: '0',
			text: 'To Do',
			tasks: [{id: '00', text: 'Task 1 To Do'}],
		},
		{
			id: '1',
			text: 'In Progress',
			tasks: [{id: '10', text: 'Task 1 In Progress'}],
		},
		{
			id: '2',
			text: 'Done',
			tasks: [{id: '20', text: 'Task 1 Done'}],
		},
	],
};

type AppStateContextProps = {
  draggedItem: DragItem | null;
  columns: Column[];
  getTasksByColumnId(id: string): Task[];
  dispatch: Dispatch<Action>;
}

// Type AppStateProviderProps = {
//  children: React.ReactNode;
// }

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => useContext(AppStateContext);

// Const MyComponent = ({children}: PropsWithChildren<{}>)

export const AppStateProvider = ({children}: PropsWithChildren<ReactNode>) => {
// Export const AppStateProvider: FC<AppStateProviderProps> = ({children}) => {
	const [state, dispatch] = useImmerReducer(appStateReducer, appData);

	const {draggedItem, columns} = state;
	const getTasksByColumnId = (id: string) => columns.find(list => list.id === id)?.tasks || [];

	return (
		<AppStateContext.Provider value={{draggedItem, columns, getTasksByColumnId, dispatch}}>
			{children}
		</AppStateContext.Provider>
	);
};
