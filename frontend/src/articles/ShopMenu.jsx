import style from "../styles/ShopMenu.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ShopMenu() {
    const {id} = useParams();
    const [shopData, setShopData] = useState([
        {
            "id": 1,
            "title": "My Trap Card",
            "cost": 125000,
            "sale": 10,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 2,
            "title": "Chile Man",
            "cost": 65000,
            "sale": 15,
            "url": "ChileMan",
            "ext": ".png"
        }, {
            "id": 3,
            "title": "GgaZziZzu",
            "cost": 25000,
            "sale": 10,
            "url": "Ggazzizzu",
            "ext": ".png"
        }, {
            "id": 4,
            "title": "JongWon-Back",
            "cost": 17500,
            "sale": 5,
            "url": "Backjongwon",
            "ext": ".png"
        }, {
            "id": 5,
            "title": "Chile Man",
            "cost": 65000,
            "sale": 15,
            "url": "ChileMan",
            "ext": ".png"
        }
    ]);

    const targetData = shopData.find(data => data.id == id);
    useEffect(() => {
        console.log("id가 변경됐다");
    }, [id]);

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
                <div className={style.basket}>
                    <img src="/images/Basketicon.png" alt="basket" />
                </div>
                <div className={style.shopmenu}>
                    <div className={style.shopmenuTitle}>
                        <ul>
                            <li><h2>상품 메뉴 {targetData.id}</h2></li>
                        </ul>
                    </div>
                    <div className={style.shopmenuList}>
                        <ul>
                            <li>
                                <Link to="/menu/info">
                                    <div className={style.shopmenuImg}><img src={`/images/${targetData.url}${targetData.ext}`} alt={targetData.url} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{targetData.title}</h2>
                                        <p><span>{targetData.sale}%</span> | {targetData.cost}원</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${targetData.url}${targetData.ext}`} alt={targetData.url} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{targetData.title}</h2>
                                        <p><span>{targetData.sale}%</span> | {targetData.cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${targetData.url}${targetData.ext}`} alt={targetData.url} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{targetData.title}</h2>
                                        <p><span>{targetData.sale}%</span> | {targetData.cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${targetData.url}${targetData.ext}`} alt={targetData.url} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{targetData.title}</h2>
                                        <p><span>{targetData.sale}%</span> | {targetData.cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${targetData.url}${targetData.ext}`} alt={targetData.url} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{targetData.title}</h2>
                                        <p><span>{targetData.sale}%</span> | {targetData.cost}원</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
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

export default ShopMenu;