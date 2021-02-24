import React, {useEffect} from 'react'
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  StatusBar,
  Text,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native'
import {useDispatch, useGlobalState} from '../state/AppContext'
import {
  Counter,
  SessionConfigurator,
  SessionActivated,
  TotalTime,
  AnimatedBackground,
  SettingControls,
} from '../components'
import {
  checkFirstLaunch,
  // removeValue
} from '../services/storageService'
import KeepAwake from 'react-native-keep-awake'
import Theme from '../values/Theme'
import RNBootSplash from 'react-native-bootsplash'
import themes from '../values/themes'

const DashboardScreen = () => {
  const dispatch = useDispatch()
  const state = useGlobalState()

  state.counterStatus === 'stopped'
    ? KeepAwake.deactivate()
    : KeepAwake.activate()

  useEffect(() => {
    // removeValue()
    checkFirstLaunch({dispatch}).then()
  }, [])

  useEffect(() => {
    if (state.stateLoaded) {
      RNBootSplash.hide({duration: 500})
      if (state.themeState === 'light' && Platform.OS === 'ios') {
        StatusBar.setBarStyle('dark-content', true)
      } else if (Platform.OS === 'ios') {
        StatusBar.setBarStyle('light-content', true)
      }
    }
  }, [state.stateLoaded])

  const changeVolumeState = () => {
    dispatch({
      type: 'changeVolumeState',
    })
  }
  const iconName = () => {
    if (state.volumeState === 'on') return 'volume-up'
    else if (state.volumeState === 'vibro') return 'vibration'
    else return 'volume-off'
  }
  const changeThemeState = () => {
    dispatch({
      type: 'changeThemeState',
    })
  }
  return (
    <SafeAreaView style={s.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[s.container]}
        bounces={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SettingControls onPress={changeVolumeState} icon={iconName()} />
          <SettingControls onPress={changeThemeState} icon={'brightness-4'} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={s.main}>
          {state.counterStatus === 'stopped' ? (
            <SessionConfigurator />
          ) : (
            <SessionActivated />
          )}
        </KeyboardAvoidingView>
        <TotalTime />
        <Counter style={s.counter} />
        <AnimatedBackground />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.aleksefo.com/privacy_policy_hiit.html')
          }
          hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}
          style={{
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: state.theme.primary}}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {Platform.OS === 'ios' && <AnimatedBackground />}
    </SafeAreaView>
  )
}

export default React.memo(DashboardScreen)
// If you need more control (e.g. you’re using three props in a component but you
// only want to re-render if two of them changed), you can also pass a second
// argument to React.memo(): An evaluation function that receives the old and new
// props as arguments and should return true if you want to re-render the component.

const s = StyleSheet.create({
  safeArea: {flex: 1},
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
