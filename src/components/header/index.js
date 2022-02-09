import React  from 'react';
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { nanoid } from "nanoid";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import './index.scss';
import { StyledHeader } from "./header.style";
import { LogoContainer, Logo, LogoContent } from "./header.style";
import { Item, ItemBottom } from "./header.style";
import { Platform, UserIcon, ArrowIcon, Flex, ItemNoBorderId } from "./header.style";
import StyledLink from "../style/styledLink";
import EampSearch from '../search-bar/eamp-search'
import { reqEditMenu, reqMainMenuList, reqUserLogout } from "../../api";
import { setAccountNull } from "../../redux/actions/account/account";
import { fetchMainMenuList } from "../../redux/actions/header/header";



/* 

    subtitle: string                 
    isVisibleBackHome: boolean       
    isVisibleSearch: boolean         
    linkItem: [{
        content: string,
        linkPath: string
    }]
QQ
    */
function Header({ fetchMainMenuList, setAccountNull, isVisibleSearch, account, headerMenu }) {
    const regex = /http/i;
    const navigate = useNavigate();
    const location = useLocation()

    const [isToggle, setIsToggle] = useState(false)

    const showDropdownTable = () => {
        setIsToggle(!isToggle)
    }
    useEffect(() => {
        fetchMainMenuList()
    }, []);

    /* storeusernamenull */
    useEffect(() => {
        if (account.username === null) {
            navigate('/login');
        }
    }, [account.username])

    const logout = () => {
        setAccountNull(null);
        reqUserLogout();
    }


    return (
        <StyledHeader>
            {/* Logo */}
            <div className="logo-wrapper">
                <StyledLink to="/" >
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                </StyledLink>
                {/* Item */}
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" variant="middle" sx={{
                        marginTop: '6%',
                        marginBottom: '6%'
                    }} flexItem
                    />}
                    sx={{ height: '100%' }}
                    >
                    {headerMenu.length > 0 &&
                        headerMenu.map(item =>
                            <Item key={nanoid()} istoggled={`${location.pathname}${location.search}` === `${item.menuUrl}`.replace(regex, '/outside?page=http')}>
                                <StyledLink style={{ color: '#007d7d' }} to={`${item.menuUrl}`.replace(regex, '/outside?page=http')}>
                                    {item.menuName}
                                </StyledLink>
                                <ItemBottom istoggled={`${location.pathname}${location.search}` === `${item.menuUrl}`.replace(regex, '/outside?page=http')} />
                            </Item>
                        )
                    }
                </Stack>
            </div>
            {/* Search Bar */}
            {
                isVisibleSearch ?
                    <EampSearch />
                    :
                    null
            }
            {/* Platform */}
            <div className="header-userInfo">
                <Stack
                    className="header-userInfo-stack"
                    onClick={() => showDropdownTable()}
                    direction="row"
                >
                    <UserIcon />
                    <ItemNoBorderId >{account.username}</ItemNoBorderId>
                    <ArrowIcon isToggle={isToggle} />
                    {
                        isToggle ?
                            (<div id="Demo" className="user-dropdown" >
                                <StyledLink to="/docmgmt/"></StyledLink>
                                <StyledLink to="/usermgmt/"></StyledLink>
                                <StyledLink to="/menumgmt/"></StyledLink>
                                <StyledLink to="/visualmgmt/"></StyledLink>
                                <StyledLink to="/techmgmt/"></StyledLink>
                                <div className="line" />
                                <a className="span-logout" onClick={() => logout()}></a>
                            </div>) : null
                    }
                </Stack>
            </div>
        </StyledHeader >
    );
}


export default connect(
    state => ({
        account: state.account,
        headerMenu: state.header
    }),
    {
        setAccountNull,
        fetchMainMenuList
    }
)(Header)