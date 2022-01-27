import AppShell from 'components/AppShell';
import CategoryContentsHeader from 'components/goods/list/CategoryContentsHeader';
import GoodsList from 'components/goodsList/GoodsList';
import { generateRandomData } from 'lib/util/getData';
import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {}
/* <GoodsListView/> =========================================================== */
const ContentWrap = styled.div`
    padding: 50px 8%;
`
export default function GoodsListView() {
    return ( 
    <AppShell>
        <ContentWrap>
            <CategoryContentsHeader />
            <GoodsList list={generateRandomData(12)}/>
        </ContentWrap>
    </AppShell>)
}
GoodsListView.defaultProps = {}