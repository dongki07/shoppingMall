import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/practiceSheet/JongSu.module.css";
import { Link } from "react-router-dom";

function JongSu() {
    const [test, setTest] = useState([]);

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
                <div className={style.mainModule}>

                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default JongSu;