import React from 'react'
import { View, Text, Button } from 'react-native'
import { useStateValue } from '../state/AppContext'

const Test = () => {
  const [state, dispatch] = useStateValue()

  return (
    <View>
      <Text>Test:</Text>
      <Text>{state.count}</Text>
      <Button title={'increment'} onPress={() => dispatch({ type: 'increment', payload: { count: 1 } })}>
        +
      </Button>
    </View>
  )
}

export default Test
