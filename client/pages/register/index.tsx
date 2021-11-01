/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {}
/* <Register/> =========================================================== */
export default function Register() {
    const clientID = `아이디`;
    const oAuthURL = `url`

    const _onClickGoogle = () => {
        window.location.assign(oAuthURL);
    }

    return (
        <div>
            <div>
              <button onClick={_onClickGoogle}>구글 로그인</button>
            </div>  
        </div>
    )
}
Register.defaultProps = {}