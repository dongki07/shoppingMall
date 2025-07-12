import style from "../styles/ShopInfo.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function ShopInfo() {
    const { shopData, addBasket, login, loginStatus, activeBasket } = useContext(DataContext);
    
    const { id } = useParams();
    const targetData = shopData.find(data => data.id == id);
    const [qua, setQua] = useState(1);
    const handleChange = (e) => {
        let quantity = e.target.value;
        const minValue = 0;
        const maxValue = 1000;

        if(quantity == "" || quantity <= minValue){
            quantity = 1;
        }else{
            if(quantity > maxValue){
                quantity = maxValue;
                e.target.value = 1000;
            }
            console.log("정상 작동");
        }
        setQua(Number(quantity));
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
                <div className={style.basket}>
                    <a href="#" onClick={activeBasket}><img src="/images/Basketicon.png" alt="basket" /></a>
                </div>
                <div className={style.mainInfo}>
                    <div className={style.infoImg}>
                        <a href="#"><img src={`/images/${targetData.url}${targetData.ext}`} alt="test"></img></a>
                    </div>
                    <div className={style.infoSet}>
                        <div className={style.setTitle}>
                            <h2>{targetData.title}</h2>
                        </div>
                        <div className={style.setSubTitle}>
                            <p>{targetData.subTitle}</p>
                            <p>판매량: {targetData.total.toLocaleString()}</p>
                        </div>
                        <div className={style.setInput}>
                            <ul>
                                <li><p><span>{targetData.sale}%</span> | ₩{(targetData.cost * (1 - 0.01 * targetData.sale) * qua).toLocaleString()}</p></li>
                                <li><div className={style.inputBuy}>
                                <input type="number" placeholder="수량" name="quantity" onChange={handleChange} />
                                <button type="button" onClick={() => addBasket(targetData.id, qua)}>담기</button></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopInfo;