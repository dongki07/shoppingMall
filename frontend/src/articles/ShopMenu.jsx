import style from "../styles/ShopMenu.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ShopMenu() {
    const {id} = useParams();
    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");

    useEffect(() => {
        let target = "";
        let titleTarget = "";
        let costTarget = "";
        switch(id) {
            case "1":
                target = "Mytrapcard";
                titleTarget = "My Trap Card";
                costTarget = 125000;
                break;
            
            case "2":
                target = "ChileMan";
                titleTarget = "Chile Man";
                costTarget = 65000;
                break;

            case "3":
                target = "Ggazzizzu";
                titleTarget = "GgaZziZzu";
                costTarget = 25000;
                break;

            case "4":
                target = "Backjongwon";
                titleTarget = "JongWon-Back";
                costTarget = 17500;
                break;
            
            default:
                target = "None";
                titleTarget = "None";
                costTarget = 0;
                break;
        }
        setImgUrl(target);
        setTitle(titleTarget);
        setCost(costTarget);
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
                            <li><h2>상품 메뉴 {id}</h2></li>
                        </ul>
                    </div>
                    <div className={style.shopmenuList}>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${imgUrl}.png`} alt={imgUrl} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{title}</h2>
                                        <p><span>20%</span> | {cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${imgUrl}.png`} alt={imgUrl} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{title}</h2>
                                        <p><span>20%</span> | {cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${imgUrl}.png`} alt={imgUrl} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{title}</h2>
                                        <p><span>20%</span> | {cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${imgUrl}.png`} alt={imgUrl} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{title}</h2>
                                        <p><span>20%</span> | {cost}원</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={style.shopmenuImg}><img src={`/images/${imgUrl}.png`} alt={imgUrl} /></div>
                                    <div className={style.shopmenuSub}>
                                        <h2>{title}</h2>
                                        <p><span>20%</span> | {cost}원</p>
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