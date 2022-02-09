import styled from "styled-components";
import { Check2 } from "@styled-icons/bootstrap/Check2";

const Wrap = styled.div`
    width: 81px;
    height: 34px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #005f5f;
    ${props => props.styleType}
`
// Icon
const Check = styled(Check2)`
    ${props => props.styleType}
    width: 17px;
    height: 17px;
`
const Text = styled.span`
    width: 33px;
    height: 26px;
    flex-grow: 0;
    font-family: NotoSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.48px;
    text-align: left;
    ${props => props.styleType}
`
// button content style
function btnStyle(border,hoverColor,activeColor,activeBackground){
    return `
        cursor: pointer;
        background-color: #ffffff;
        border: solid 1px ${border};
        :hover {
            background-color: ${hoverColor};
        }
        :active {
            & > span,path{
                color: ${activeColor};
            }
            background-color:${activeBackground};
        }
    `
}

// button disable style
function disableStyle(color){
    return`
        opacity: 0.5;
        border: solid 1px ${color};
        background-color: #ffffff;
        color: ${color};
        cursor: default; 
    `
}

const wrapStyle = {
    primary: btnStyle('#005f5f','#d8eeee','#004949','#99c7c8'),
    secondary :btnStyle('#da4100','#ffddb4','#aa2900','#ffb97b'),
    muted: btnStyle('#888888','#f3f3f3','#666666','#e3e3e3'),
    danger: btnStyle('#dc3500','#ff8f88','#ffffff','#dc3500'),
    
    primaryDisabled: disableStyle('#007d7d'),
    secondaryDisabled: disableStyle('#ed7100'),
    mutedDisabled: disableStyle('#888888'),
    dangerDisabled: disableStyle('#dc3500'),
}

const defaultStyle = {
    primary: `
        color: #005f5f;
    `,
    secondary: `
        color: #da4100;
    `,
    muted:`
        color: #888888;
    `,
    danger:`
        color: #dc3500;
    `,
}

export const ButtonSm = (props) => {

    return (
        <Wrap styleType={wrapStyle[props.styleType]}>
                <Check styleType={defaultStyle[props.styleType]}/>
                <Text styleType={defaultStyle[props.styleType]}>{props.text}</Text>
        </Wrap>
    )
}
