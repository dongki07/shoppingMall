import style from "../styles/ShopMenu.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";

function ShopMenu() {
    const { shopData, login, loginStatus, activeBasket } = useContext(DataContext);
    const { type } = useParams();
    const filterData = shopData.filter(data => data.type == type);
    useEffect(() => {
        console.log("type가 변경됐다");
    }, [type]);

    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const groupData = chunkArray(filterData, 5);
    console.log(groupData);

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
                <div className={style.basket}>
                    <a href="#" onClick={activeBasket}><img src="/images/Basketicon.png" alt="basket" /></a>
                </div>
                <div className={style.shopmenu}>
                    <div className={style.shopmenuTitle}>
                        <ul>
                            <li><h2>상품 메뉴</h2></li>
                        </ul>
                    </div>
                    <div className={style.shopmenuList}>
                        {groupData.map((group, index) => (
                            <ul key={index}>
                                {group.slice(0, 5).map(data => (
                                    <li key={data.id}>
                                        <Link to={`/info/${data.id}`}>
                                            <div className={style.shopmenuImg}><img src={`/images/${data.url}${data.ext}`} alt={data.url} /></div>
                                            <div className={style.shopmenuSub}>
                                                <h2>{data.title}</h2>
                                                {data.sale != 0 ?
                                                <p><span>{data.sale}%</span> | ₩{(data.cost * (1 - 0.01 * data.sale)).toLocaleString()}</p> :
                                                <p>₩{data.cost.toLocaleString()}</p>}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopMenu;