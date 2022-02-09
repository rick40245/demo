import { SET_ACCOUNT, SET_ACCOUNT_NULL, SET_ALERT_VISIBLE } from '../../constant'

const initState = {username: null}
export default function account(preState = initState, action) {
	const { type, data } = action

	switch (type) {
		case SET_ACCOUNT:
			return {username: data}
		case SET_ACCOUNT_NULL:
			return {username: data}
		case SET_ALERT_VISIBLE:
			return {...preState,isShowAlert: data}
		default:
			return preState
	}
}