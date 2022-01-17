import React from 'react';
import styled from 'styled-components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Card, Input } from 'antd';
import router from 'next/router';

import { ReactComponent as IcoGoogle } from 'asset/logo/google-logo.svg';
/* Constants =========================================================== */
const CLIENT_ID = ``;
const OAUTH_URL = ``;
/* Prop =========================================================== */
type Prop = {};
/* <LoginForm/> =========================================================== */
const LoginFormWrap = styled.form`
    display: flex;
    flex-direction: column;
`;

const CardWrap = styled(Card)`
    margin-bottom: 15px;
    .ant-input-affix-wrapper {
        margin-bottom: 15px;
    }
`;
const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const PlatFormButtonWrap = styled.div`
    text-align: center;
    margin: 30px 0 20px;
`;

const RegisterWrap = styled.p`
    color: gray;
    font-size: 14px;
    font-weight: 300;
    text-align: center;

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default function LoginForm() {
    const _onClickRegister = () => {
        router.push('/register');
    };

    const _onClickGoogleSign = () => {
        window.location.assign(OAUTH_URL);
    };

    return (
        <LoginFormWrap>
            <CardWrap>
                <Input
                    placeholder='아이디'
                    size='large'
                    prefix={<UserOutlined />}
                />
                <Input
                    placeholder='비밀번호'
                    size='large'
                    prefix={<LockOutlined />}
                />
                <ButtonWrap>
                    <Button type='primary'>로그인</Button>
                </ButtonWrap>
                <PlatFormButtonWrap>
                    <Button
                        shape='circle'
                        size='large'
                        title='구글로 로그인하기'
                        onClick={_onClickGoogleSign}
                    >
                        <IcoGoogle />
                    </Button>
                </PlatFormButtonWrap>
            </CardWrap>
            <RegisterWrap onClick={_onClickRegister}>
                아직 회원이 아니신가요? 회원가입
            </RegisterWrap>
        </LoginFormWrap>
    );
}
LoginForm.defaultProps = {};
