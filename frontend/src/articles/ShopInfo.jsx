import style from "../styles/ShopInfo.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function ShopInfo() {
    const shopData = useContext(DataContext).shopData;
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
        setQua(quantity);
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
                <div className={style.basket}>
                    <Link to="/basket"><img src="/images/Basketicon.png" alt="basket" /></Link>
                </div>
                <div className={style.mainInfo}>
                    <div className={style.infoImg}>
                        <a href="#"><img src={`/images/${targetData.url}${targetData.ext}`} alt="ChileMan"></img></a>
                    </div>
                    <div className={style.infoSet}>
                        <div className={style.setTitle}>
                            <h2>{targetData.title}</h2>
                        </div>
                        <div className={style.setSubTitle}>
                            <p>{targetData.subTitle}</p>
                        </div>
                        <div className={style.setInput}>
                            <ul>
                                <li><p><span>{targetData.sale}%</span> | {targetData.cost * qua}원</p></li>
                                <li><div className={style.inputBuy}>
                                <input type="number" placeholder="수량" name="quantity" onChange={handleChange} />
                                <button type="button" onClick={() => console.log(targetData, qua)}>담기</button></div></li>
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