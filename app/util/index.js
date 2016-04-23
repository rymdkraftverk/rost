const matches = (string, list) => {
	return list.filter(el => {
		return string.includes(el)
	})
}

module.exports = {
	matches
}
