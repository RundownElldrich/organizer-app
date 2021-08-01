import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`

export const ColumnContainer = styled.div`
  flex-grow: 0;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`

export const ColumnTitle = styled.div`
  // wip styling
  color: crimson;
  border: 1px solid black;
  padding: 20px;
`

export const CardContainer = styled.div`
  // wip styling
  border: 1px solid black;
  padding: 20px;
`

export const AddItemButton = styled.button`
  // wip styling
  border: 1px solid black;
  padding: 20px;
  &:hover {
    border-color: yellowgreen;
  }
`

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`

export const NewItemInput = styled.input`
  width: 100%;
  // wip styling
  border: 1px solid black;
  padding: 20px;
`

export const NewItemButton = styled.button`
  // wip styling
  border: 1px solid black;
  padding: 20px;
`