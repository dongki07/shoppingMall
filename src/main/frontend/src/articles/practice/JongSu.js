import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/practiceSheet/JongSu.module.css";
import { Link } from "react-router-dom";

function JongSu() {
    const [waterAble, setWaterAble] = useState(false);
    const [waterMode, setWaterMode] = useState(1);
    const [totalWater, setTotalWater] = useState(0);
    const [ice, setIce] = useState(0);
    const [cupAble, setCupAble] = useState(false);

    const [water, setWater] = useState([
        {id: 1, name: "온수", qua: 0},
        {id: 2, name: "정수", qua: 0},
        {id: 3, name: "냉수", qua: 0}
    ]);

    const switchTurn = () => {
        setWaterAble(!waterAble);
    }

    const switchWater = (e) => {
        setWaterMode(e);
    }

    const addIce = () => {
       setIce(prev => prev + 1);
    }

    const switchCup = (e) => {
        setCupAble(!cupAble);
    }

    useEffect(() => {
        if(!waterAble) return;

        if(!cupAble) {
            alert("컵이 없는데요?");
            setWaterAble(!waterAble);
            return;
        }

        const test = setInterval(() => {
            if(!waterAble) clearInterval(test);
            setWater(data => data.map(data => data.id === waterMode ? {...data, qua: data.qua + 10} : data));
            setTotalWater(prev => prev + 10);
        }, 100);

        return () => clearInterval(test);
    }, [waterAble]);

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
                    <h2>?</h2>
                </div>
                <div className={style.jongsugi}>
                    <div className={style.mainModule}>
                        <h2>정ㅅㅜ기</h2>
                        <ul>
                        {water.map(data => (
                            <li key={data.id}>
                                <a href="#" onClick={() => switchWater(data.id)}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>{data.name} ({data.qua}ml)</p>
                                </a>
                            </li>
                        ))}
                        </ul>
                        <ul>
                            <li>
                                <a href="#" onClick={switchTurn}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>물</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={addIce}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>얼음</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={switchCup}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>컵</p>
                                </a>
                            </li>
                        </ul>
                        <div className={style.moduleCheck} style={{backgroundColor: waterAble ? "green" : "red"}}>
                        물 활성화: {waterAble ? "ON" : "OFF"}</div>
                    </div>
                    <div className={style.mainCenter}>
                        {cupAble && <div className={style.cup}>
                            <h2>컵</h2>
                            <p>물: {totalWater}ml <br/> 얼음: {ice}g</p>
                        </div>}
                    </div>
                    <div className={style.mainBottom}></div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default JongSu;