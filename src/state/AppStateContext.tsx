import { createContext, useContext, Dispatch, FC } from "react"
import { useImmerReducer } from "use-immer";

import {
  appStateReducer,
  AppState,
  List,
  Task
} from "./appStateReducer"

import { Action } from './actions'

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "0", text: "Task 1 To Do" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "0", text: "Task 1 In Progress" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "0", text: "Task 1 Done" }]
    }
  ]
}

type AppStateContextProps = {
  lists: List[],
  getTasksByListId(id: string): Task[],
  dispatch: Dispatch<Action>,
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const useAppState = () => {
  return useContext(AppStateContext)
}

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { lists } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}
