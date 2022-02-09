/* 
	该文件专门为Count组件生成action对象
*/
import { reqEampRecord } from '../../../api'
import { apiHandler } from '../../../utils/function'
import { SET_PROFILE_RECORD } from '../../constant'

//同步action，就是指action的值为Object类型的一般对象
export const setProfileRecord = data => ({ type: SET_PROFILE_RECORD, data })


// 取得Profile Detail
export const fetchProfileRecord = (eaCode) => {
	return dispatch => {
		reqEampRecord(eaCode).then(data => {
            apiHandler(data, ()=> dispatch(setProfileRecord(data.context)))
        });
	}
}