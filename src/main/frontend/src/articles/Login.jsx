import { useContext, useState } from "react";
import style from "../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./DataContext";

function Login() {
    const navigate = useNavigate();
    const { login, activeLogin } = useContext(DataContext);
    const [error, setError] = useState(false);
    const [stat, setStat] = useState({
        "id": "",
        "passwd": ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStat({...stat, [name]: value});
    }

    const handleLogin = () => {
        const loginTarget = login.find(data => data.id == stat.id && data.passwd == stat.passwd);
        if(loginTarget != undefined){
            activeLogin(loginTarget);
            alert("로그인이 완료되었습니다");
            navigate("/main");
        }else{
            setError(true);
        }
    }

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
                                <input type="text" onChange={handleChange} name="id"/>
                            </li>
                            <li>
                                <h2>비밀번호</h2>
                                <input type="text" onChange={handleChange} name="passwd"/>
                            </li>
                        </ul>
                    </div>
                    {error && <div className={style.error}><h2>아이디 또는 비밀번호가 맞지 않습니다.</h2></div>}
                    <div className={style.loginButton}>
                        <input type="button" value="로그인" onClick={handleLogin}/>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default Login;