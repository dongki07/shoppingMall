import style from "../styles/ShopBasket.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ShopBasket() {
    const [qua, setQua] = useState(1);
    const [quaValue, setQuaValue] = useState(0);

    const handleChange = (e) => {
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

        setQuaValue(quantity);
    }

    const setQuantity = (e) => {
        let target = Number(quaValue * e);
        if(qua + target > 1000){
            target = 1000;
        }else{
            target += qua;
        }
        setQua(target);
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
                            <li>
                                <div className={style.listImg}>
                                    <a href="#"><img src="/images/ChileMan.png" alt="img" /></a>
                                </div>
                                <div className={style.listTitle}>
                                    <h2>ChileMan</h2>
                                    <ul>
                                        <li><span>10%</span></li>
                                        <li>|</li>
                                        <li>12000원</li>
                                        <li>|</li>
                                        <li>수량: {qua}</li>
                                    </ul>
                                </div>
                                <div className={style.listqua}>
                                    <div className={style.setqua}>
                                        <input type="number" placeholder="수량" onChange={handleChange}/>
                                    </div>
                                    <div className={style.setinde}>
                                        <input type="button" className={style.inc} value="추가" onClick={() => setQuantity(1)}/>
                                        <input type="button" className={style.dec} value="삭제" onClick={() => setQuantity(-1)}/>
                                    </div>
                                </div>
                                <div className={style.listClose}>
                                    <a href="#">X</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopBasket;