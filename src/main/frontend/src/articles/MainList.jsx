import { useContext, useEffect } from "react";
import style from "../styles/ShopMain.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

function ShopMain() {
    const { shopData, login, loginStatus } = useContext(DataContext);
    console.log(shopData);

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
            <div className={style.main}>
                <div className={style.mainTop}>
                    <h2>Spring이란</h2>
                </div>
                <div className={style.mainList}>
                    <h2></h2>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopMain;