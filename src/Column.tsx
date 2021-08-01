import React from 'react';

import { AddNewItem } from './AddNewItem';
import { Card } from "./Card";

import { ColumnContainer, ColumnTitle } from "./styles"

import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";

type ColumnProps = {
  id: string,
  text: string,
}

export const Column = ({ id, text }: ColumnProps) => { 
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(task => (
        <Card
          text={task.text}
          key={task.id}
          id={task.id}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAddItem={text =>
          dispatch(addTask(text, id))
          }
      />
    </ColumnContainer>
  )
}
