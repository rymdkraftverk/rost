const db = require('./').db
const TYPE = 'command'

const all = () => {
	return new Promise((resolve, reject) => {
		db.view('default', 'all_commands', (err, body) => {
			if(err) return reject(err)
			return resolve(body.rows)
		})
	})
}

const upsert = command => {
	command.type = TYPE
	return new Promise((resolve, reject) => {
		db.insert(command, (err, body) => {
			if(err) return reject(err)
			return resolve(body)
		})
	})
}

module.exports = {
	upsert,
	all
}
