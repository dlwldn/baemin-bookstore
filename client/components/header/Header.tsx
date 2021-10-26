import React from 'react';
import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import Nav from './Nav';
import SearchBar from './SearchBar';

/* Constants =========================================================== */
const HeaderWrap = styled.header``;
/* Prop =========================================================== */
type Prop = {};
/* <Header/> =========================================================== */
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
