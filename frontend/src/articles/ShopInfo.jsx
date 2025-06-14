import { Link } from "react-router-dom";
import style from "../styles/ShopInfo.module.css";
import { useState } from "react";

function ShopInfo() {
    const [cost, setCost] = useState(12000);

    const handleChange = (e) => {
        const target = e.target.value;
        setCost(target > 0 && target != "" ? target * 12000 : 12000);
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
                <div className={style.mainInfo}>
                    <div className={style.infoImg}>
                        <a href="#"><img src="/images/ChileMan.png" alt="ChileMan"></img></a>
                    </div>
                    <div className={style.infoSet}>
                        <div className={style.setTitle}>
                            <h2>ChileMan</h2>
                        </div>
                        <div className={style.setSubTitle}>
                            <p>한 칠레인이 일본에 놀러와 일본 택시를 보고 <br/>
                            너무 감동적인 나머지 상상도 못한 포즈를 취한 장면</p>
                        </div>
                        <div className={style.setInput}>
                            <ul>
                                <li><p><span>10%</span> | {cost}원</p></li>
                                <li><div className={style.inputBuy}>
                                <input type="number" placeholder="수량" name="cost" onChange={handleChange} />
                                <button type="button" onClick={() => console.log(cost)}>구매?</button></div></li>
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