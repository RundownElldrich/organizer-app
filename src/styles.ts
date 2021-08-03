import styled from 'styled-components';

type DragPreviewContainerProps = {
  isVisible?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isPreview ? 'scale(1.2)' : undefined)};
`;

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
}

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
	({position: {x, y}}) => ({
		style: {
			transform: `translate(${x}px, ${y}px)`,
		},
	}),
)<DragPreviewWrapperProps>``;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const AppContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  // flex-grow: 0;
  width: 24rem;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`;

export const ColumnTitle = styled.div`
  // wip styling
  color: crimson;
  border: 1px solid black;
  padding: 20px;
`;

export const TaskContainer = styled(DragPreviewContainer)`
  // wip styling
  border: 1px solid black;
  padding: 20px;
`;

export const AddItemButton = styled.button`
  // wip styling
  border: 1px solid black;
  padding: 20px;
  &:hover {
    border-color: yellowgreen;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`;

export const NewItemInput = styled.input`
  width: 100%;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`;

export const NewItemButton = styled.button`
  // wip styling
  border: 1px solid black;
  padding: 20px;
`;
