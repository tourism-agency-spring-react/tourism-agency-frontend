export const cutText = (text) => {
	return text.length > 30 ? text.slice(0, 30) + '...' : text
}