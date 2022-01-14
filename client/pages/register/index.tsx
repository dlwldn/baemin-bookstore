import styled from 'styled-components';

/* Constants =========================================================== */
const CLIENT_ID = ``;
const OAUTH_URL = ``;
/* Prop =========================================================== */
type Prop = {};
/* <Register/> =========================================================== */
const RegisterWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        padding: 15px;
        width: 100%;
        max-width: 600px;
        height: 500px;
        background-color: #67d6d3;
        border-radius: 10px;
    }
`;

const FormWrap = styled.form`
    > div {
        margin-bottom: 15px;

        > label {
            display: inline-block;
            min-width: 100px;
        }

        > input {
            width: 100%;
        }
    }

    > div:nth-of-type(4) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const OAuthWrap = styled.div``;

export default function Register() {
    const _onClickGoogle = () => {
        window.location.assign(OAUTH_URL);
    };

    return (
        <RegisterWrap>
            <div>
                <FormWrap action=''>
                    <div>
                        <label htmlFor=''>아이디</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label htmlFor=''>비밀번호</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label htmlFor=''>비밀번호 확인</label>
                        <input type='text' />
                    </div>
                    <div>
                        <button>회원가입하기</button>
                    </div>
                </FormWrap>
                <OAuthWrap>
                    <button onClick={_onClickGoogle}>G</button>
                    <button onClick={() => {}}>Naver</button>
                </OAuthWrap>
            </div>
        </RegisterWrap>
    );
}
Register.defaultProps = {};
