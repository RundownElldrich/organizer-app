import { useDragLayer } from "react-dnd";

import { Column } from "./Column";
import { Task } from "./Task";

import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";

import { useAppState } from "./state/AppStateContext";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <Column
            id={draggedItem.id}
            text={draggedItem.text}
            isPreview
          />
        ) : (
          <Task
            columnId={draggedItem.columnId}
            isPreview
            id={draggedItem.id}
            text={draggedItem.text}
          />
        )}
        
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null
};
