import AsyncStorage from '@react-native-community/async-storage'
import {initialState} from '../state/AppContext'
const appStateKey = 'appStateKey'

export const checkFirstLaunch = async ({dispatch}) => {
  // const dispatch = useDispatch()
  try {
    const savedState = await AsyncStorage.getItem(appStateKey)
    if (savedState === null) {
      dispatch({
        type: 'loadStoredState',
        payload: {state: {}},
      })
      await AsyncStorage.setItem(appStateKey, JSON.stringify(initialState))
    } else {
      dispatch({
        type: 'loadStoredState',
        payload: {state: JSON.parse(savedState)},
      })
      dispatch({
        type: 'calculateTotalTime',
      })
      dispatch({
        type: 'resetData',
      })
    }
  } catch (error) {
    if (__DEV__) console.tron.log('retrieveData error ' + error)
  }
}

export const mergeAppState = async value => {
  try {
    await AsyncStorage.mergeItem(appStateKey, JSON.stringify(value))

    const state = await AsyncStorage.getItem(appStateKey)
    if (__DEV__)
      console.tron.log('storageService, mergeAppState', JSON.parse(state))
  } catch (e) {
    // read key error
  }
}

export const getAllKeys = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch (e) {
    // read key error
  }
  if (__DEV__) console.tron.log(keys)
}
export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem(appStateKey)
  } catch (e) {
    // remove error
  }
  if (__DEV__) console.tron.log('storageService, removeValue')
}
