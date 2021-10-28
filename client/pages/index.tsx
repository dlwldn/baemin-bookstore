import React from 'react';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import GoodsList from 'components/goodsList/GoodsList';
import Header from 'components/header/Header';
import HomeSlider from 'components/slider/HomeSlider';
import { BEST_LIST, NEW_LIST, SALE_LIST } from '../lib/constant';
import AppShell from 'components/AppShell';

const ContentWrap = styled.div`
    padding: 8%;
`;

type Prop = {};

const Home = (prop: Prop) => {
    return (
        <div>
            <AppShell>
                <HomeSlider />
                <ContentWrap>
                    <GoodsList list={BEST_LIST} title='잘나가요' />
                    <GoodsList list={NEW_LIST} title='새로 나왔어요' />
                    <GoodsList list={SALE_LIST} title='지금은 할인 중' />
                </ContentWrap>
            </AppShell>
        </div>
    );
};

export default Home;
