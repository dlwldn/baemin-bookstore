import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../asset/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { logout } from 'store/module/user';
import router from 'next/router';
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <ActionButtons/> =========================================================== */
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

        > span:hover {
            cursor: pointer;
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
        > span:last-of-type {
            padding-right: 0;
        }
        > span:last-of-type::after {
            content: '';
            display: none;
        }
    }
`;

export default function ActionButtons() {
    const { id } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const _onClickLogout = () => {
        if (id) {
            setTimeout(()=> dispatch(logout()), 1000);
            router.reload();
        }
    };

    return (
        <ActionButtonsWrap>
            <Image src={Logo} width={156} />
            <div>
                <Link href={id ? '/' : '/login'}>
                    <span onClick={_onClickLogout}>
                        {id ? '로그아웃' : '로그인'}
                    </span>
                </Link>
                {/* <Link href='/register'>
                    <span>회원가입</span>
                </Link> */}
                <Link href='/'>
                    <span>마이페이지</span>
                </Link>
                <Link href='/'>
                    <span>장바구니</span>
                </Link>
            </div>
        </ActionButtonsWrap>
    );
}
ActionButtons.defaultProps = {};
