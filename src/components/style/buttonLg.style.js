import styled from "styled-components";
import { Cross } from "@styled-icons/entypo/Cross";
import { Colors } from './color.js';

const Wrap = styled.div`
    width: 280px;
    height: 64px;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    ${props => props.styleType}
`
// Icon
const No = styled(Cross)`
    width: 30px;
    height: 30px;
    ${props => props.styleType}
`

const Text = styled.span`
    width: 48px;
    height: 32px;
    flex-grow: 0;
    font-family: NotoSans;
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.6px;
    text-align: left;
    ${props => props.styleType}
`;

// button solod style
function btnSolidStyle(bgColor,hoverColor,activeBackground){
    return `
        cursor: pointer;
        background-color: ${bgColor};
        :hover {
            background-color: ${hoverColor};
        }
        :active {
            background-color:${activeBackground};
        }
    `
}

// button solod disable style
function btnSolidDisableStyle(color){
    return `
    opacity: 0.5;
    background-color: ${color};
    color: ${color};
    cursor: default; 
    `
}

// button outline style
function btnOutlineStyle(bgColor,borderColor,hoverColor,activeColor,activeBackground){
    return`
        cursor: pointer;
        background-color: ${bgColor};
        border: 1px solid ${borderColor};
        border-radius: 2px;
        :hover {
            background-color: ${hoverColor};
        }
        :active {
            & > span,path{
                color: ${activeColor};
            }
            background-color:${activeBackground};
        }
    `;
}

// button outline disable style
function btnOutlineDisableStyle(color){
    return `
    opacity: 0.5;
    border: 1px solid ${color};
    color: ${color};
    cursor: default; 
    `
}

const wrapStyle = {
    //Solid
    primary: btnSolidStyle(Colors.primary,Colors.primary_faded,Colors.primary_dark),
    secondary: btnSolidStyle(Colors.secondary,Colors.secondary_faded,Colors.secondary_dark),
    danger:btnSolidStyle(Colors.danger,Colors.danger_faded,Colors.danger_dark),
    
    //Solid Disable
    primaryDisable: btnSolidDisableStyle(Colors.primary),
    secondaryDisable: btnSolidDisableStyle(Colors.secondary),
    dangerDisable: btnSolidDisableStyle(Colors.danger),

    //Outline
    primaryOutline: btnOutlineStyle(Colors.white,Colors.primary_faded,Colors.primary_light,Colors.primary_dark,Colors.primary_disable),
    secondaryOutline: btnOutlineStyle(Colors.white,Colors.secondary_faded,Colors.secondary_light,Colors.secondary_dark,Colors.secondary_disable),
    mutedOutline: btnOutlineStyle(Colors.white,Colors.muted,Colors.muted_light,Colors.muted_dark,Colors.muted_faded),

    //Outlin disable
    primaryOutlineDisable: btnOutlineDisableStyle(Colors.primary),
    secondaryOutlineDisable: btnOutlineDisableStyle(Colors.secondary),
    dangerOutlineDisable: btnOutlineDisableStyle(Colors.danger),
    
}

const defaultStyle = {
    //Solid
    primary: `
        color: ${Colors.white};
    `,
    secondary: `
        color: ${Colors.white};
    `,
    danger:`
        color: ${Colors.white};
    `,

    //Solid Disable
    primaryDisable: `
    color: ${Colors.white};
    `,
    secondaryDisable: `
        color: ${Colors.white};
    `,
    dangerDisable:`
        color: ${Colors.white};
    `,

    //Outline
    primaryOutline:`
        color: ${Colors.primary_faded}
    `,
    secondaryOutline:`
        color: ${Colors.secondary_faded}
    `,
    mutedOutline:`
        color: ${Colors.muted}
    `,

    //Outline Disable
    primaryOutlineDisable: `
    color: ${Colors.primary};
    `,
    secondaryOutlineDisable: `
        color: ${Colors.secondary};
    `,
    mutedOutlineOutline:`
        color: ${Colors.muted};
    `,
}

export const ButtonLg = (props) => {
    return(
        <Wrap styleType={wrapStyle[props.styleType]}>
            <No styleType={defaultStyle[props.styleType]}/>
            <Text styleType={defaultStyle[props.styleType]}>關閉</Text>
        </Wrap>
    )
}