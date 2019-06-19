// import React, {Component} from 'react'
import CounterStore from './CounterStore'
import { AsyncStorage } from 'react-native'
import { create } from 'mobx-persist'

const hydrate = create({ storage: AsyncStorage })
const stores = {
  counterStore: new CounterStore(),
  // place for other stores...
}
hydrate('counterStore', stores.counterStore)

export default stores
