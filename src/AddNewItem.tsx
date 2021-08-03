import React, {useState} from 'react';

import {NewItemForm} from './NewItemForm';

import {AddItemButton} from './styles';

type AddNewItemProps = {
	onAddItem(text: string): void;
	toggleButtonText: string;
}

export const AddNewItem = (props: AddNewItemProps) => {
	const [showForm, setShowForm] = useState(false);
	const {onAddItem, toggleButtonText} = props;

	if (showForm) {
		return (
			<NewItemForm onAddItem={text => {
				onAddItem(text);
				setShowForm(false);
			}}/>
		);
	}

	return (
		<AddItemButton onClick={() => setShowForm(true)}>
			{toggleButtonText}
		</AddItemButton>
	);
};
