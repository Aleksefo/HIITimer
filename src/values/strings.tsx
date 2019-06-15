import LocalizedStrings from 'react-native-localization'

const str = new LocalizedStrings({
	en: {
		// Controls
		start: 'Start',
		abort: 'Abort',
		pause: 'Pause',
		resume: 'Resume',
		// Configurator
		sets: 'Sets',
		set: 'Set',
		rounds: 'Rounds',
		timeTotal: 'Total time',
		// Timer
		round: 'Round',
		timeLeft: 'Time left',
	},
})

export default str
