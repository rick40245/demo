import { SET_SEARCH } from '../../constant'

const initState = null
export default function profileSearch(preState = initState, action) {
	const { type, data } = action
	
	switch (type) {
		case SET_SEARCH:
			return data
		default:
			return preState
	}
}