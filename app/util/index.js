const matchingCommands = (string, list) => {
	return list.filter(el => {
		return string.includes(el.command)
	})
}

module.exports = {
	matchingCommands
}
