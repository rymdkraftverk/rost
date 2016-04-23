const db = require('./').db
const TYPE = 'command'

const addSignals = (commandId, signals) => {
	return new Promise((resolve, reject) => {
		db.get(commandId, (err, body) => {
			if(err) return reject(err)

			const currentSignals = body.signals || []
			body.signals = currentSignals.concat(signals)
			return resolve(upsert(body))
		})
	})
}

const all = () => {
	return new Promise((resolve, reject) => {
		db.view('default', 'all_commands', (err, body) => {
			if(err) return reject(err)
			const items = body.rows.map(item => item.value)
			return resolve(items)
		})
	})
}

const list = mode => {
	return new Promise((resolve, reject) => {
		const view = mode === 'strict' ? 'all_commands_strict': 'all_commands'
		db.view('default', view, (err, body) => {
			if(err) return reject(err)
			const items = body.rows.map(item => item.value)
			return resolve(items)
		})
	})
}

const removeSignal = (commandId, signalId) => {
	return new Promise((resolve, reject) => {
		db.get(commandId, (err, body) => {
			if(err) return reject(err)
			const current = body.signals
			const keep = current
			.filter(item => item.id !== signalId)
			body.signals = keep
			return resolve(upsert(body))
		})
	})
}

const upsert = item => {
	item.type = TYPE
	return new Promise((resolve, reject) => {
		db.insert(item, (err, body) => {
			if(err) return reject(err)
			return resolve(body)
		})
	})
}

module.exports = {
	upsert,
	all,
	addSignals,
	list,
	removeSignal
}
