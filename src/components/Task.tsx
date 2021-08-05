import React, {useRef} from 'react';
import {useDrop} from 'react-dnd';

import {moveTask} from '../state/actions';
import {useAppState} from '../state/AppStateContext';

import {useItemDrag} from '../hooks/useItemDrag';

import {isItemDragged} from '../utils/isItemDragged';

import {TaskContainer} from '../styles';

type TaskProps = {
  id: string,
  text: string,
  columnId: string,
  isPreview?: boolean,
}

export const Task = ({text, id, columnId, isPreview}: TaskProps) => {
	const {draggedItem, dispatch} = useAppState();
	const ref = useRef<HTMLDivElement>(null);

	const [, drop] = useDrop({
		accept: 'TASK',
		drop() {
			if (!draggedItem) {
				return;
			}

			if (draggedItem.type !== 'TASK') {
				return;
			}

			if (draggedItem.id === id) {
				return;
			}

			dispatch(
				moveTask(draggedItem.id, id, draggedItem.columnId, columnId),
			);
		},
	});

	const {drag} = useItemDrag({
		type: 'TASK',
		id,
		text,
		columnId,
	});

	drag(drop(ref));

	return (
		<TaskContainer
			isVisible={!isItemDragged(draggedItem, 'TASK', id, isPreview)}
			isPreview={isPreview}
			ref={ref}
		>
			{text}
		</TaskContainer>
	);
};
