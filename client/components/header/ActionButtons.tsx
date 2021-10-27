import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../asset/images/logo.png'

/* Constants =========================================================== */
const ActionButtonsWrap = styled.div`
    height: 45px;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    padding: 0 8%;
    display: flex;
    justify-content: space-between;

    > div {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        > span {
            font-size: 12px;
            padding: 0 10px 0 10px;
            color: #717171;
            font-weight: 500;
            position: relative;
        }
        > span::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 1px;
            height: 7px;
            background: #ddd;
        }
        > span:nth-of-type(4) {
            padding-right: 0;
        }
        > span:nth-of-type(4)::after {
            content: '';
            display: none;
        }
    }
`;
/* Prop =========================================================== */
type Prop = {};
/* <ActionButtons/> =========================================================== */
export default function ActionButtons() {
    return (
        <ActionButtonsWrap>
            <Image src={Logo} width={156} />
            <div>
                <span>로그인</span>
                <span>회원가입</span>
                <span>마이페이지</span>
                <span>장바구니</span>
            </div>
        </ActionButtonsWrap>
    );
}
ActionButtons.defaultProps = {};
