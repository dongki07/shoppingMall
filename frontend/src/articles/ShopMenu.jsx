import style from "../styles/ShopMenu.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";

function ShopMenu() {
    const {id} = useParams();
    const { shopData } = useContext(DataContext);
    const targetData = shopData.find(data => data.id == id);
    useEffect(() => {
        console.log("id가 변경됐다");
    }, [id]);

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
                <div className={style.basket}>
                    <Link to="/basket"><img src="/images/Basketicon.png" alt="basket" /></Link>
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
                                <Link to={`/info/${targetData.id}`}>
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