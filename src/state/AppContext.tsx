import React, { useReducer, useContext, createContext, Dispatch } from 'react'

type Action =
  | {
      type: 'increment'
      payload: {
        count: number
      }
    }
  | {
      type: 'decrement'
      payload: {
        count: number
      }
    }

export const initialState = {
  count: 3,
}

const appReducer = (state, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload.count }
    case 'decrement':
      return { count: state.count - action.payload.count }
    default:
      throw new Error('Undefined action ' + action)
  }
}

const StateCtx = createContext(initialState)
const DispatchCtx = createContext((() => 0) as Dispatch<Action>)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <DispatchCtx.Provider value={dispatch}>
      <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
    </DispatchCtx.Provider>
  )
}
export const useDispatch = () => useContext(DispatchCtx)
export const useGlobalState = () => useContext(StateCtx)
