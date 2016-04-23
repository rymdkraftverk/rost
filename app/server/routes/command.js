const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')
const request = require('request-promise')
const config = require('../../config')

router.post('/', (req, res) => {
	const command = req.body
	getSignature(command)
	.then(signature => {
		command.signature = signature
		return commandDb.upsert(command)
	})
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

router.delete('/:id/:signalId', (req, res) => {
router.delete('/:id/:rev', (req, res) => {
	const id = req.params.id
	const rev = req.params.rev
	commandDb.del(id, rev)
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

	const commandId = req.params.id
	const signalId = req.params.signalId
	commandDb.removeSignal(commandId, signalId)
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

router.put('/:id', (req, res) => {
	const id = req.params.id
	const signals = req.body
	commandDb.addSignals(id, signals)
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

router.get('/', (req, res) => {
	commandDb.all()
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

const getSignature = command => {
	const options = {
		method: 'POST',
		uri: config.grasp.host + '/api/format_command',
		body: { text: command.command },
		json: true
	}
	return request(options)
}

module.exports = router
