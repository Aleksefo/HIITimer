import React, {useEffect, useState} from 'react'
import {Animated, Easing} from 'react-native'

const AnimatedText = props => {
  const [animation] = useState(new Animated.Value(1))
  const animationStyles = {
    transform: [{scale: animation}],
  }

  useEffect(() => {
    if (!props.disabled) {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.bounce,
        }),
      ]).start()
    }
    return () => {}
  }, [props.trigger])

  return (
    <Animated.View style={[props.style, animationStyles]}>
      {props.children}
    </Animated.View>
  )
}

export default AnimatedText
