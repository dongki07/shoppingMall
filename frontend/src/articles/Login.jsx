import { useContext } from "react";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

function Login() {
    return(
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to='/main'>
                        <h2>Testing</h2>
                    </Link>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.login}>
                    <div className={style.loginTitle}>
                        <h2>로그인</h2>
                    </div>
                    <div className={style.loginInput}>
                        <ul>
                            <li>
                                <h2>아이디</h2>
                                <input type="text" />
                            </li>
                            <li>
                                <h2>비밀번호</h2>
                                <input type="text" />
                            </li>
                        </ul>
                    </div>
                    <div className={style.loginButton}>
                        <input type="button" value="로그인" onClick={() => console.log("로그인 됐는데?")}/>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default Login;