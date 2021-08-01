import { createContext, useContext, Dispatch, FC } from "react"
import { useImmerReducer } from "use-immer";

import {
  appStateReducer,
  AppState,
  Column,
  Task
} from "./appStateReducer"

import { Action } from './actions'

import { DragItem } from "../DragItem";

const appData: AppState = {
  draggedItem: null,
  columns: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "00", text: "Task 1 To Do" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "10", text: "Task 1 In Progress" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "20", text: "Task 1 Done" }]
    }
  ]
}

type AppStateContextProps = {
  draggedItem: DragItem | null,
  columns: Column[],
  getTasksByColumnId(id: string): Task[],
  dispatch: Dispatch<Action>,
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const useAppState = () => {
  return useContext(AppStateContext)
}

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { draggedItem, columns } = state;
  const getTasksByColumnId = (id: string) => {
    return columns.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider value={{ draggedItem, columns, getTasksByColumnId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}
