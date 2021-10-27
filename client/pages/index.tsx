import React from 'react';
import styled from 'styled-components';
import GoodsList from '../components/bestList/GoodsList';
import Header from '../components/header/Header';
import HomeSlider from '../components/slider/HomeSlider';
import { BEST_LIST, NEW_LIST } from '../lib/constant';

const ContentWrap = styled.div`
    padding: 8%;
`;

type Prop = {};

const Home = (prop: Prop) => {
    return (
        <div>
            <Header />
            <HomeSlider />
            <ContentWrap>
                <GoodsList list={BEST_LIST} title='잘나가요' />
                <GoodsList list={NEW_LIST} title='새로 나왔어요' />
            </ContentWrap>
        </div>
    );
};

export default Home;
