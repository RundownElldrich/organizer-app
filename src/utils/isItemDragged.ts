import {DragItem} from '../components/DragItem';

export function isItemDragged(
	draggedItem: DragItem | null,
	itemType: string,
	id: string,
	isPreview?: boolean,
): boolean {
	return Boolean(
		!isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id,
	);
}
