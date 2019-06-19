import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist'
export default class CounterStore {
  //todo get locally stored values
  @observable counterStatus = 'stopped'
  // stopped, started, paused, done
  @persist
  @observable
  set1Time = 4
  @persist
  @observable
  set2Time = 7
  @persist
  @observable
  set3Time = 5
  @persist
  @observable
  set4Time = 5
  @persist
  @observable
  totalRounds = 2
  @observable currentRound = 1
  @persist
  @observable
  totalSets = 2
  @observable currentSet = 1
  @persist
  @observable
  timeSession = this.set1Time
  @persist
  @observable
  timeSessionLeft = this.timeSession
  @observable totalTimeLeft
  //todo maybe convert some observables to computed?

  @action
  resetData() {
    this.currentSet = 1
    this.currentRound = 1
    this.timeSession = this.set1Time
    this.timeSessionLeft = this.timeSession
  }
  @action
  changeStatus(command) {
    switch (command) {
      case 'start':
        this.counterStatus = 'started'
        this.timeSessionLeft = this.set1Time
        this.timeSession = this.set1Time
        break
      case 'pause':
        this.counterStatus = 'paused'
        break
      case 'resume':
        this.counterStatus = 'started'
        // this.timeSessionLeft = this.set1Time
        // this.timeSession = this.set1Time
        break
      case 'stop':
        this.timeSessionLeft = this.timeSession
        this.counterStatus = 'stopped'
        break
    }
  }
  @computed
  get totalTime(): number {
    let totalTime = this.set1Time + this.set2Time
    if (this.totalSets > 2) {
      totalTime += this.set3Time
    }
    if (this.totalSets > 3) {
      totalTime += this.set4Time
    }
    totalTime *= this.totalRounds
    return totalTime
  }
}
