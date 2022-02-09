import { SET_PROFILE_RECORD } from '../../constant'

const initState = []
export default function eampRecord(preState = initState, action) {
	const { type, data } = action
	
	switch (type) {
		case SET_PROFILE_RECORD:
			return data
		default:
			return preState
	}
}