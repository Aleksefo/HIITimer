import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Button, View } from 'react-native'
import str from '../values/strings'
import ControlsButton from './ControlsButton'

const CounterControls = inject('counterStore')(
  observer(props => {
    let startBtn = null
    let pauseBtn = null
    let resumeBtn = null
    let abortBtn = null
    // let breakBtn = null
    //todo maybe delete 'done' mode
    if (props.counterStore.counterStatus === 'stopped' || props.counterStore.counterStatus === 'done') {
      startBtn = (
        <ControlsButton
          onPress={() => {
            props.startCount()
            props.counterStore.changeStatus('start')
            props.counterStore.totalTimeLeft = props.counterStore.totalTime
            props.counterStore.timeSessionLeft = props.counterStore.set1Time
            props.counterStore.timeSession = props.counterStore.set1Time
          }}
          iconName={'ios-play-outline'}
        >
          {str.start}
        </ControlsButton>
      )
    }

    if (props.counterStore.counterStatus === 'started') {
      pauseBtn = (
        <ControlsButton
          onPress={() => {
            props.pauseCount()
            props.counterStore.changeStatus('pause')
          }}
          iconName={'ios-pause-outline'}
        >
          {str.pause}
        </ControlsButton>
      )
    }
    if (props.counterStore.counterStatus === 'paused') {
      resumeBtn = (
        <ControlsButton
          onPress={() => {
            props.startCount()
            props.counterStore.changeStatus('resume')
          }}
          iconName={'ios-play-outline'}
        >
          {str.resume}
        </ControlsButton>
      )
    }
    if (props.counterStore.counterStatus === 'paused' || props.counterStore.counterStatus === 'started') {
      abortBtn = (
        <ControlsButton
          onPress={() => {
            props.stopCount()
            props.counterStore.resetData()
            props.counterStore.changeStatus('stop')
          }}
          iconName={'ios-close-circle-outline'}
        >
          {str.abort}
        </ControlsButton>
      )
    }
    // if (props.counterStore.counterStatus === 'done') {
    // 	breakBtn = <Button title={'Break'} />
    // }
    // if (props.pomoStore.pomoStatus == 'breaked') {
    // 	skipBtn = <Button title={'Skip'} />
    // } else {
    // 	skipBtn = null
    // }

    return (
      <View>
        {startBtn}
        {pauseBtn}
        {resumeBtn}
        {abortBtn}
        {/*{breakBtn}*/}
        {/*{skipBtn}*/}
      </View>
    )
  }),
)
export default CounterControls
