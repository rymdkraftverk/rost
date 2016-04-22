const db = require('./').db
const TYPE = 'device'

const all = () => {
	return new Promise((resolve, reject) => {
		db.view('default', 'all_devices', (err, body) => {
			if(err) return reject(err)
			return resolve(body.rows)
		})
	})
}

const upsert = item => {
	item.type = TYPE
	item._id = item.name
	return new Promise((resolve, reject) => {
		db.insert(item, (err, body) => {
			if(err) return reject(err)
			return resolve(body)
		})
	})
}

module.exports = {
	upsert,
	all
}
