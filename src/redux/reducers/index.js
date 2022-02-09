import {combineReducers} from 'redux'
import eampProfil from './profile/eamp_detail'
import eampRecord from './profile/eamp_record'
import profileSearch from './search/profile_search'
import account from './account/account'
import header from './header/header'


export default  combineReducers({
	eampProfil,
	eampRecord,
	profileSearch,
	account,
	header
})
