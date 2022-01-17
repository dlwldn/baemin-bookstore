import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {}
/* <SearchBar/> =========================================================== */
const SearchBarWrap = styled.div`
    text-align: center;
    padding: 30px;
`

export default function SearchBar() {
    return (
        <SearchBarWrap>
            검색바
        </SearchBarWrap>
    )
}
SearchBar.defaultProps = {}