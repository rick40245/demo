import { cloneObjec } from '../../../utils/function';
import { SET_HEADER_MENU, ADD_HEADER_MENU, REMOVE_HEADER_MENU, EDIT_HEADER_MENU } from '../../constant'

const initState = []
export default function account(preState = initState, action) {
	console.log('action', action);
	const { type, data } = action

	switch (type) {
		case SET_HEADER_MENU:
			return data
		case EDIT_HEADER_MENU:
			return stateChangeData(preState, data.index, {
				menuName: data.menuName,
				menuUrl: data.menuUrl
			})
		case ADD_HEADER_MENU:
			return [...preState, data]
		case REMOVE_HEADER_MENU:
			return preState.filter(function (item, index) {
				return data !== index
			});
		default:
			return preState
	}
}

function stateChangeData(state, index, newData) {
	let cloneState = cloneObjec(state);
	cloneState.splice(index, 1, {
		menuName: newData.menuName,
		menuUrl: newData.menuUrl
	})
	return cloneState
}