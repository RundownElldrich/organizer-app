import { useState } from "react";

import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

import { useFocus } from './hooks/useFocus';

type NewItemFormProps = {
  onAddItem(text: string): void,
};

export const NewItemForm = ({onAddItem}: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus()

  const handleAddText = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
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
    </NewItemFormContainer>
  )
}
