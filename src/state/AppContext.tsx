import React, { useReducer, useContext, createContext, Dispatch } from 'react'

type State = {
  counterStatus: 'stopped' | 'started' | 'paused' | 'done'
  set1Time: number
  set2Time: number
  set3Time: number
  set4Time: number
  totalRounds: number
  currentRound: number
  totalSets: number
  currentSet: number
  timeSession: number //this.set1Time
  timeSessionLeft: number //this.timeSession
  totalTimeLeft: number
}
type Action =
  | {
      type: 'resetData'
    }
  | {
      type: 'changeStatus'
      payload: {
        command: 'start' | 'pause' | 'resume' | 'stop'
      }
    }
//todo save values to storage
export const initialState: State = {
  counterStatus: 'stopped',
  set1Time: 4,
  set2Time: 7,
  set3Time: 5,
  set4Time: 5,
  totalRounds: 2,
  currentRound: 1,
  totalSets: 2,
  currentSet: 1,
  timeSession: 4, //this.set1Time
  timeSessionLeft: 4, //this.timeSession
  totalTimeLeft: 0,
}

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'resetData':
      return {
        ...state,
        currentSet: 1,
        currentRound: 1,
        timeSession: state.set1Time,
        timeSessionLeft: state.timeSession,
      }
    case 'changeStatus':
      switch (action.payload.command) {
        case 'start':
          return {
            ...state,
            counterStatus: 'started' as 'started',
            timeSessionLeft: state.set1Time,
            timeSession: state.set1Time,
          }
        case 'pause':
          return { ...state, counterStatus: 'paused' as State['counterStatus'] }
        case 'resume':
          return { ...state, counterStatus: 'started' as State['counterStatus'] }
        case 'stop':
          return { ...state, counterStatus: 'stopped' as State['counterStatus'], timeSessionLeft: state.timeSession }
      }
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
export const useGlobalState = () => {
  //middleware with total time calc
  return useContext(StateCtx)
}
