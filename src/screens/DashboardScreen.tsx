import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useGlobalState, useDispatch } from '../state/AppContext'
import { Counter } from '../components'
import CounterF from '../components/CounterF'
// import Counter from '../components/Counter'

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
  const onComplete = () => {
    console.log('onComplete: ')
    console.log('')
    console.log('onComplete')
    console.log('DashboardScreen, onComplete')
  }
  console.log('DashboardScreen: rendered')
  const dispatch = useDispatch()
  const state = useGlobalState()

  return (
    <View style={styles.container}>
      <Text>{state.counterStatus}</Text>
      <Text>{state.set1Time}</Text>
      <Text>{state.set2Time}</Text>
      <Text>{state.set3Time}</Text>
      <Text>{state.set4Time}</Text>
      <Text>{state.totalRounds}</Text>
      <Text>{state.currentRound}</Text>
      <Text>{state.totalSets}</Text>
      <Text>{state.currentSet}</Text>
      <Text>{state.timeSession}</Text>
      <Text>timeSessionLeft {state.timeSessionLeft}</Text>
      <Text>{state.totalTimeLeft}</Text>
      {/*<Button*/}
      {/*title={'increment'}*/}
      {/*onPress={() => dispatch({ type: 'resetData' })}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*title={'decrement'}*/}
      {/*onPress={() =>*/}
      {/*dispatch({ type: 'changeStatus', payload: { command: 'start' } })*/}
      {/*}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*title={'start'}*/}
      {/*onPress={() =>*/}
      {/*(timer = Counter.setInterval(*/}
      {/*() => console.log('DashboardScreen t, '),*/}
      {/*1000,*/}
      {/*))*/}
      {/*}*/}
      {/*/>*/}
      {/*<Button title={'stop'} onPress={() => Counter.clearInterval(timer)} />*/}
      {/*<Button title={'FFF'} onPress={() => CounterF.start()} />*/}

      {/*<Counter*/}
      {/*duration={state.timeSessionLeft * 1000}*/}
      {/*onComplete={onComplete}*/}
      {/*// onRef={ref => ('counter' = ref)}*/}
      {/*onTick={timeRemaining => {*/}
      {/*// timeSessionLeft = Math.round(timeRemaining / 1000)*/}
      {/*// totalTimeLeft--*/}
      {/*console.log('timeRemaining: ', timeRemaining)*/}
      {/*}}*/}
      {/*/>*/}
      <Counter duration={5} />
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
