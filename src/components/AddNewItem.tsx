import React from 'react';

import {NewItemForm} from './NewItemForm';

import {useModal} from '../hooks/useModal';

import {Modal} from './Modal';

import {
	AddColumnButton,
	AddTaskButton,
} from '../styles';

type AddNewItemProps = {
	onAddItem(text: string): void;
	buttonLabel: string;
	isColumn?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
	const {onAddItem, buttonLabel, isColumn} = props;
	const {isShown, toggle} = useModal();

	return (
		<>
			<Modal
				isShown={isShown}
				hide={toggle}
				modalContent={
					<NewItemForm
						onAddItem={text => {
							onAddItem(text);
							toggle();
						}}
						onCancel={() => toggle()}
					/>
				}
			/>
			{isColumn ? (
				<AddColumnButton onClick={() => toggle()}>
					{buttonLabel}
				</AddColumnButton>
			) : (
				<AddTaskButton onClick={() => toggle()}>
					{buttonLabel}
				</AddTaskButton>
			)}
		</>
	);
};
