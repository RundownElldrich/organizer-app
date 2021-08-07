import React, {useRef} from 'react';
import {useDrop} from 'react-dnd';

import {AddNewItem} from './AddNewItem';
import {Task} from './Task';

import {addTask, moveTask, moveColumn, deleteColumn, setDraggedItem} from '../state/actions';
import {useAppState} from '../state/AppStateContext';

import {useItemDrag} from '../hooks/useItemDrag';

import {isItemDragged} from '../utils/isItemDragged';

import {ColumnContainer, ColumnTitle} from '../styles';

type ColumnProps = {
  id: string,
  text: string,
  isPreview?: boolean,
}

export const Column = ({id, text, isPreview}: ColumnProps) => {
	const {
		draggedItem,
		getTasksByColumnId,
		dispatch,
	} = useAppState();
	const tasks = getTasksByColumnId(id);
	const ref = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop({
		accept: ['COLUMN', 'TASK'],
		drop() {
			if (!draggedItem) {
				return;
			}

			if (draggedItem.type === 'COLUMN') {
				if (draggedItem.id === id) {
					return;
				}

				dispatch(moveColumn(draggedItem.id, id));
			} else {
				if (draggedItem.columnId === id) {
					return;
				}

				if (tasks.length) {
					return;
				}

				dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
				dispatch(setDraggedItem({...draggedItem, columnId: id}));
			}
		},
	});

	const {drag} = useItemDrag({
		type: 'COLUMN',
		id,
		text,
	});

	drag(drop(ref));

	return (
		<ColumnContainer
			ref={ref}
			isVisible={!isItemDragged(draggedItem, 'COLUMN', id, isPreview)}
			isPreview={isPreview}
		>
			<ColumnTitle>{text}</ColumnTitle>
			<button onClick={() => dispatch(deleteColumn(id))}>
				delete
			</button>
			{tasks.map(task => (
				<Task
					key={task.id}
					text={task.text}
					id={task.id}
					columnId={id}
				/>
			))}
			<AddNewItem
				buttonLabel="add task"
				onAddItem={text => dispatch(addTask(text, id))}
			/>
		</ColumnContainer>
	);
};
