const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')
const util = require('../../util')

router.post('/', (req, res) => {
	const voice = req.body.voice

	commandDb.list('strict')
	.then(result => {
		const commands = util.matchingCommands(voice, result)
		const signals = commands
		.map(item => item.signals)
		.reduce((prev, current) => {
			return prev.concat(current)
		}, [])

		res.json(signals)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

module.exports = router
