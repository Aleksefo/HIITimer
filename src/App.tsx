/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @flow
 */

import React from 'react'
import Provider from './state/AppContext'
import TestScreen from './screens/TestScreen'

const App = () => {
  return (
    <Provider>
      <TestScreen />
    </Provider>
  )
}

export default React.memo(App)
// If you need more control (e.g. you’re using three props in a component but you
// only want to re-render if two of them changed), you can also pass a second
// argument to React.memo(): An evaluation function that receives the old and new
// props as arguments and should return true if you want to re-render the component.
