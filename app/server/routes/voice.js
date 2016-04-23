const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')
const request = require('request-promise')

router.post('/', (req, res) => {
	const voice = req.body.voice
	const fuzzy = matchingFuzzy(voice)
	const strict = matchingStrict(voice)

	Promise.all([fuzzy, strict])
	.then(results => {
		const signals = results.reduce((prev, current) => {
			const signals = commandSignals(current)
			return signals.concat(prev)
		}, [])
		res.json(signals)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

const matchingFuzzy = voice => {
	const options = {
		method: 'GET',
		uri: 'http://localhost:6034/api/command', //TODO
		body: { voice },
		json: true
	}
	return request(options)
}

const matchingStrict = voice => {
	return commandDb.list('strict')
	.then(result => {
		return result.filter(el => {
			return voice.includes(el.command)
		})
	})
}

const commandSignals = commands => {
	const signals = commands
	.map(item => item.signals)
	.filter(item => item)
	.reduce((prev, current) => {
		return prev.concat(current)
	}, [])

	return signals
}

module.exports = router
