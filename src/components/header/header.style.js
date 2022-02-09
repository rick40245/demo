import styled from "styled-components";
import { Colors } from "../style/color";
import ctbcEamp from '../../assets/images/ctbc-eamp.png';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user-circle.png';
import arrow from '../../assets/images/chevron.png';

export const StyledHeader = styled.header`
    height: 72px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-shadow: inset 0 -2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: ${Colors.white};
`;

export const LogoContainer = styled.div`
    align-items: flex-end;
    display: flex;
    width: 280px;
    height: 48px;
`;

export const LogoContent = styled.div`
    color: ${Colors.primary};
    text-align: left;
    & > h3{
        font-weight: bold;
    }
    & > h2{
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.54px;
    }
`;

export const Logo = styled.div`
    background-image: url(${ctbcEamp});
    background-size: cover;
    width: 200px;
    height: 48px;
`;

export const ItemGroup = styled.div`
    display: flex;
`;

export const Item = styled.div`
    color: ${Colors.primary};
    background-color: ${props => props.istoggled ? '#d8eeee' : null};
    box-shadow: ${props => props.istoggled ? "inset 0px -2px 2px 0 rgba(0, 0, 0, 0.25)" : null };
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 18px;
    letter-spacing: 0.54px;
    cursor: pointer;
    width: max-content;
    position: relative;
`;


export const ItemNoBorder = styled.div`
    line-height: 1.6;
    padding: 0px 20px;
    
`;

export const ItemNoBorderId = styled(ItemNoBorder)`
    padding: 0px 10px;
    cursor: pointer;
`;

export const SearchBar = styled.div`
    width: 300px;
    height: 56px;
    border: 1px solid ${Colors.gray};
    display: flex;
    justify-content: space-between;
`;

export const SearchBarContent = styled.input`
    border: none;
    width: 220px;
    margin-left: 16px;
    font-size:20px;
    &:focus-visible{
        outline: none;
        border: none;
    }
    &:active{
        outline: none;
    }
`;

export const SearchIcon = styled.div`
    cursor: pointer;
    background-image: url(${search});
    height: 36px;
    width: 36px;
    border: none;
    margin: auto 8.5px;
    &:active-visible{
        outline: none;
        border: none;
    }
`;



export const UserIcon = styled.div`
    background-image: url(${user});
    width: 22px;
    height: 22px;
    margin: auto 0;
    margin-left: 15px;
    cursor: pointer;

`;

export const ArrowIcon = styled.div`
    background-image: url(${arrow});
    width: 16px;
    height: 16px;
    margin: auto 8px;
    cursor: pointer;
    transform: ${props => props.isToggle ? 'rotate(1.5turn)': 'rotate(1.0turn)'};
    transition: all 0.5s ease;
`;


export const ItemBottom = styled.div`
    position: absolute;
    bottom: 0px;
    width: 65%;
    height: 6px;
    right:13px;
    z-index: 100;
    background-color: ${ props => props.istoggled ? "#5ea7a7" : " "};
    box-shadow: ${ props => props.istoggled ? "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.25)" : " "};
    border-radius: 10px 10px 0px 0px;
`; 