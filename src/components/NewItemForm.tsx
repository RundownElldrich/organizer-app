import React, {useState} from 'react';

import {useFocus} from '../hooks/useFocus';

import {NewItemFormContainer, NewItemButton, NewItemInput} from '../styles';

type NewItemFormProps = {
  onAddItem(text: string): void;
	onCancel(): void;
}

export const NewItemForm = ({onAddItem, onCancel}: NewItemFormProps) => {
	const [text, setText] = useState<string>('');
	const inputRef = useFocus();

	const handleAddText = (
		event: React.KeyboardEvent<HTMLInputElement>,
	) => {
		if (event.key === 'Enter') {
			onAddItem(text);
		}
	};

	return (
		<NewItemFormContainer>
			<NewItemInput
				ref={inputRef}
				value={text}
				onChange={event => setText(event.target.value)}
				onKeyPress={handleAddText}
			/>
			<NewItemButton onClick={() => onAddItem(text)}>
        Create
			</NewItemButton>
			<NewItemButton onClick={() => onCancel()}>
        Cancel
			</NewItemButton>

		</NewItemFormContainer>
	);
};
