import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import Theme from '../values/Theme'
import { useGlobalState } from '../state/AppContext'

const AnimatedBackground = props => {
  const state = useGlobalState()
  const [animation] = useState(new Animated.Value(1))
  const [backgroundColor, setBackgroundColor] = useState(Theme.colors.white)
  const [rippleColor, setRippleColor] = useState(Theme.colors.white)
  const animationStyles = {
    backgroundColor: rippleColor,
    transform: [{ scale: animation }],
  }
  const changeBackgroundStyle = () => {
    let backgroundColor
    if (state.counterStatus === 'stopped') backgroundColor = Theme.colors.white
    else if (state.counterStatus === 'paused') backgroundColor = '#e6e6e5'
    else if (state.counterStatus === 'started') {
      if (state.currentSet === 1) backgroundColor = '#d8e7e2'
      else if (state.currentSet === 2) backgroundColor = '#f9eed8'
      else if (state.currentSet === 3) backgroundColor = '#f5d5e5'
      else if (state.currentSet === 4) backgroundColor = '#d6e4f7'
    }
    return backgroundColor
  }

  useEffect(() => {
    if (!props.disabled) {
      setRippleColor(changeBackgroundStyle())
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1,
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
  }, [state.counterStatus, state.currentSet])

  return (
    <View style={[s.container, { backgroundColor }]}>
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
