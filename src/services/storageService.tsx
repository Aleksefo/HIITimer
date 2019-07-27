import AsyncStorage from '@react-native-community/async-storage'
import { initialState } from '../state/AppContext'
const appStateKey = 'appStateKey'

export const checkFirstLaunch = async ({ dispatch }) => {
  // const dispatch = useDispatch()
  try {
    const savedState = await AsyncStorage.getItem(appStateKey)
    if (savedState === null) {
      console.log('storageService, checkFirstLaunch first')
      await AsyncStorage.setItem(appStateKey, JSON.stringify(initialState))
    } else {
      console.log('storageService, checkFirstLaunch not first')
      await dispatch({
        type: 'loadStoredState',
        payload: { state: JSON.parse(savedState) },
      })
    }
  } catch (error) {
    console.log('retrieveDate error ' + error)
  }
}

export const mergeAppState = async value => {
  try {
    await AsyncStorage.mergeItem(appStateKey, JSON.stringify(value))

    const state = await AsyncStorage.getItem(appStateKey)
    console.log('storageService, mergeAppState', state)
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
  console.log(keys)
}
export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem(appStateKey)
  } catch (e) {
    // remove error
  }
  console.log('storageService, removeValue')
}
