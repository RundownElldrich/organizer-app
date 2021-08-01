import React from "react";

import { AddNewItem } from "./AddNewItem"
import { Column } from './Column';

import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

import {
  AppContainer,
} from './styles';

export const App = () => {
  const { lists, dispatch } = useAppState()

  return (
    <AppContainer>
      {lists.map(list => (
        <Column
          id={list.id}
          key={list.id}
          text={list.text}  
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAddItem={text => dispatch(addList(text))}
      />
    </AppContainer>
  )
}
