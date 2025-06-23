import style from "../styles/Success.module.css";
import { Link } from "react-router-dom";

function Success() {
    return(
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to='/main'>
                        <h2>Testing</h2>
                    </Link>
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
                <div className={style.mainImg}>
                    <i class="fa-solid fa-check"></i>
                </div>
                <div className={style.mainTitle}>
                    <h2>결제가 정상적으로 처리되었습니다.</h2>
                    <p>홈 화면으로 돌아가실려면 <Link to="/main"><b>back to main</b></Link>을 클릭하세요.</p>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default Success;