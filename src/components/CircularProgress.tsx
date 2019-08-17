import React from 'react'
import { StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Theme from '../values/Theme'
import { AnimatedText, DSText } from './index'
import { useGlobalState } from '../state/AppContext'
import str from '../values/strings'

const CircularProgress = ({ timeSession, timeSessionLeft }) => {
  const state = useGlobalState()
  const fillMultiplier = 100 / timeSession
  const fill = 100 - fillMultiplier * timeSessionLeft

  let minutes: number | string
  let seconds: number | string
  minutes = Math.floor(timeSessionLeft / 60)
  if (minutes < 10) minutes = '0' + minutes
  seconds = timeSessionLeft % 60
  if (seconds < 10) seconds = '0' + seconds
  return (
    <AnimatedCircularProgress
      size={Theme.w * 0.75}
      width={Theme.sizeM}
      backgroundWidth={Theme.sizeM - 4}
      fill={fill}
      prefill={100}
      tintColor={Theme.colors.primaryColor}
      backgroundColor={Theme.colors.grey3}
      rotation={210}
      arcSweepAngle={300}
      duration={500}
    >
      {() => (
        <>
          {
            <DSText>
              {state.counterStatus === 'paused' ? str.paused : ' '}
            </DSText>
          }
          <AnimatedText trigger={timeSessionLeft <= 5 && timeSessionLeft}>
            <DSText style={s.time}>{`${minutes}:${seconds}`}</DSText>
          </AnimatedText>
        </>
      )}
    </AnimatedCircularProgress>
  )
}

const s = StyleSheet.create({
  time: { ...Theme.fonts.h1 },
})

export default CircularProgress
