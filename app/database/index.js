const nano = require('nano')
const cfenv = require('cfenv')
const appEnv = cfenv.getAppEnv()
const creds = appEnv.getServiceCreds('cloudant-rost')

if(!creds) {
	const errorMsg = 'cloudant credentials not found'
	return Promise.reject(new Error(errorMsg))
}

const cloudant = nano(creds.url)
const db = cloudant.use('rost')

const init = () => {
	return Promise.resolve()
}

module.exports = {
	init,
	db
}
