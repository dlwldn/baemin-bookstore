import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
const FILTER_ITEM_MENU: FilterItemMenuType[] = [
    { title: '추천순', query: 'up' },
    { title: '인기순', query: 'view' },
    { title: '최신순', query: 'date' },
    { title: '낮은가격순', query: 'lowPrice' },
    { title: '높은가격순', query: 'highPrice' },
];
/* Prop =========================================================== */
type FilterItemMenuType = {
    title: string;
    query: string;
};
/* <CategoryContentsHeader/> =========================================================== */
const HeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;

    > div {
        display: flex;

        > span {
            padding: 0 20px;
        }

        > span:last-of-type {
            padding-right: 0;
        }
    }
`

export default function CategoryContentsHeader() {
    const renderFilterItems = FILTER_ITEM_MENU.map((item, idx) => {
        return <span key={idx}>{item.title}</span>;
    });

    return (
        <HeaderWrap>
            <span>총 245개</span>
            <div>{renderFilterItems}</div>
        </HeaderWrap>
    );
}
CategoryContentsHeader.defaultProps = {};
