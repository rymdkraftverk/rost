const cfenv = require('cfenv')
const appEnv = cfenv.getAppEnv()
const database = require('./database')

database.init().then(() => {
	console.log('database initialized')
	return require('./server')
})
.then(server => {
	server.listen(appEnv.port)
	console.log('server running:\n%s', appEnv.url)
})
.catch(err => {
	console.error('error during startup: ', err)
	console.error('trace: \n', err.stack)
})
