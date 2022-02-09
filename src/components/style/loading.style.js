import styled from "styled-components";
import loading from "../../assets/images/loading.gif"

export const SearchLoading = styled.div`
    cursor: pointer;
    background-image: url(${loading});
    background-size: 100% 100%;
    height: 40px;
    width: 40px;
    border: none;
    margin: auto 8.5px;
    &:active-visible{
        outline: none;
        border: none;
    }
`;
