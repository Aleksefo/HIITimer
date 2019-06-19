import React from 'react'
import { observer, inject } from 'mobx-react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { styled } from '../values/theme'

const TimeInput = inject('counterStore')(
  observer(props => {
    // let timeInput = null
    // let timeDisplay = null
    // if (
    // 	props.counterStore.counterStatus === 'stopped' ||
    // 	props.counterStore.counterStatus === 'done'
    // ) {
    // 	timeInput = (
    // 		<TextInput
    // 			style={{height: 40}}
    // 			keyboardType={'numeric'}
    // 			placeholder={props.counterStore[props.type].toString()}
    // 			onChangeText={text => {
    // 				props.counterStore[props.type] = parseInt(text)
    // 			}}
    // 		/>
    // 	)
    // } else if (!props.hideOnStart) {
    // 	timeDisplay = <Text>{props.counterStore[props.type]}</Text>
    // }
    const { containerStyle } = styles
    return (
      <View style={containerStyle}>
        {/*{timeInput}*/}
        {/*{timeDisplay}*/}
        <TextInput
          style={styled.textTitleStyle}
          keyboardType={'numeric'}
          placeholder={props.counterStore[props.type].toString()}
          onChangeText={text => {
            props.counterStore[props.type] = parseInt(text)
          }}
        />
        <Text style={styled.textTitleStyle}>:</Text>
        <TextInput
          style={styled.textTitleStyle}
          keyboardType={'numeric'}
          placeholder={props.counterStore[props.type].toString()}
          onChangeText={text => {
            props.counterStore[props.type] = parseInt(text)
          }}
        />
      </View>
    )
  }),
)

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TimeInput
//todo customize inputs more https://facebook.github.io/react-native/docs/textinput.html#keyboardtype
