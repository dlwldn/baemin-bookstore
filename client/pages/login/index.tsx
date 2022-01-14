import styled from 'styled-components';
import LoginForm from 'components/login';
/* Constants =========================================================== */
const LoginWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
/* Prop =========================================================== */
type Prop = {};
/* <Login/> =========================================================== */
export default function Login() {
    return (
        <LoginWrap>
            <LoginForm />
        </LoginWrap>
    );
}
Login.defaultProps = {};
