import style from "../styles/ShopPay.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataContext";

function ShopPay() {
    const { shopData, basket, login, loginStatus } = useContext(DataContext);
    const [ sum, setSum ] = useState(0);
     const [activeCard, setActiveCard] = useState(null);
    const cardPay = ["신용카드", "신용/체크 카드", "체크카드"];
    const navigate = useNavigate();

    useEffect(() => {
        updateSum();
    }, []);

    const updateSum = () => {
        let allSum = 0;
        basket.map(basket => {
            const target = shopData.find(shop => shop.id == basket.id);
            allSum += target.cost * basket.qua;
        });
        setSum(allSum);
    }

    const handleCheck = () => {
        navigate("/success");
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
                <div className={style.payMain}>
                    <div className={style.mainTitle}>
                        <h2>결제수단</h2>
                    </div>
                    <div className={style.mainList}>
                        <form name="pay" action="#" method="post">
                            <table width="80%" border="1">
                                <tr>
                                    <th width="10%">상품 ID</th>
                                    <th width="40%">상품명</th>
                                    <th width="10%">할인</th>
                                    <th width="20%">가격</th>
                                    <th width="15%">수량</th>
                                </tr>
                                {basket.map(basket => {
                                    const data = shopData.find(shop => shop.id == basket.id);
                                    return(
                                        <tr key={basket.id}>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td><span>{data.sale}%</span></td>
                                            <td>₩{data.cost.toLocaleString()}</td>
                                            <td>{basket.qua}매</td>
                                        </tr>
                                    );
                                })}
                                {/* <tr>
                                    <td colSpan="3">합계</td>
                                    <td colSpan="2"><b>₩{sum.toLocaleString()}</b></td>
                                </tr> */}
                            </table>
                            <div className={style.payInput}>
                                <div className={style.payCard}>
                                    <h2>결제 방법</h2>
                                    <ul>
                                        {cardPay.map((data, i) => (
                                            <li key={i} className={`${activeCard == i ? style.active : ''}`}>
                                                <a href="#" onClick={() => setActiveCard(i)}>{data}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {activeCard != null && <div className={style.cardDetail}>
                                    <ul>
                                        <li>
                                            <h2>카드사</h2>
                                            <select name="cardCom">
                                                <option value="">카드사 선택</option>
                                                <option value="1">우리은행</option>
                                                <option value="2">기업은행</option>
                                                <option value="3">신한은행</option>
                                                <option value="4">하나은행</option>
                                            </select>
                                        </li>
                                        <li>
                                            <h2>계좌번호</h2>
                                            <input type="text" name="cardNum" placeholder="ex) 0000-000-000000"/>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h2>이메일</h2>
                                            <input type="text" name="email" placeholder="ex) aaaaa@bbb.com"/>
                                            <p>@</p>
                                            <select name="domain">
                                                <option value="">도메인 선택</option>
                                                <option value="1">naver.com</option>
                                                <option value="2">gmail.com</option>
                                                <option value="3">daum.net</option>
                                                <option value="4">nate.com</option>
                                                <option value="5">yahoo.com</option>
                                            </select>
                                        </li>
                                        <li>
                                            <h2>전화번호</h2>
                                            <input type="text" name="phone" placeholder="ex) 010-0000-0000"/>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h2>주소</h2>
                                            <select name="address1">
                                                <option value="">지역 선택</option>
                                                <option value="1">서울특별시</option>
                                            </select>
                                            <select name="address2">
                                                <option value="">시,군,구 선택</option>
                                                <option value="1">구로구</option>
                                                <option value="2">금천구</option>
                                                <option value="3">영등포구</option>
                                            </select>
                                            <input type="text" name="email"/>
                                        </li>
                                    </ul>
                                </div>}
                            </div>
                        </form>
                    </div>
                    {basket.length > 0 && <div className={style.mainResult}>
                        <ul>
                            <li><h2>총 금액: ₩{sum.toLocaleString()}</h2></li>
                            <li><input type="button" value="결제하기" onClick={handleCheck} /></li>
                        </ul>
                    </div>}
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    );
}

export default ShopPay;