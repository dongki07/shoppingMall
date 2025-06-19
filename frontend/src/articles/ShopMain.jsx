import { useContext } from "react";
import style from "../styles/ShopMain.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

function ShopMain() {
    const { shopData, basket } = useContext(DataContext);
    console.log(shopData);
    return(
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <h2>Testing</h2>
                </div>
                <div className={style.headerMenu}>
                </div>
            </div>
            <div className={style.nav}>
                {/* <div className={style.search}>
                    <input type="text" placeholder="검색어를 입력하세요"/>
                    <div className={style.searchIcon}>
                        <img src="/images/Searchicon.png" alt="search" />
                    </div>
                </div> */}
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
                <div className={style.mainTop}>
                    <div className={style.mainImg}>
                        <ul>
                            <li><a href="#"><img src="/images/Mytrapcard.png" alt="Mytrapcard" /></a></li>
                            <li><a href="#"><img src="/images/ChileMan.png" alt="ChileMan" /></a></li>
                            <li><a href="#"><img src="/images/Backjongwon.png" alt="Backjongwon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.shopmenu}>
                    <div className={style.shopmenuTitle}>
                        <ul>
                            <li><h2>상품 메뉴</h2></li>
                            <li><Link to={`/menu/1`}>더보기+</Link></li>
                        </ul>
                    </div>
                    <div className={style.shopmenuList}>
                        <ul>
                            {shopData.map(data => {
                                return(
                                    <li key={data.id}>
                                        <a href="#">
                                            <div className={style.shopmenuImg}><img src="/images/Mytrapcard.png" alt="Mytrapcard" /></div>
                                            <div className={style.shopmenuSub}>
                                                <h2>{data.title}</h2>
                                                <p><span>{data.sale}%</span> | {data.cost}원</p>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
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