const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')

router.post('/', (req, res) => {
	const voice = req.body.voice
	matchingSignals(voice)
	.then(signals => {
		res.json(signals)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

const matchingSignals = voice => {
	return commandDb.list('strict')
	.then(result => {
		const commands = matchingCommands(voice, result)
		const signals = commands
		.map(item => item.signals)
		.reduce((prev, current) => {
			return prev.concat(current)
		}, [])

		return signals
	})
}

const matchingCommands = (string, list) => {
	return list.filter(el => {
		return string.includes(el.command)
	})
}

module.exports = router
