import React from 'react'
import { View, Text, Button } from 'react-native'
import { useGlobalState, useDispatch } from '../state/AppContext'

const Test = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()
  return (
    <View>
      <Text>Test:</Text>
      {/*<Text>{state.count}</Text>*/}
      {/*<Button title={'increment'} onPress={() => dispatch({ type: 'increment', payload: { count: 1 } })}>*/}
      {/*+*/}
      {/*</Button>*/}
    </View>
  )
}

export default React.memo(Test)
