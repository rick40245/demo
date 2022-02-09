import styled from "styled-components";
import { Colors } from "../color";
import point from '../../../assets/images/caret-down.png';
import right from '../../../assets/images/chevron-right.png';
import left from '../../../assets/images/chevron-left.png';


export const Pagination = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    padding-top: 12px;
    padding-bottom: 16px;
`;

export const Leftpage = styled.div`
    display:flex;
    align-items: center;
    margin-right:16px;
    width: 70px;
    cursor: pointer;
`;

export const Leftcontent= styled.span`
    flex-grow: 0;
    font-family: NotoSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.42px;
    text-align: left;
    color: #888;
`;

export const Lefticon = styled.div`
    background-image: url(${left});
    width: 16px;
    height:16px;
    margin:auto 0;
    padding: 8px 5.5px;
`;

export const Rightpage = styled.div`
    display:flex;
    width: 70px;
    cursor: pointer;
    align-items: center;
    margin-left:8px;
`;

export const Rightcontent= styled.span`
    flex-grow: 0;
    font-family: NotoSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.42px;
    text-align: left;
    color: #888;
`;

export const Righticon = styled.div`
    background-image: url(${right});
    width: 16px;
    height:16px;
    margin:auto 0;
    padding: 5.5px 8px;
`;

export const Pagenumber = styled.div`
    display: flex;
`;

export const PagenumberItem = styled.div`
    width: 25px;
    height: 27px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2px 8px;
    background-color: #ffffff00;
    color: #888888;
    margin-right: 8px;
    :hover{
        background-color:#ff912d;
        color:white;
    }
`;