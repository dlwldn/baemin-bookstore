import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GoodsList from 'components/goodsList/GoodsList';
import HomeSlider from 'components/slider/HomeSlider';
import { BEST_LIST, NEW_LIST, SALE_LIST } from '../lib/constant';
import AppShell from 'components/AppShell';
import axios from 'axios';

const ContentWrap = styled.div`
    padding: 8%;
`;

type Prop = {};

const Home = (prop: Prop) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const hash = url.hash;

        console.log(url, hash);
        if (hash) {
          const accessToken = hash.split("=")[1].split("&")[0];
          axios.get('https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken, { 
            headers: { 
              authorization: `token ${accessToken}`, 
              accept: 'application/json' 
            }})
            .then(data => {
              console.log(data);
              setData(data);
          }).catch(e => console.log('oAuth token expired'));
        }
      }, [])
      
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
