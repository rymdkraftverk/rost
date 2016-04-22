const express = require('express')
const router = express.Router()
const deviceDb = require('../../database/device')

router.post('/', (req, res) => {
	const device = req.body
	deviceDb.upsert(device)
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

router.get('/', (req, res) => {
	deviceDb.all()
	.then(result => {
		res.json(result)
	})
	.catch(err => {
		res.status(400).json(err)
	})
})

module.exports = router
