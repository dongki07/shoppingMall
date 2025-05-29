import style from "../styles/ShopMain.module.css";

function ShopMain() {
    return(
        <div>
            <div className={style.header}>
                <h2>Testing</h2>
            </div>
            <div className={style.main}>
                <div className={style.mainTop}>
                    <div className={style.mainImg}>
                        <ul>
                            <li><a href="#"><img src="/images/Mytrapcard.png" alt="Mytrapcard" /></a></li>
                            <li><a href="#"><img src="/images/ChileMan.png" alt="ChileMan" /></a></li>
                            <li><a href="#"><img src="/images/Backjongwon.png" alt="Backjongwon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.menu}>
                    <div className={style.menuTitle}>
                        <ul>
                            <li><h2>상품 메뉴</h2></li>
                            <li><a href="#">더보기+</a></li>
                        </ul>
                    </div>
                    <div className={style.menuList}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopMain;