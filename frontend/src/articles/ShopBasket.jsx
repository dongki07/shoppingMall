import style from "../styles/ShopBasket.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function ShopBasket() {
    const { shopData, basket, addBasket } = useContext(DataContext);
    const [qua, setQua] = useState(1);

    const handleChange = (e) => {
        console.log(basket);
        let quantity  = e.target.value;
        const minValue = 0;
        const maxValue = 1000;

        if(quantity == "" || quantity <= minValue){
            quantity = 0;
        }else{
            if(quantity > maxValue){
                quantity = maxValue;
                e.target.value = 1000;
            }
            console.log("정상 작동");
        }
        setQua(Number(quantity));
    }

    const setQuantity = (id, e) => {
        const target = qua * e;
        addBasket(id, target);
    }

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
                <div className={style.basketMain}>    
                    <div className={style.mainTitle}>
                        <h2>장바구니</h2>
                    </div>
                    <div className={style.mainList}>
                        <ul>
                            {/* 장바구니 목록  */}
                            {basket.map(basket => {
                                const data = shopData.find(shop => shop.id == basket.id);
                                return(
                                    <li key={basket.id}>
                                        <div className={style.listImg}>
                                            <a href="#"><img src={`/images/${data.url}${data.ext}`} alt={`${data.url}`} /></a>
                                        </div>
                                        <div className={style.listTitle}>
                                            <h2>{data.title}</h2>
                                            <ul>
                                                <li><span>{data.sale}%</span></li>
                                                <li>|</li>
                                                <li>{data.cost}원</li>
                                                <li>|</li>
                                                <li>수량: {basket.qua}</li>
                                            </ul>
                                        </div>
                                        <div className={style.listqua}>
                                            <div className={style.setqua}>
                                                <input type="number" placeholder="수량" onChange={handleChange}/>
                                            </div>
                                            <div className={style.setinde}>
                                                <input type="button" className={style.inc} value="추가" onClick={() => setQuantity(basket.id, 1)}/>
                                                <input type="button" className={style.dec} value="삭제" onClick={() => setQuantity(basket.id, -1)}/>
                                            </div>
                                        </div>
                                        <div className={style.listClose}>
                                            <a href="#">X</a>
                                        </div>
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

export default ShopBasket;