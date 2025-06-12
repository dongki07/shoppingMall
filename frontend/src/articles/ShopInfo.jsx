import { Link } from "react-router-dom";
import style from "../styles/ShopInfo.module.css";

function ShopInfo() {
    return(
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <h2>Testing</h2>
                </div>
                <div className={style.headerMenu}>
                    <Link to='/main'>
                        <h2>back to main</h2>
                    </Link>
                </div>
            </div>
            <div className={style.nav}>
                <div className={style.menuList}>
                    <ul>
                        <li><Link to={`/menu/1`}>메뉴1</Link></li>
                        <li><Link to={`/menu/2`}>메뉴2</Link></li>
                        <li><Link to={`/menu/3`}>메뉴3</Link></li>
                        <li><Link to={`/menu/4`}>메뉴4</Link></li>
                        <li><Link to={`/menu/5`}>메뉴5</Link></li>
                    </ul>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.mainInfo}>
                    <div className={style.infoImg}>
                        <a href="#"><img src="/images/ChileMan.png" alt="ChileMan"></img></a>
                    </div>
                    <div className={style.infoSet}>
                        <h2>ChileMan</h2>
                        <p><span>10%</span> | 12000원</p>
                        <button type="button">구매?</button>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopInfo;