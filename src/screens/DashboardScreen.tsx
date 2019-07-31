import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import { useDispatch, useGlobalState } from '../state/AppContext'
import {
  Counter,
  SessionConfigurator,
  SessionActivated,
  TotalTime,
} from '../components'
import { checkFirstLaunch, removeValue } from '../services/storageService'
import KeepAwake from 'react-native-keep-awake'

const DashboardScreen = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  state.counterStatus === 'stopped'
    ? KeepAwake.deactivate()
    : KeepAwake.activate()
  // const [text, setText] = useState()
  // const [userData, setUserData] = useState({ name: 'Max', age: 28 })

  useEffect(() => {
    console.log('DashboardScreen, useEffect')
    // removeValue()
    checkFirstLaunch({ dispatch }).then()
    return () => {
      // Cleanup work goes in here
      // If you return a function, that function will be executed right before
      // the function passed to useEffect() runs. It also will be executed before
      // the component is removed from the DOM.
      console.log('componentWillUnmount: ')
    }
  }, [])
  //empty array to run only once DidMount
  //value for DidUpdate

  console.log('DashboardScreen: rendered')

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.main}
        contentContainerStyle={styles.main}
      >
        {state.counterStatus === 'stopped' ? (
          <SessionConfigurator />
        ) : (
          <SessionActivated />
        )}
      </KeyboardAvoidingView>
      <TotalTime />
      <Counter style={styles.counter} />
    </ScrollView>
  )
}

export default React.memo(DashboardScreen)
// If you need more control (e.g. you’re using three props in a component but you
// only want to re-render if two of them changed), you can also pass a second
// argument to React.memo(): An evaluation function that receives the old and new
// props as arguments and should return true if you want to re-render the component.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    flex: 1,
  },
  main: {
    flex: 4,
    justifyContent: 'center',
  },
})
