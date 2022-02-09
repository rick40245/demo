import React  from 'react';
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.scss'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Footer from '../../components/footer'
import { fetchAccount, setAccountNull } from '../../redux/actions/account/account';

function Login({setAccountNull,fetchAccount,account}) {
    const [isVisible, setIsVisible] = useState(false)
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const showPasswd = () => {
        setIsVisible(!isVisible)
    }

    /* init */
    /* 引入元件時清空store中的username */
    useEffect(() => {
        setAccountNull(null)
    }, [setAccountNull])

    // 轉跳網址
    const login = async () => {
        fetchAccount(`${usernameRef.current.value}`, `${passwordRef.current.value}`);
    }

    useEffect(() => {
        if (account.username !== null) {
            navigate('/home');
        }
    }, [account.username,navigate])

    return (
        <>
            <div className="login-page">
                <div className='login-ctbc-eamp-img' />
                <div className='login-card'>
                    <Stack>
                        {
                            account.isShowAlert ?
                                <Alert severity="error">您輸入的帳號密碼有誤，請重新確認後再登入！</Alert>
                                :
                                null
                        }
                        <div className='login-row'>
                            <span>帳號</span>
                            <div className='login-passwd-relative'>
                                <input className='login-textfield' placeholder='' ref={usernameRef} />
                            </div>
                        </div>

                        <div className='login-row'>
                            <span>密碼</span>
                            <div className='login-passwd-relative'>
                                <input className='login-textfield' placeholder='' type={isVisible ? '' : 'password'} ref={passwordRef} />
                                <div className='login-eye-img' onClick={showPasswd} />
                            </div>
                        </div>
                    </Stack>
                    <div className='login-buttonlg' onClick={login}>登入</div>
                </div>
                <div className='login-background-img' />
                <Footer />
            </div >
        </>
    )
}

export default connect(
    state => ({
        account: state.account
    }),
    {
        fetchAccount,
        setAccountNull,
    }
)(Login)
