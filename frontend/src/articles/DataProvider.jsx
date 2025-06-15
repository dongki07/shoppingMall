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
            "subTitle": "한 칠레인이 일본에 놀러와 일본 택시를 보고 너무 감동적인 나머지 상상도 못한 포즈를 취한 분",
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
            "subTitle": "생전 처음 먹어 본 음식의 평가: 이, 이 맛은?",
            "cost": 17500,
            "sale": 5,
            "url": "Backjongwon",
            "ext": ".png"
        }, {
            "id": 5,
            "title": "Chile Man",
            "subTitle": "한 칠레인이 일본에 놀러와 일본 택시를 보고 너무 감동적인 나머지 상상도 못한 포즈를 취한 분",
            "cost": 65000,
            "sale": 15,
            "url": "ChileMan",
            "ext": ".png"
        }
    ]);

    return(
        <DataContext.Provider value={{shopData}}>
            {children}
        </DataContext.Provider>
    );
}