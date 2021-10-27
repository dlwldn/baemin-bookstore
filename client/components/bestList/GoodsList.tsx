import React from 'react';
import styled from 'styled-components';
import GoodsListItem from './GoodsListItem';

/* Constants =========================================================== */
const ListWrap = styled.div<{ size }>`
    margin-bottom: 100px;

    & > h2 {
        font-size: 30px;
        margin-bottom: 30px;
    }

    & > ul {
        display: grid;
        grid-template-rows: ${props => props.size && `repeat(${Math.ceil(props.size / 4)}, 346px)`};
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px; 
    }
`
/* Prop =========================================================== */
type Prop = {
    list: GoodsDType[];
    title: '잘나가요' | '새로 나왔어요' | '지금은 할인 중' | '';
}
/* <GoodsList/> =========================================================== */
export default function GoodsList(prop: Prop) {
    const { list, title } = prop;
    const renderListItem = () => list.map((item, idx)=> {
        return (
            <GoodsListItem key={item.id} listItem={item} listIndex={idx}/>
        )
    })

    return (
        <ListWrap size={list.length}>
            {title && <h2>{title}</h2>}
            <ul>
                {renderListItem()}
            </ul>
        </ListWrap>
    )
}

GoodsList.defaultProps = {}