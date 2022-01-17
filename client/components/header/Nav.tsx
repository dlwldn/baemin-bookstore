import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {}
/* <Nav/> =========================================================== */
const NavWrap = styled.nav`
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    border-bottom: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;

    > a {
        font-size: 18px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    > a:hover {
        color: #2AC1BC;
    }
`

export default function Nav() {
    return (
        <NavWrap>
            <Link href="/">
                <a>전체</a>
            </Link>
            <Link href="/">
                <a>문구</a>
            </Link>
            <Link href="/">
                <a>리빙</a>
            </Link>
            <Link href="/">
                <a>책</a>
            </Link>
            <Link href="/">
                <a>배민그린</a>
            </Link>
            <Link href="/">
                <a>ㅋㅋ에디션</a>
            </Link>
            <Link href="/">
                <a>을지로에디션</a>
            </Link>
            <Link href="/">
                <a>배달이친구들</a>
            </Link>
            <Link href="/">
                <a>선물세트</a>
            </Link>
            <Link href="/">
                <a>콜라보레이션</a>
            </Link>
        </NavWrap>
    )
}
Nav.defaultProps = {}