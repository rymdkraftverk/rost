const express = require('express')
const router = express.Router()
const commandDb = require('../../database/command')

router.post('/', (req, res) => {
	const command = req.body
	commandDb.upsert(command)
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

module.exports = router
