import React  from 'react';
/* import { lazy } from 'react'; */
import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../../components/footer'


import Profile from '../profile';
import Home from '../home';
import Outside from '../outside';
import Doc from '../management/doc';
import User from '../management/user';
import Menu from '../management/menu';
import Visual from '../management/visual';
import Tech from '../management/tech';
import Header from '../../components/header';


/* const Home = lazy(() => import('../home'));
const Menu = lazy(() => import('../management/menu'));
const Profile = lazy(() => import('../profile'));
const Doc = lazy(() => import('../management/doc'));
const User = lazy(() => import('../management/user'));
const Visual = lazy(() => import('../management/visual'));
const Tech = lazy(() => import('../management/tech')); */

export default function Admin(props) {
    return (
        <>
            <Routes>
                {/* 根目錄轉跳 Home */}
                <Route exact path='/' element={<Navigate replace to="/home" />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route path='/*' element={<>
                    <Header isVisibleSearch={false} />
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/docmgmt' element={<Doc />} />
                        <Route path='/usermgmt' element={<User />} />
                        <Route path='/menumgmt' element={<Menu />} />
                        <Route path='/visualmgmt' element={<Visual />} />
                        <Route path='/techmgmt' element={<Tech />} />
                        <Route path='/outside' element={<Outside />} />
                    </Routes>
                </>
                } />
            </Routes>
            <Footer />
        </>
    )
}