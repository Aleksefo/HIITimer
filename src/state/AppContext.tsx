import React, { useReducer, useContext } from 'react'

export enum ActionType {
  Increment = 'increment',
  Decrement = 'decrement',
}

interface IState {
  count: number
}
interface IAction {
  type: ActionType
  payload: {
    count: number
  }
}

export const initialState: IState = {
  count: 3,
}

const appReducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + action.payload.count }
    case ActionType.Decrement:
      return { count: state.count - action.payload.count }
    default:
      throw new Error('Undefined action ' + action.type)
  }
}

const AppContext = React.createContext<{} | null>(initialState)

const Provider = ({ children }) => (
  <AppContext.Provider value={useReducer(appReducer, initialState)}>{children}</AppContext.Provider>
)
export default Provider

export const useStateValue = () => useContext(AppContext)
