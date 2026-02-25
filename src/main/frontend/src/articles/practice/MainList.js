import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/practiceSheet/MainList.module.css";
import { Link } from "react-router-dom";

function MainList() {
    const [test, setTest] = useState([]);
    const [data, setData] = useState({id: null, name: "testing"});

    const [nextNum, setNextNum] = useState(1);

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

    const updateData = async () => {
        const response = await axios.post('http://localhost:9090/main/update', data);
        console.log(response);
        getData();
    }

    const deleteData = async (e) => {
        const response = await axios.delete(`http://localhost:9090/main/delete/${e}`);
        getData();
    }

    const inputChange = (e) => {
        const test = !isNaN(e.target.value) ? Number(e.target.value) : e.target.value;
        setData(data => ({
            ...data,
            [e.target.name]: test
        }));
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const keyInput = (e) => {
            switch(e.key) {
                case 'a':
                    if(nextNum > 1) setNextNum(prev => prev - 1);
                    break;

                case 'd':
                    if(nextNum < 6) setNextNum(prev => prev + 1);
                    break;

                default:
                    console.log("?");
            }
        }
        window.addEventListener("keydown", keyInput);

        return () => window.removeEventListener("keydown", keyInput);
    }, [nextNum]);

    return(
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to='/main'>
                        <h2>Testing?</h2>
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
            <div className={style.main} style={{background:`url('/images/easter/nightsky.png') no-repeat center`, backgroundSize:"100% 100%"}}>
                <div className={style.mainTitle}>
                    <h2>Spring이란</h2>
                </div>
                <div className={style.mainList}>
                    <h2>1. 게시물</h2>
                    {/* <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>제목</th>
                                <th>자</th>
                                <th>삭제빵</th>
                            </tr>
                        </thead>
                        <tbody>
                            {test.map(data => (
                                <tr key={data.id}>
                                    <td width="25%">{data.id}</td>
                                    <td width="55%"><Link to={`/index/${data.id}`}>{data.name}</Link></td>
                                    <td width="10%"><button type="button" onClick={() => setData(prev => ({...prev, id: data.id}))}>수정</button></td>
                                    <td width="10%"><button type="button" onClick={() => deleteData(data.id)}>삭제</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                    <div className={style.dataList}>
                        <ul style={{transform:`translateX(${(600 + (-600 * (nextNum - 1))) + 'px'})`}}>
                            {test.map(data => (
                                <li key={data.id}>
                                    <div className={data.id == nextNum ? `${style.active}` : `${style.disActive}`}>
                                        <h2>{data.id}. {data.name}</h2>
                                        <p>Testing {data.content}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>2. 등록</h2>
                    <div className={style.mainBtn}>
                        <button type="button" onClick={getData}>GET 버튼</button>
                        <button type="button" onClick={postData}>POST 버튼</button>
                    </div>
                    <ul>
                        <li>제목: <input type="text" name="name" onChange={inputChange} /></li>
                        <li><button type="button" onClick={() => updateData()}>수정 전용 버튼</button></li>
                    </ul>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default MainList;