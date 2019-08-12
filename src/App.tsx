import React, { useEffect } from 'react'
import { Provider } from './state/AppContext'
import DashboardScreen from './screens/DashboardScreen'
import RNBootSplash from 'react-native-bootsplash'

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 2500 })
  }, [])

  return (
    <Provider>
      <DashboardScreen />
    </Provider>
  )
}
//todo test useCallback for optimization https://buttercms.com/blog/learn-react-hooks-by-writing-your-first-hook
//todo test memo/useMemo
export default React.memo(App)
// If you need more control (e.g. you’re using three props in a component but you
// only want to re-render if two of them changed), you can also pass a second
// argument to React.memo(): An evaluation function that receives the old and new
// props as arguments and should return true if you want to re-render the component.
