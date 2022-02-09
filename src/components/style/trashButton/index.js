import React  from 'react';
import './style.scss';
import { Tooltip } from '@mui/material';

export default function TrashButton({onClick}) {

    return(
        <Tooltip onClick={onClick} title="刪除" disableInteractive placement="top">
        <div className="wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 3A2.75 2.75 0 0 1 17 5.75v.75h3.75a.75.75 0 1 1 0 1.5H19.5v10.75a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 5 18.75v-1a.75.75 0 1 1 1.5 0v1l.003.082a1.25 1.25 0 0 0 1.165 1.165L7.75 20h9l.082-.003a1.25 1.25 0 0 0 1.165-1.165L18 18.75V8H6.5v7.25a.75.75 0 1 1-1.5 0V8H3.75a.75.75 0 0 1 0-1.5H7.5v-.75A2.75 2.75 0 0 1 10.25 3h4zm-2 7.5a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75zm3 0a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75zm-6 0a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75zm5-6h-4A1.25 1.25 0 0 0 9 5.75v.75h6.5v-.75a1.25 1.25 0 0 0-1.25-1.25z" fill="#888"/>
            </svg>
        </div>
    </Tooltip>
    )
}