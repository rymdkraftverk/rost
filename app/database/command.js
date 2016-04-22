const database = require('./')
const db = database.db

const upsert = command => {
	return new Promise((resolve, reject) => {
		db.insert(command, (err, body) => {
			if(err) return reject(err)
			return resolve(body)
		})
	})
}

module.exports = {
	upsert
}
