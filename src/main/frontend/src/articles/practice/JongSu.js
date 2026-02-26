import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/practiceSheet/JongSu.module.css";
import { Link } from "react-router-dom";

function JongSu() {
    const [waterAble, setWaterAble] = useState(false);
    const [water, setWater] = useState(0);

    const switchTurn = () => {
        setWaterAble(!waterAble);
    }

    useEffect(() => {
        if(!waterAble) return;

        const test = setInterval(() => {
            if(!waterAble) clearInterval(test);
            setWater(prev => prev + 10);
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
                            <li>
                                <a href="#" onClick={switchTurn}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>물!</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => alert("잘 된다")}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>물!</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => alert("잘 된다")}>
                                    <div className={style.moduleImg}>z</div>
                                    <p>물!</p>
                                </a>
                            </li>
                        </ul>
                        <div className={style.moduleCheck} style={{backgroundColor: waterAble ? "green" : "red"}}>
                        물 활성화: {waterAble ? "ON" : "OFF"}, 물: {water}ml</div>
                    </div>
                    <div className={style.mainCenter}></div>
                    <div className={style.mainBottom}></div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default JongSu;