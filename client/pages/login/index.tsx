import styled from 'styled-components';
import LoginForm from 'components/login';
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Login/> =========================================================== */
const LoginWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Login() {
    return (
        <LoginWrap>
            <LoginForm />
        </LoginWrap>
    );
}
Login.defaultProps = {};
