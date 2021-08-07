import styled, {keyframes} from 'styled-components';

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

const backgroundAnimation = keyframes`
  0%{background-position:0% 0%;}
  50%{background-position:93% 100%;}
  100%{background-position:0% 0%;}
`;

const isometric = `
  transform: skewY(-4deg);
  box-shadow: -1rem -0.5rem 2.5rem 1rem rgba(0,0,0,0.3);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -1rem;
    width: 1rem;
    height: 100%;
    background: #d9d9d9;
    transform-origin: right bottom;
    transform: skewy(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 1rem;
    background: #ededed;
    transform-origin: bottom left;
    transform: skewx(45deg);
  }
`;

export const AppContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: #ED65B7;
  background: linear-gradient(to bottom right, #ED65B7, #7B1BAD);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 60s ease infinite;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  width: 24rem;
  margin:  4rem 2rem;
  box-sizing:border-box;
  background-color:#fff;
  padding: 2rem;

  ${isometric};
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

export const AddColumnButton = styled.button`
  position: fixed;
  z-index: 1;
  bottom: 2rem;
  right: 2rem;
  background-color: #fff;
  border: none;
  border-radius: .1rem;
  box-shadow: 0 0 1.5rem -0.1rem rgba(0,0,0,0.5);
  padding: 1rem 2rem;
  font-size: 2rem;
  color: #5e5e5e;
  font-weight: 600;
  font-weight: bold;
  opacity: 0.75;
  transition: opacity 350ms;

  &:hover {
    opacity: 1;
  }
`;

export const AddTaskButton = styled.button`
  background-color: #fff;
  border: none;
  box-shadow: 0 0 1.5rem -0.1rem rgba(0,0,0,0.5);
  padding: 1rem 2rem;
  font-size: 2rem;
  color: #5e5e5e;
  opacity: 0.75;
  transition: opacity 350ms;

  &:hover {
    opacity: 1;
  }
`;

export const NewItemFormContainer = styled.div`
  position: relative;
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
