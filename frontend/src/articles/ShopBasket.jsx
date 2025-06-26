import style from "../styles/ShopBasket.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState, useRef, useEffect } from "react";
import { DataContext } from "./DataContext";

function ShopBasket() {
    const { shopData, basket, addBasket, deleteBasket, login, loginStatus } = useContext(DataContext);
    const [qua, setQua] = useState(1);
    const [sum, setSum] = useState(0);

    const closeBtnRef = useRef({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        let quantity  = e.target.value;
        const minValue = 0;
        const maxValue = 1000;

        if(quantity == "" || quantity <= minValue){
            quantity = 0;
            e.target.value = "";
        }else{
            if(quantity > maxValue){
                quantity = maxValue;
                e.target.value = 1000;
            }
            console.log("정상 작동");
        }
        setQua(Number(quantity));
    }

    const updateQua = (id, e) => {
        const target = qua * e;
        const targetQua = basket.find(data => data.id == id).qua;
        if(targetQua + target > 0){
            addBasket(id, target);
        }else{
            closeBtnRef.current[id].current.click();
        }
    }
    
    useEffect(() => {
        updateSum();
    }, [basket]);

    const updateSum = () => {
        let allSum = 0;
        basket.map(basket => {
            const target = shopData.find(shop => shop.id == basket.id);
            allSum += target.cost * basket.qua;
        });
        setSum(allSum);
    }

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
                <div className={style.basketMain}>    
                    <div className={style.mainTitle}>
                        <h2>장바구니</h2>
                    </div>
                    <div className={style.mainList}>
                        <ul>
                            {/* 장바구니 목록  */}
                            {basket.length > 0 ? basket.map(basket => {
                                const data = shopData.find(shop => shop.id == basket.id);

                                if(!closeBtnRef.current[basket.id]){
                                    closeBtnRef.current[basket.id] = React.createRef();
                                }

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
                                                <li>₩{data.cost.toLocaleString()}</li>
                                                <li>|</li>
                                                <li>수량: {basket.qua}</li>
                                            </ul>
                                        </div>
                                        <div className={style.listqua}>
                                            <div className={style.setqua}>
                                                <input type="number" placeholder="수량" onChange={handleChange}/>
                                            </div>
                                            <div className={style.setinde}>
                                                <input type="button" className={style.inc} value="추가" onClick={() => updateQua(basket.id, 1)}/>
                                                <input type="button" className={style.dec} value="삭제" onClick={() => updateQua(basket.id, -1)}/>
                                            </div>
                                        </div>
                                        <div ref={closeBtnRef.current[basket.id]} className={style.listClose} onClick={() => deleteBasket(`${basket.id}`)}>
                                            <a href="#">X</a>
                                        </div>
                                    </li>
                                );
                            }) : <div className={style.emptyBasket}>
                                <h2>현재 장바구니에 담긴 상품이 없습니다</h2>
                                <p>상품을 골라서 원하는 만큼 수량을 정해 장바구니에 담으세요</p>
                                <p><Link to="/menu/1">메뉴 바로가기</Link></p>
                            </div>}
                        </ul>
                    </div>
                    {basket.length > 0 && <div className={style.mainResult}>
                        <ul>
                            <li><h2>총 금액: ₩{sum.toLocaleString()}</h2></li>
                            <li><i class="fa-solid fa-truck-fast"></i></li>
                            <li><input type="button" value="결제하기" onClick={() => navigate(`/basket/pay`)} /></li>
                        </ul>
                    </div>}
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopBasket;