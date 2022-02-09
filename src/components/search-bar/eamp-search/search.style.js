import styled from "styled-components";
import { Colors } from "../../style/color";
import search from '../../../assets/images/search.png';

export const SearchBar = styled.div`
    width: 314px;
    height: 56px;
    border: 1px solid ${Colors.gray};
    display: flex;
    justify-content: space-between;
`;

export const SearchAdvanced = styled.div`
    width: 100%;
    height: 58px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding: 16px;
`

export const SearchItem = styled.li`
    width: 100%;
    height: 50px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
`

export const SearchSelectionDropdown = styled.div`
    width: 314px;
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    margin: 56px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--gray-white);
    & > .search-selection-advanced {
        :hover {
            background-color: #f3f3f3;
        }
    }
`


export const SearchIcon = styled.div`
    cursor: pointer;
    background-image: url(${search});
    background-size: 100% 100%;
    height: 36px;
    width: 36px;
    border: none;
    margin: auto 8.5px;
    &:active-visible{
        outline: none;
        border: none;
    }
`;
