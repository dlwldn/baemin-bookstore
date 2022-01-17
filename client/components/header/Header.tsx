import React from 'react';
import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import Nav from './Nav';
import SearchBar from './SearchBar';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Header/> =========================================================== */
const HeaderWrap = styled.header`
    position: sticky;
    top: 0;
    z-index: 9999;
    background: #fff;
`;

export default function Header() {
    return (
        <HeaderWrap>
            <ActionButtons />
            <SearchBar />
            <Nav />
        </HeaderWrap>
    );
}
Header.defaultProps = {};
