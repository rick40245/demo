import styled from "styled-components";
import { Colors } from "../../style/color";
import search from '../../../assets/images/search.png';

export const SearchBar = styled.div`
    width: fit-content;
    height: 50px;
    border: 1px solid ${Colors.gray};
    display: flex;
    justify-content: space-between;
`;

export const SearchIcon = styled.a`
    cursor: pointer;
    background-repeat: no-repeat;
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

export const SearchFilteredDropdown = styled.div`
    min-width: 22%;
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--gray-white);
    
`