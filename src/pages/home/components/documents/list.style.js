import styled from "styled-components";
import { Colors } from "../../../../components/style/color";
import point from '../../../../assets/images/caret-down.png';
import right from '../../../../assets/images/chevron-right.png';
import left from '../../../../assets/images/chevron-left.png';

export const Container = styled.div`
    width:711px;
    background-color:#ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #e3e3e3;
    margin-bottom: 16px;
`;

export const TitleContainer = styled.div`
    padding: 24px 0px 0px 24px;
    margin-bottom: 11px;
`;

export const Title = styled.h2`
    color: ${Colors.primary};
    lex-grow: 0;
    font-family: NotoSans;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.54px;
    text-align: left;
`;

export const Subtitle = styled.span`
    color: #5ea7a7;
    flex-grow: 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.42px;
    text-align: left;
    margin-left: 8px;
`;

export const Itemcontainer = styled.div`
    height: 34px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px dotted #cccccc;
    margin: 0px 24px 0px 24px;
    line-height: 1.6;
    cursor:pointer;
    margin-bottom: 8px;
`;

export const Item = styled.p`
    height: 34px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    margin:auto 0;
    font-size:16px;
`;

export const Itemicon = styled.div`
    background-image: url(${point});
    width: 16px;
    height:16px;
    margin:auto 0;
`;

export const Pagination = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
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
    background-color: white;
    color: #888888;
    margin-right: 8px;
    :hover{
        background-color:#ff912d;
        color:white;
    }
`;