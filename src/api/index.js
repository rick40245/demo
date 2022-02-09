/*
包含所有API路徑
 */

import fetchData from "./fetch";

const BASE = '';

//使用者登入
export const reqUserLogin = (account, password) => fetchData(BASE + '/user/login', { account, password }, 'POST');
//使用者登出
export const reqUserLogout = () => fetchData(BASE + '/user/logout');

//取得搜尋 Option
export const reqEampSearchOption = (eaName) => fetchData(BASE + '/profile/getEaName', { eaName }, 'POST');
//搜尋科標 Detail
export const reqEampDetail = (eaCode) => fetchData(BASE + '/profile/getEaData', { eaCode }, 'POST');
//取得審查紀錄
export const reqEampRecord = (eaCode) => fetchData(BASE + '/profile/getEaRecord', { eaCode }, 'POST');

//取得主選單列表
export const reqMainMenuList = () => fetchData(BASE + '/menu/menuList');
//修正主選單列表
/* {
    "editType":"UPDATE",
    "menuNameOld":"oldtest",
    "menuName":"newtest",
    "menuUrl":"/test/ea/newprofile"
} */
export const reqEditMenu = (menuData) => fetchData(BASE + '/menu/editMenu', { ...menuData }, 'POST');
// Header Menu 排序
export const reqEditMenuSort = (menuData) => fetchData(BASE + '/menu/editMenuSort', menuData, 'POST');
// 確認menu名稱是否重複
export const reqCheckMenuName = (menuName) => fetchData(BASE + '/menu/checkMenuName', { menuName }, 'POST');



