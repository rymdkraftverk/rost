const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')
const request = require('request-promise')
const iotf = require('../../iotf')
const config = require('../../config')

router.post('/', (req, res) => {
	const voice = req.body.voice
	const fuzzyMode = req.body.fuzzy
	if(fuzzyMode){
		matchingFuzzy(voice)
		.then(command => {
			if(command){
				const signals = commandSignals([command])
				iotf.publish(signals)
				return res.json(signals)
			}
			return res.json({msg: 'no match'})
		})
		.catch(err => {
			return res.status(400).json(err)
		})
	}
	else {
		matchingStrict(voice)
		.then(result => {
			const signals = commandSignals(result)
			iotf.publish(signals)
			res.json(signals)
		})
		.catch(err => {
			return res.status(400).json(err)
		})
	}
})

const matchingFuzzyMock = () => {
	return Promise.resolve([])
}

// not integrated
// wating for axel
const matchingFuzzy = voice => {
	return commandDb.list()
	.then(result => {
		const commands = result
		.filter(item => item.signature && item.mode !== 'strict')

		const body = {
			commands,
			text: voice
		}
		console.log(body)

		const options = {
			method: 'POST',
			uri: config.grasp.host + '/api/match_commands',
			body,
			json: true
		}
		return request(options)
	})
}

const matchingStrict = voice => {
	return commandDb.list('strict')
	.then(result => {
		return result.filter(el => {
			return voice.toLowerCase().includes(el.command.toLowerCase())
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
	.map(item => {
		return {
			id: item.id,
			device: item.device
		}
	})

	return signals
}

module.exports = router
