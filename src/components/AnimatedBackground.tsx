import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Animated} from 'react-native'
import {useGlobalState} from '../state/AppContext'

const AnimatedBackground = props => {
  const state = useGlobalState()
  const [animation] = useState(new Animated.Value(1))
  const [backgroundColor, setBackgroundColor] = useState(state.theme.background)
  const [rippleColor, setRippleColor] = useState(state.theme.background)
  const animationStyles = {
    backgroundColor: rippleColor,
    transform: [{scale: animation}],
  }
  const changeBackgroundStyle = () => {
    let backgroundColor
    if (state.counterStatus === 'stopped')
      backgroundColor = state.theme.background
    else if (state.counterStatus === 'paused')
      backgroundColor = state.theme.backgroundPaused
    else if (state.counterStatus === 'started') {
      if (state.currentSet === 1) backgroundColor = state.theme.backgroundSet1
      else if (state.currentSet === 2)
        backgroundColor = state.theme.backgroundSet2
      else if (state.currentSet === 3)
        backgroundColor = state.theme.backgroundSet3
      else if (state.currentSet === 4)
        backgroundColor = state.theme.backgroundSet4
    }
    return backgroundColor
  }

  useEffect(() => {
    if (!props.disabled) {
      setRippleColor(changeBackgroundStyle())
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 25,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setBackgroundColor(changeBackgroundStyle())
      })
    }
  }, [state.counterStatus, state.currentSet, state.theme.background])

  return (
    <View style={[s.container, {backgroundColor}]}>
      <Animated.View style={[props.style, s.ripple, animationStyles]} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  ripple: {
    borderRadius: 32,
    height: 32,
    width: 32,
  },
})

export default AnimatedBackground
