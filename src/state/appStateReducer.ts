import {nanoid} from 'nanoid';

import {DragItem} from '../components/DragItem';

import {Action} from './actions';

import {findItemIndexById, moveItem} from '../utils/arrayUtils';

export type Task = {
  id: string;
  text: string;
}

export type Column = {
  id: string;
  text: string;
  tasks: Task[];
}

export type AppState = {
  draggedItem: DragItem | null;
  columns: Column[];
}

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
	switch (action.type) {
		case 'ADD_COLUMN': {
			draft.columns.push({
				id: nanoid(),
				text: action.payload,
				tasks: [],
			});
			break;
		}

		case 'ADD_TASK': {
			const {text, columnId} = action.payload;
			const columnIndex = findItemIndexById(draft.columns, columnId);

			draft.columns[columnIndex].tasks.push({
				id: nanoid(),
				text,
			});
			break;
		}

		case 'MOVE_COLUMN': {
			const {draggedColumnId, dropElementId} = action.payload;
			const dragIndex = findItemIndexById(draft.columns, draggedColumnId);
			const dropIndex = findItemIndexById(draft.columns, dropElementId);

			draft.columns = moveItem(draft.columns, dragIndex, dropIndex);
			break;
		}

		case 'MOVE_TASK': {
			const {
				draggedTaskId,
				dropElementId,
				sourceColumnId,
				targetColumnId,
			} = action.payload;

			const sourceColumnIndex = findItemIndexById(
				draft.columns,
				sourceColumnId,
			);
			const targetColumnIndex = findItemIndexById(
				draft.columns,
				targetColumnId,
			);
			const dragIndex = findItemIndexById(
				draft.columns[sourceColumnIndex].tasks,
				draggedTaskId,
			);
			const dropIndex = dropElementId
				? findItemIndexById(
					draft.columns[targetColumnIndex].tasks,
					dropElementId,
				)
				: 0;
			const item = draft.columns[sourceColumnIndex].tasks[dragIndex];

			draft.columns[sourceColumnIndex].tasks.splice(dragIndex, 1);
			draft.columns[targetColumnIndex].tasks.splice(dropIndex, 0, item);
			break;
		}

		case 'SET_DRAGGED_ITEM': {
			draft.draggedItem = action.payload;
			break;
		}

		default: {
			break;
		}
	}
};
