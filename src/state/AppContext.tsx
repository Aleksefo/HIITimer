import React, {useReducer, useContext, createContext, Dispatch} from 'react'
import {mergeAppState} from '../services/storageService'
import themes from '../values/themes'
import {Platform, StatusBar} from 'react-native'

type State = {
  counterStatus: 'stopped' | 'started' | 'paused'
  setsTime: number[]
  totalRounds: number
  currentRound: number
  totalSets: number
  currentSet: number
  timeSession: number
  timeSessionLeft: number
  totalTimeLeft: number
  stateLoaded: boolean
  volumeState: 'on' | 'vibro' | 'off'
  themeState: 'light' | 'dark'
  theme: {
    primary
    accent
    error
    success
    text
    grey1
    grey2
    grey3
    grey4
    background
    backgroundSet1
    backgroundSet2
    backgroundSet3
    backgroundSet4
    backgroundPaused
    white
  }
}
type Action =
  | {
      type: 'resetData'
    }
  | {
      type: 'increaseCurrentSet'
    }
  | {
      type: 'resetCurrentSet'
    }
  | {
      type: 'increaseCurrentRound'
    }
  | {
      type: 'setTimeSession'
      payload: {
        time: number
      }
    }
  | {
      type: 'setTimeSessionLeft'
      payload: {
        timeSessionLeft: number
      }
    }
  | {
      type: 'changeStatus'
      payload: {
        command: 'start' | 'pause' | 'resume' | 'stop'
      }
    }
  | {
      type: 'calculateTotalTime'
    }
  | {
      type: 'updateTotalTime'
    }
  | {
      type: 'changeSetAmount'
      payload: {
        amount: number
      }
    }
  | {
      type: 'changeSetDuration'
      payload: {
        setNumber: number
        duration: number
      }
    }
  | {
      type: 'changeRoundsAmount'
      payload: {
        amount: number
      }
    }
  | {
      type: 'loadStoredState'
      payload: {
        state: State
      }
    }
  | {
      type: 'changeVolumeState'
    }
  | {
      type: 'changeThemeState'
    }

export const initialState: State = {
  counterStatus: 'stopped',
  setsTime: [60, 60, 60, 60],
  totalRounds: 2,
  currentRound: 1,
  totalSets: 3,
  currentSet: 1,
  timeSession: 60,
  timeSessionLeft: 60,
  totalTimeLeft: 360,
  stateLoaded: false,
  volumeState: 'on',
  themeState: 'light',
  theme: themes.light,
}

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'resetData':
      return {
        ...state,
        currentSet: 1,
        currentRound: 1,
        timeSession: state.setsTime[0],
        timeSessionLeft: state.setsTime[0],
      }
    case 'increaseCurrentSet':
      return {
        ...state,
        timeSession: state.setsTime[state.currentSet], //NOTE it's +1 in array
        timeSessionLeft: state.setsTime[state.currentSet],
        currentSet: state.currentSet + 1,
      }
    case 'resetCurrentSet':
      return {
        ...state,
        currentSet: 1,
        timeSession: state.setsTime[0],
        timeSessionLeft: state.setsTime[0],
      }
    case 'increaseCurrentRound':
      return {
        ...state,
        currentRound: state.currentRound + 1,
      }
    case 'setTimeSessionLeft':
      return {
        ...state,
        timeSessionLeft: action.payload.timeSessionLeft,
      }
    case 'changeStatus':
      switch (action.payload.command) {
        case 'start':
          return {
            ...state,
            counterStatus: 'started' as 'started',
            timeSession: state.setsTime[0],
            timeSessionLeft: state.setsTime[0],
          }
        case 'pause':
          return {...state, counterStatus: 'paused' as State['counterStatus']}
        case 'resume':
          return {
            ...state,
            counterStatus: 'started' as State['counterStatus'],
          }
        case 'stop':
          return {
            ...state,
            counterStatus: 'stopped' as State['counterStatus'],
            timeSessionLeft: state.timeSession,
          }
        default:
          throw new Error('Undefined action ' + action)
      }
    case 'calculateTotalTime':
      let totalTime = state.setsTime[0] + state.setsTime[1]
      if (state.totalSets > 2) {
        totalTime += state.setsTime[2]
      }
      if (state.totalSets > 3) {
        totalTime += state.setsTime[3]
      }
      totalTime *= state.totalRounds
      return {
        ...state,
        totalTimeLeft: totalTime,
      }
    case 'updateTotalTime':
      return {
        ...state,
        totalTimeLeft: state.totalTimeLeft - 1,
      }
    case 'changeSetAmount':
      let totalSets = action.payload.amount
      mergeAppState({totalSets})
      return {
        ...state,
        totalSets,
      }
    case 'changeSetDuration':
      let setsTime = [...state.setsTime]
      setsTime.splice(action.payload.setNumber, 1, action.payload.duration)
      mergeAppState({setsTime})
      return {
        ...state,
        setsTime: setsTime,
        timeSession: setsTime[0],
        timeSessionLeft: setsTime[0],
      }
    case 'changeRoundsAmount':
      let totalRounds = action.payload.amount
      mergeAppState({totalRounds})
      return {
        ...state,
        totalRounds,
      }
    case 'loadStoredState':
      return {
        ...state,
        ...action.payload.state,
        stateLoaded: true,
      }
    case 'changeVolumeState':
      let volumeState
      if (state.volumeState === 'on') volumeState = 'vibro'
      else if (state.volumeState === 'vibro') volumeState = 'off'
      else volumeState = 'on'
      mergeAppState({volumeState})
      return {
        ...state,
        volumeState,
      }
    case 'changeThemeState':
      let themeState
      let theme
      Platform.OS === 'ios' &&
        StatusBar.setBarStyle(state.themeState + '-content', true)
      if (state.themeState === 'light') {
        themeState = 'dark'
        theme = themes.dark
      } else {
        themeState = 'light'
        theme = themes.light
      }
      mergeAppState({themeState, theme})
      return {
        ...state,
        themeState,
        theme,
      }
    default:
      throw new Error('Undefined action ' + action)
  }
}

const StateCtx = createContext(initialState)
const DispatchCtx = createContext((() => 0) as Dispatch<Action>)

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <DispatchCtx.Provider value={dispatch}>
      <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
    </DispatchCtx.Provider>
  )
}
export const useDispatch = () => useContext(DispatchCtx)
export const useGlobalState = () => {
  //todo middleware with total time calc
  return useContext(StateCtx)
}
