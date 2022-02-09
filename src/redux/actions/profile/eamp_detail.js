/* 
	该文件专门为Count组件生成action对象
*/
import { reqEampDetail } from '../../../api'
import { apiHandler } from '../../../utils/function'
import { SET_PROFILE_DETAIL } from '../../constant'

export const setProfileDetail = data => ({ type: SET_PROFILE_DETAIL, data })

export const fetchProfileDetail = (eaCode) => {
	return dispatch => {
		reqEampDetail(eaCode).then(data => {
			apiHandler(data, () => dispatch(setProfileDetail(data.context)))
		});
	}
}