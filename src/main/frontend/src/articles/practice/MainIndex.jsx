import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/practiceSheet/MainList.module.css";
import { Link, useParams } from "react-router-dom";

function MainIndex() {
    const { id } = useParams();
    const [test, setTest] = useState([]);
    const [data, setData] = useState({id: 2, name: "testing"});

    const getData = async () => {
        try{
            const response = await axios.get("http://localhost:9090/main/list");
            console.log(response.data);
            setTest(response.data);
        }catch(e) {
            console.log("오류 남 ㅅㄱ: ", e);
        }
    }

    const postData = async () => {
        try{
            const response = await axios.post("http://localhost:9090/main/create", data);
            console.log(response);
        }catch(e) {
            console.log("오류 남 ㅅㄱ: ", e);
        }
    }

    return(
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to='/main'>
                        <h2>Testing {id}</h2>
                    </Link>
                </div>
            </div>
            <div className={style.nav}>
                <div className={style.menuList}>
                    <ul>
                        <li><Link to={`/menu/ramen`}>1 Stack</Link></li>
                        <li><Link to={`/menu/drink`}>2 Stack</Link></li>
                        <li><Link to={`/menu/ramen`}>3 Stack</Link></li>
                        <li><Link to={`/menu/drink`}>4 Stack</Link></li>
                        <li><Link to={`/menu/ramen`}>5 Stack</Link></li>
                    </ul>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.mainTitle}>
                    <h2>Spring이란</h2>
                    <div className={style.mainBtn}>
                        <button type="button" onClick={getData}>GET 버튼</button>
                        <button type="button" onClick={postData}>POST 버튼</button>
                    </div>
                </div>
                <div className={style.mainList}>
                    <h2>{id}</h2>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default MainIndex;