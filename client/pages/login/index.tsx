import React from 'react';
import styled from 'styled-components';

/* Constants =========================================================== */
const LoginWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginFormWrap = styled.form`
    display: flex;
    flex-direction: column;
`;
/* Prop =========================================================== */
type Prop = {};
/* <Login/> =========================================================== */
export default function Login() {
    return (
        <LoginWrap>
            <LoginFormWrap>
                로그인 <input type='text' />
                비밀번호 <input type='password' />

                <div>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </LoginFormWrap>
        </LoginWrap>
    );
}
Login.defaultProps = {};
