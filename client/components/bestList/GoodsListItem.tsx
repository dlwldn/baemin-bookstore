import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { getDateSubCount } from '../../lib/util/util';
/* Constants =========================================================== */
const ListItemWrap = styled.li`
    
`
const ContentWrap = styled.div`
    height: 100%;
    > div:nth-of-type(1) {
        width: 100%;
        height: 80%;
        background: #eee;
        position: relative;

        > div {
            position: absolute;
            top: 10px;
            left: 5px;

            > span {
                padding: 5px;
                font-size: 15px;
                border-radius: 5px;
                margin-right: 5px;
            }
        }
    }

    > div:nth-of-type(1):hover {
        cursor: pointer;
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

        > span:nth-of-type(1) {
            margin-bottom: 5px;
        }
    }
`

const BestTag = styled.span`
    background: #000;
    color: #fff;
`
const GreenTag = styled.span`
    background: #178a17;
    color: #fff;
`
const NewTag = styled.span`
    background: #36bad1;
    color: #fff;
`
const SaleTag = styled.span`
    background: #ff4646;
    color: #fff;
`

/* Prop =========================================================== */
type Prop = {
    listItem: GoodsDType;
    listIndex: number;
}
/* <GoodsListItem/> =========================================================== */
export default function GoodsListItem(prop: Prop) {
    const { listItem, listIndex } = prop;
    const { title, price, src, salePercent, date, viewCount, isGreen } = listItem;
    return (
        <ListItemWrap>
            <ContentWrap>
                <div>
                    {/* <Image src={''} alt=''/> */}
                    <div>
                        {viewCount > 1000 && <BestTag>BEST</BestTag>}
                        {isGreen && <GreenTag>GREEN</GreenTag>}
                        {getDateSubCount(date) < 10 && <NewTag>NEW</NewTag>}
                        {salePercent > 0 && <SaleTag>SALE</SaleTag>}
                    </div>
                </div>
                <div>
                    <span>{title}</span>
                    <span>{price.toLocaleString('ko-KR')}원{price === 0 && '. 오래오래 공짜!' }</span>
                </div>
            </ContentWrap>
        </ListItemWrap>
    )
}
GoodsListItem.defaultProps = {}