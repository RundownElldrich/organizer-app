import {DragItem} from '../components/DragItem';

interface AddColumnAction {
  type: 'ADD_COLUMN';
  payload: string;
}

interface AddTaskAction {
  type: 'ADD_TASK';
  payload: {
    text: string;
    columnId: string
  };
}

interface MoveColumnAction {
  type: 'MOVE_COLUMN';
  payload: {
    draggedColumnId: string;
    dropElementId: string;
  };
}

interface MoveTaskAction {
  type: 'MOVE_TASK';
  payload: {
    draggedTaskId: string;
    dropElementId: string | null;
    sourceColumnId: string;
    targetColumnId: string;
  };
}

interface SetDraggedItemAction {
  type: 'SET_DRAGGED_ITEM',
  payload: DragItem | null,
}

interface DeleteColumnAction {
  type: 'DELETE_COLUMN';
  payload: string;
}

interface DeleteTaskAction {
  type: 'DELETE_TASK';
  payload: {
    columnId: string;
    taskId: string;
  };
}

export type Action = AddColumnAction
  | AddTaskAction
  | MoveColumnAction
  | MoveTaskAction
  | DeleteColumnAction
  | DeleteTaskAction
  | SetDraggedItemAction;

export const addTask = (
	text: string,
	columnId: string,
): Action => ({
	type: 'ADD_TASK',
	payload: {
		text,
		columnId,
	},
});

export const addColumn = (
	text: string,
): Action => ({
	type: 'ADD_COLUMN',
	payload: text,
});

export const moveTask = (
	draggedTaskId: string,
	dropElementId: string | null,
	sourceColumnId: string,
	targetColumnId: string,
): Action => ({
	type: 'MOVE_TASK',
	payload: {
		draggedTaskId,
		dropElementId,
		sourceColumnId,
		targetColumnId,
	},
});

export const moveColumn = (
	draggedColumnId: string,
	dropElementId: string,
): Action => ({
	type: 'MOVE_COLUMN',
	payload: {
		draggedColumnId,
		dropElementId,
	},
});

export const deleteColumn = (columnId: string): Action => ({
	type: 'DELETE_COLUMN',
	payload: columnId,
});

export const deleteTask = (
	columnId: string,
	taskId: string,
): Action => ({
	type: 'DELETE_TASK',
	payload: {
		columnId,
		taskId,
	},
});

export const setDraggedItem = (
	draggedItem: DragItem | null,
): Action => ({
	type: 'SET_DRAGGED_ITEM',
	payload: draggedItem,
});

type Task = {
  id: string;
  text: string;
}

type Column = {
  id: string;
  text: string;
  tasks: Task[];
}

export type AppState = {
  columns: Column[];
}
