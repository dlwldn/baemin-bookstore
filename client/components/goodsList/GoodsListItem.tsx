import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { getDateSubCount, getSalePrice } from 'lib/util/util';
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {
    listItem: GoodsDType;
    listIndex: number;
};
/* <GoodsListItem/> =========================================================== */
const ListItemWrap = styled.li``;
const ContentWrap = styled.div`
    height: 100%;
    > div:nth-of-type(1) {
        width: 100%;
        height: 350px;
        background: #eee;
        position: relative;
    }

    > div:nth-of-type(1):hover {
        cursor: pointer;
    }

    > div:nth-of-type(1):hover img {
        transform: scale(1.05);
        transition: 0.3s;
    }

    > div:nth-of-type(1)::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        padding: 15px 0 0 0;
        font-size: 16px;
    }
`;
const TagWrap = styled.div`
    position: absolute;
    top: 10px;
    left: 5px;
    > span {
        padding: 5px;
        font-size: 15px;
        border-radius: 5px;
        margin-right: 5px;
    }
`;
const BestTag = styled.span`
    background: #000;
    color: #fff;
`;
const GreenTag = styled.span`
    background: #178a17;
    color: #fff;
`;
const NewTag = styled.span`
    background: #36bad1;
    color: #fff;
`;
const SaleTag = styled.span`
    background: #ff4646;
    color: #fff;
`;
const SalePercent = styled.span`
    color: #ff4646;
    font-size: 18px;
    margin-bottom: 10px;
`;
const ContentTitle = styled.span`
    margin-bottom: 5px;
`;
const Price = styled.span<{ salePercent }>`
    ${(props) => props.salePercent && 'text-decoration: line-through;'};
    ${(props) => props.salePercent && 'color: #888;'};
    ${(props) => props.salePercent && 'font-size: 10px;'};
`;


export default function GoodsListItem(prop: Prop) {
    const { listItem, listIndex } = prop;
    const { id, title, price, src, salePercent, date, viewCount, isGreen } =
        listItem;
    return (
        <ListItemWrap>
            <ContentWrap>
                <div>
                    {src ? (
                        <Image src={src} alt='' objectFit='cover' placeholder="blur" layout="fill" />
                    ) : (
                        <img src='' alt='' />
                    )}
                    <TagWrap>
                        {viewCount > 1000 && <BestTag>BEST</BestTag>}
                        {isGreen && <GreenTag>GREEN</GreenTag>}
                        {getDateSubCount(date) < 10 && <NewTag>NEW</NewTag>}
                        {salePercent > 0 && <SaleTag>SALE</SaleTag>}
                    </TagWrap>
                </div>
                <div>
                    {salePercent > 0 && (
                        <SalePercent>{salePercent}%</SalePercent>
                    )}
                    <ContentTitle>{title}</ContentTitle>
                    <Price salePercent={salePercent}>
                        {price.toLocaleString('ko-KR')}원
                        {price === 0 && '. 오래오래 공짜!'}
                    </Price>
                    {salePercent > 0 && (
                        <span>
                            {getSalePrice(price, salePercent).toLocaleString('ko-KR')}원
                            {price === 0 && '. 오래오래 공짜!'}
                        </span>
                    )}
                </div>
            </ContentWrap>
        </ListItemWrap>
    );
}
GoodsListItem.defaultProps = {};
