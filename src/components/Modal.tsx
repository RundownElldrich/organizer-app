import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`;

export const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 500;
`;

export const StyledModal = styled.div`
	z-index: 100;
	background: white;
	position: relative;
	margin: auto;
	border-radius: .1rem;
`;

export const Content = styled.div`
	padding: 10px;
	max-height: 30rem;
	overflow-x: hidden;
	overflow-y: auto;
`;

type ModalProps = {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

export const Modal = ({isShown, hide, modalContent}: ModalProps) => {
	const modal = (
		<>
			<Backdrop onClick={hide} />
			<Wrapper
				aria-modal
				tabIndex={-1}
				role="dialog"
			>
				<StyledModal>
					<Content>{modalContent}</Content>
				</StyledModal>
			</Wrapper>
		</>
	);

	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
