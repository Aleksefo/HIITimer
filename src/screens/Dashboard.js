import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Vibration, Button } from 'react-native'
import str from '../values/strings'
import Counter from '../components/Counter'
import CounterControls from '../components/CounterControls'
import TimeInput from '../components/TimeInput'
import SetAmountSelector from '../components/SetAmountSelector'
import SetTimeSelector from '../components/SetTimeSelector'
import RoundAmountSelector from '../components/RoundAmountSelector'
import TotalTime from '../components/TotalTime'
import SessionConfigurator from '../components/SessionConfigurator'
import SessionActivated from '../components/SessionActivated'
import {useDispatch, useGlobalState} from '../state/AppContext'

const DashboardScreen =() =>{

  const onComplete=() =>{
    console.log('onComplete: ')
    // if (
    //   this.props.counterStore.currentRound === this.props.counterStore.totalRounds &&
    //   this.props.counterStore.currentSet === this.props.counterStore.totalSets
    // ) {
    //   this.props.counterStore.changeStatus('stop')
    //   this.props.counterStore.resetData()
    // } else {
    //   if (this.props.counterStore.currentSet === this.props.counterStore.totalSets) {
    //     this.props.counterStore.currentSet = 1
    //     this.props.counterStore.currentRound++
    //   } else {
    //     this.props.counterStore.currentSet++
    //   }
    //   switch (this.props.counterStore.currentSet) {
    //     case 1:
    //       this.props.counterStore.timeSession = this.props.counterStore.set1Time
    //       this.props.counterStore.timeSessionLeft = this.props.counterStore.set1Time
    //       break
    //     case 2:
    //       this.props.counterStore.timeSession = this.props.counterStore.set2Time
    //       this.props.counterStore.timeSessionLeft = this.props.counterStore.set2Time
    //       break
    //     case 3:
    //       this.props.counterStore.timeSession = this.props.counterStore.set3Time
    //       this.props.counterStore.timeSessionLeft = this.props.counterStore.set3Time
    //       break
    //     case 4:
    //       this.props.counterStore.timeSession = this.props.counterStore.set4Time
    //       this.props.counterStore.timeSessionLeft = this.props.counterStore.set4Time
    //       break
    //   }
    //   this.startCount()
    // }
  }
  startCount = () => {
    this.counter.startCount()
  }
  stopCount = () => {
    this.counter.stopCount()
  }
  pauseCount = () => {
    this.counter.pauseCount()
  }
  const dispatch = useDispatch()
    const {
      timeSessionLeft,
      counterStatus,
      totalTimeLeft,
    } = useGlobalState()
    console.log('Dashboard render: ')
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {counterStatus === 'stopped' ? <SessionConfigurator /> : <SessionActivated />}
          <TotalTime />
          <Counter
            duration={timeSessionLeft * 1000}
            onComplete={this.onComplete}
            onRef={ref => (this.counter = ref)}
            onTick={timeRemaining => {
              // timeSessionLeft = Math.round(timeRemaining / 1000)
              // totalTimeLeft--
              console.log('timeRemaining: ',timeRemaining)
            }}
          />
        </View>
        <CounterControls startCount={this.startCount} stopCount={this.stopCount} pauseCount={this.pauseCount} />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
// 	styleTop: {},
// })

export default DashboardScreen
