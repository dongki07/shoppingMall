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
                        <h2>Testing</h2>
                    </Link>
                </div>
                <div className={style.headerMenu}>
                    {loginStatus()}
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
                        <li><Link to={`/menu/ramen`}>라면</Link></li>
                        <li><Link to={`/menu/drink`}>음료수</Link></li>
                        <li><Link to={`/menu/fruVeg`}>과일/채소류</Link></li>
                        <li><Link to={`/menu/appliance`}>가전제품</Link></li>
                        <li><Link to={`/menu/etc`}>기타</Link></li>
                    </ul>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.mainTop}>
                    <h2>인기 상품<span style={{color:"red"}}>(2025.06.25 ~ 2025.07.01)</span></h2>
                    <div className={style.mainImg}>
                        <ul>
                            <li><Link to="/info/19"><img src="/images/drink/bananamilk.jpg" alt="bananamilk" /> <span>바나나맛 우유 | 34,000,000매</span></Link></li>
                            <li><Link to="/info/15"><img src="/images/drink/monster.jpg" alt="monster" /> <span>몬스터 에너지 | 15,300,000매</span></Link></li>
                            <li><Link to="/info/11"><img src="/images/drink/coke.jpg" alt="coke" /> <span>코카콜라 | 12,540,000매</span></Link></li>
                            <li><Link to="/info/12"><img src="/images/drink/pepsi.jpg" alt="pepsi" /> <span>펩시 | 12,360,000매</span></Link></li>
                            <li><Link to="/info/18"><img src="/images/drink/delmontPodo.jpg" alt="delmontPodo" /> <span>델몬트 (포도) | 10,200,000매</span></Link></li>
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
                            {shopData.slice(0, 5).map(data => {
                                return(
                                    <li key={data.id}>
                                        <a href="#">
                                            <div className={style.shopmenuImg}><img src={`/images/${data.url}${data.ext}`} alt="Mytrapcard" /></div>
                                            <div className={style.shopmenuSub}>
                                                <h2>{data.title}</h2>
                                                {data.sale != 0 ?
                                                    <p><span>{data.sale}%</span> | ₩{data.cost.toLocaleString()}</p> :
                                                    <p>₩{data.cost.toLocaleString()}</p>}
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopMain;