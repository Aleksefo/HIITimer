import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useGlobalState, useDispatch } from '../state/AppContext'
import { Counter } from '../components'

const DashboardScreen = () => {
  // const [text, setText] = useState()
  // const [userData, setUserData] = useState({ name: 'Max', age: 28 })
  let timer

  useEffect(() => {
    console.log('DashboardScreen, useEffect')
    // timer = Counter.setInterval(() => console.log('DashboardScreen t, '), 1000)
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
  const dispatch = useDispatch()
  const state = useGlobalState()

  return (
    <View style={styles.container}>
      <Text>counterStatus {state.counterStatus}</Text>
      <Text>set1Time {state.set1Time}</Text>
      <Text>set2Time {state.set2Time}</Text>
      <Text>set3Time {state.set3Time}</Text>
      <Text>set4Time {state.set4Time}</Text>
      <Text>totalRounds {state.totalRounds}</Text>
      <Text>currentRound {state.currentRound}</Text>
      <Text>totalSets {state.totalSets}</Text>
      <Text>currentSet {state.currentSet}</Text>
      <Text>timeSession {state.timeSession}</Text>
      <Text>timeSessionLeft {state.timeSessionLeft}</Text>
      <Text>totalTimeLeft {state.totalTimeLeft}</Text>
      <Counter />
    </View>
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
})
