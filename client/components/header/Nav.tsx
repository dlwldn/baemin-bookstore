import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import router from 'next/router';
/* Constants =========================================================== */
const CATEGORY_LIST: CategoryListType[] = [
    { title: '전체', query: '1' },
    { title: '문구', query: '2' },
    { title: '리빙', query: '3' },
    { title: '책', query: '4' },
    { title: '배민그린', query: '5' },
    { title: 'ㅋㅋ에디션', query: '6' },
    { title: '을지로에디션', query: '7' },
    { title: '배달이친구들', query: '8' },
    { title: '선물세트', query: '9' },
    { title: '콜라보레이션', query: '10' },
];
/* Prop =========================================================== */
type Prop = {};
type CategoryListType = {
    title: string;
    query: string;
};
/* <Nav/> =========================================================== */
const NavWrap = styled.nav`
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    border-bottom: ${({ theme }) => `1px solid${theme.color.BORDER_COLOR}`};
    border-top: ${({ theme }) => `1px solid${theme.color.BORDER_COLOR}`};
`;

const LinkWrap = styled.a<{ isActive: boolean }>`
    font-size: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ isActive, theme }) =>
        isActive && theme.color.BAEMIN_GREEN_COLOR};
    :hover {
        color: ${({ theme }) => theme.color.BAEMIN_GREEN_COLOR};
    }
`;

export default function Nav() {
    const RouterCategoryNo = router.query.cateNo;

    const renderCategoryItem = CATEGORY_LIST.map((item) => {
        return (
            <Link
                key={item.query}
                href={`/goods/list?cateNo=${item.query}`}
            >
                <LinkWrap isActive={RouterCategoryNo === item.query}>
                    {item.title}
                </LinkWrap>
            </Link>
        );
    });

    return <NavWrap>{renderCategoryItem}</NavWrap>;
}
Nav.defaultProps = {};
