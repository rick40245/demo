import React, { useState, useEffect }  from 'react';
import './index.scss';
import styled from "styled-components";


export default function ItemIcon(props) {

    const iconDiv = {
        width: '50px',
        height: '50px',
        flexGrow: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '60px',
        backgroundColor: `${props.color}`,
    }

    const [iconType, setIconType] = useState("")

    useEffect(() => {
        switch (props.icon) {
            case 'file':
                setIconType("icon-file")
                break;
            case 'setting':
                setIconType("icon-cog")
                break;
            case 'folder':
                setIconType("icon-folder")
                break;
            case 'link':
                setIconType("icon-link")
                break;
            case 'user':
                setIconType("icon-user")
                break;
        }
    }, [])

    return (
        <div style={iconDiv} className="icon-div">
            <div className={`itemIcon ${iconType}`}/>
        </div>
    );
}