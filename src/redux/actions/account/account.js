import { reqUserLogin } from '../../../api'
import { SET_ACCOUNT, SET_ACCOUNT_NULL, SET_ALERT_VISIBLE } from '../../constant'
import Cookies from 'universal-cookie';


export const setAccount = data => ({ type: SET_ACCOUNT, data })
export const setAccountNull = data => ({ type: SET_ACCOUNT_NULL, data })

export const setAlertVisible = data => ({ type: SET_ALERT_VISIBLE, data })

// 取得Profile Detail
export const fetchAccount = (account, password) => {
    const cookies = new Cookies();
    return dispatch => {
        reqUserLogin(account, password).then(res => {
            if (res.checkResult) {
                const username = cookies.get('loginName');
                dispatch(setAccount(username));
            } else {
                dispatch(setAlertVisible(true));
            }
        })
    }
}