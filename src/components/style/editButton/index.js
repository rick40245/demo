import React  from 'react';
import './style.scss';
import { Tooltip } from '@mui/material';

export default  function EditButton(props) {
    
    return(
        <Tooltip title="編輯" disableInteractive placement="top">
            <div className="wrapper" {...props}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.25 20h8.252a.75.75 0 1 1 0 1.5H4.25a.75.75 0 0 1 0-1.5zm10.542 0h1.812a.75.75 0 1 1 0 1.5h-1.812a.75.75 0 0 1 0-1.5zm4.031 0h.427a.75.75 0 1 1 0 1.5h-.427a.75.75 0 0 1 0-1.5zM6.398 16.615a.751.751 0 0 1 .286 1.473l-1.79.35a.75.75 0 0 1-.871-.918l1.002-4.002a.734.734 0 0 1 .24-.386L15.21 2.779c.303-.303 1.286-.391 1.573-.105l3 3a.75.75 0 0 1 0 1.061l-10.5 10.5a.751.751 0 0 1-1.061 0l-2.064-2.064-.394 1.57.633-.125v-.001zm9.884-10.44a.75.75 0 0 1-1.06 1.06l-.97-.97-7.439 7.44 1.94 1.94 9.439-9.44-1.94-1.94-.939.94.97.97z" fill="#888"/>
                </svg>
            </div>
        </Tooltip>
    )
}
