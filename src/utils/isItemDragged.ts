import { DragItem } from "../DragItem";

export const isItemDragged = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean,
): boolean => {
  return Boolean(
    !isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id
  )
};