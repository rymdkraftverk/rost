const express = require('express')
const router = express.Router()
const db = require('../../database')

router.post('/', (req, res) => {
	const signal = req.body
	db.signal.upsert(signal)
	.then(res.json)
	.catch(err => {
		res.status(400).json(err)
	})
})

module.exports = router
