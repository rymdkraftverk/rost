const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')
const util = require('../../util')

router.post('/', (req, res) => {
	const voice = req.body.voice

	commandDb.list('strict')
	.then(result => {
		const matches = util.matches(voice, result)
		res.json(matches)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

module.exports = router
