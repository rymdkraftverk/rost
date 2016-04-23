const cfenv = require('cfenv')
const appEnv = cfenv.getAppEnv()
const creds = appEnv.getServiceCreds('iotf-rost')
const iotf = require('ibmiotf')
const config = require('../config')
const randomWords = require('random-words')

if(!creds)
	throw new Error('iotf credentials not found')

const options = {
	'org': creds.org,
	'id': 'rost-' + randomWords(),
	'auth-key': creds.apiKey,
	'auth-token': creds.apiToken
}

console.log('cliend id:', options.id)

const client = new iotf.IotfApplication(options)
client.connect()

client.on('connect', () => {
	console.log('connected to iotf')
})

client.on('error', error => {
	console.log('error', error)
})

client.on('reconnect', error => {
	console.log('reconnect', error)
})

client.on('close', error => {
	console.log('close', error)
})

const publish = signals => {
	signals.forEach(item => {
		const statusMsg  = JSON.stringify({status: 'success'})
		client.publishDeviceCommand(config.deviceType, item.device, item.id, 'json', statusMsg)
	})
}

module.exports = {
	publish
}
