import React from 'react';



export default function statusTag(props) {

    const tagStyle = {
        borderStyle: 'solid',
        borderWidth: 'thin',
        padding: '1px 4px',
        fontSize: '12px',
        letterSpacing: '0.36px',
        textAlign: 'left',
        color: `${props.color}`,
        margin: `${props.margin}`,
        height: 'fit-content',
    }

    return (
        <a style={tagStyle}>{props.tagName}</a>
    );
}