/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import { SET_PROFILE_DETAIL } from '../../constant'

const initState = {} //初始化状态
export default function eampDetail(preState = initState, action) {
	const { type, data } = action
	//根據類型決定動作
	switch (type) {
		case SET_PROFILE_DETAIL:
			return data
		default:
			return preState
	}
}