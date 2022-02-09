import { reqEditMenu, reqEditMenuSort, reqMainMenuList } from '../../../api'
import { SET_HEADER_MENU, REMOVE_HEADER_MENU, ADD_HEADER_MENU, EDIT_HEADER_MENU } from '../../constant'
import { apiHandler } from '../../../utils/function';

export const setHeaderMenu = data => ({ type: SET_HEADER_MENU, data })
export const addHeaderMenu = data => ({ type: ADD_HEADER_MENU, data })
export const removeHeaderMenu = data => ({ type: REMOVE_HEADER_MENU, data })
export const editHeaderMenu = data => ({ type: EDIT_HEADER_MENU, data })

// 取得Header Menu
export const fetchMainMenuList = () => {
	return dispatch => {
		reqMainMenuList().then(data => {
			apiHandler(data, () => dispatch(setHeaderMenu(data.context)))
		});
	}
}

// 取得Header Menu
export const fetchMainMenuSort = (menu) => {
	return dispatch => {
		/* 畫面變動 */
		dispatch(setHeaderMenu(menu));
		/* 後端變動 */
		reqEditMenuSort(menu).then(data => {
			if (!data.checkResult) return console.error('連線異常');;
		});
	}
}
// 刪除Header Menu
export const fetchRemoveHeaderMenu = (menuName, index) => {
	return dispatch => {
		dispatch(removeHeaderMenu(index));
		reqEditMenu({
			editType: "DEL",
			menuName: menuName
		})
	}
}
// 新增 Header Menu
export const fetchAddHeaderMenu = (menuName, menuUrl) => {
	return dispatch => {
		dispatch(addHeaderMenu({ menuName, menuUrl }));
		reqEditMenu({
			editType: "ADD",
			menuName: menuName,
			menuUrl: menuUrl
		})
	}
}

// 編輯 Header Menu
export const fetchEditHeaderMenu = (menuNameOld, menuName, menuUrl, index) => {
	return dispatch => {
		dispatch(editHeaderMenu({ menuName, menuUrl, index }));
		reqEditMenu({
			editType: "UPDATE",
			menuNameOld: menuNameOld,
			menuName: menuName,
			menuUrl: menuUrl
		})
	}
}
