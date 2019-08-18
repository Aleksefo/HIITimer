import React, { useEffect } from 'react'
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native'
import { useDispatch, useGlobalState } from '../state/AppContext'
import {
  Counter,
  SessionConfigurator,
  SessionActivated,
  TotalTime,
  AnimatedBackground,
  SoundControls,
} from '../components'
import {
  checkFirstLaunch,
  // removeValue
} from '../services/storageService'
import KeepAwake from 'react-native-keep-awake'
import Theme from '../values/Theme'
import RNBootSplash from 'react-native-bootsplash'

const DashboardScreen = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  state.counterStatus === 'stopped'
    ? KeepAwake.deactivate()
    : KeepAwake.activate()

  useEffect(() => {
    // removeValue()
    checkFirstLaunch({ dispatch }).then()
  }, [])

  useEffect(() => {
    if (state.stateLoaded) {
      RNBootSplash.hide({ duration: 500 })
    }
  }, [state.stateLoaded])

  const changeVolumeState = () => {
    dispatch({
      type: 'changeVolumeState',
    })
  }

  return (
    <SafeAreaView style={s.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[s.container]}
        bounces={false}
      >
        <SoundControls
          onPress={changeVolumeState}
          volumeState={state.volumeState}
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={s.main}
          contentContainerStyle={s.main}
        >
          {state.counterStatus === 'stopped' ? (
            <SessionConfigurator />
          ) : (
            <SessionActivated />
          )}
        </KeyboardAvoidingView>
        <TotalTime />
        <Counter style={s.counter} />
        <AnimatedBackground />
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(DashboardScreen)
// If you need more control (e.g. you’re using three props in a component but you
// only want to re-render if two of them changed), you can also pass a second
// argument to React.memo(): An evaluation function that receives the old and new
// props as arguments and should return true if you want to re-render the component.

const s = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: Theme.sizeXL,
    paddingTop: Theme.sizeXL,
  },
  main: {
    flex: 4,
  },
  counter: {
    flex: 1,
  },
})
