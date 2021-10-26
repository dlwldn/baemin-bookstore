import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
const SearchBarWrap = styled.div`
    text-align: center;
    padding: 30px;
`
/* Prop =========================================================== */
type Prop = {}
/* <SearchBar/> =========================================================== */
export default function SearchBar() {
    return (
        <SearchBarWrap>
            검색바
        </SearchBarWrap>
    )
}
SearchBar.defaultProps = {}