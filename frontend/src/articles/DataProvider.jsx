import { useState } from "react";
import { DataContext } from "./DataContext";

export default function DataProvider({children}){
    const [shopData, setShopData] = useState([
        {
            "id": 1,
            "title": "My Trap Card",
            "subTitle": "You just actived my trap card",
            "cost": 125000,
            "sale": 10,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 2,
            "title": "Chile Man",
            "subTitle": "중국이 두려워하고 일본이 놀라며 칠레가 감격해하는 제품 및 솔루션",
            "cost": 65000,
            "sale": 15,
            "url": "ChileMan",
            "ext": ".png"
        }, {
            "id": 3,
            "title": "GgaZziZzu",
            "subTitle": "아무도 이해해주지 않아 절규하는 분",
            "cost": 25000,
            "sale": 10,
            "url": "Ggazzizzu",
            "ext": ".png"
        }, {
            "id": 4,
            "title": "JongWon-Back",
            "subTitle": "생전 처음 먹어 본 음식의 평가 중 대사",
            "cost": 17500,
            "sale": 5,
            "url": "Backjongwon",
            "ext": ".png"
        }, {
            "id": 5,
            "title": "SoWhat",
            "subTitle": "그저 그런 새 한 마리",
            "cost": 25000,
            "sale": 10,
            "url": "SoWhat",
            "ext": ".jpg"
        }, {
            "id": 6,
            "title": "진라면 순한맛",
            "subTitle": "그렇다 진라면 순한맛이다",
            "cost": 1450,
            "sale": 5,
            "url": "JinRamen",
            "ext": ".jpg"
        }, {
            "id": 7,
            "title": "진라면 매운맛",
            "subTitle": "약칭 진매 먹으면 맛있다",
            "cost": 1500,
            "sale": 5,
            "url": "JinMaeRamen",
            "ext": ".jpg"
        }
    ]);

    const [basket, setBasket] = useState([]);

    const addBasket = (id, qua) => {
        const newBasket = {"id": id, "qua": qua};
        const exist = basket.some(data => data.id == id);
        let target;
        if(!exist){
            target = data => [...data, newBasket];
            alert("데이터 전송 됨");
        }else{
            target = data => data.map(data => data.id == id ? {...data, "qua": data.qua + qua} : data);
        }
        setBasket(target);
    }

    const deleteBasket = (id) => {
        console.log(id);
        setBasket(data => {
            return data.filter(data => data.id != id);
        });
    }

    return(
        <DataContext.Provider value={{shopData, basket, addBasket, deleteBasket}}>
            {children}
        </DataContext.Provider>
    );
}