import { useState } from "react";
import { DataContext } from "./DataContext";
import { Link, useNavigate } from "react-router-dom";

export default function DataProvider({children}){
    const navigate = useNavigate();
    const [login, setLogin] = useState([
        {
            "no": 1,
            "id": "testing",
            "passwd": "1234",
            "active": false
        },{
            "no": 2,
            "id": "tester",
            "passwd": "test",
            "active": false
        },
    ]);
    const user = login.find(data => data.active == true);

    const [shopData, setShopData] = useState([
        {
            "id": 1,
            "title": "진라면 순한맛",
            "subTitle": "단순한 순한맛이다 먹으면 맛있다",
            "type": "ramen",
            "cost": 1250,
            "sale": 0,
            "total": 500000,
            "url": "ramen/JinRamen",
            "ext": ".jpg"
        }, {
            "id": 2,
            "title": "진라면 매운맛",
            "subTitle": "진라면이다. 맵기는 적당한 것 같다.",
            "type": "ramen",
            "cost": 1500,
            "sale": 5,
            "total": 1100000,
            "url": "ramen/JinMaeRamen",
            "ext": ".jpg"
        }, {
            "id": 3,
            "title": "신라면",
            "subTitle": "인기가 있는 라면이다. 현재 매울 신(辛)자는 맞는지 모르겠다.",
            "type": "ramen",
            "cost": 1400,
            "sale": 0,
            "total": 3200000,
            "url": "ramen/ShinRamen",
            "ext": ".jpg"
        }, {
            "id": 4,
            "title": "너구리",
            "subTitle": "그 너구리 아니다. 라면 이름이다.",
            "type": "ramen",
            "cost": 1500,
            "sale": 10,
            "total": 900000,
            "url": "ramen/Racon",
            "ext": ".jpg"
        }, {
            "id": 5,
            "title": "불닭볶음면",
            "subTitle": "맛있는데 너무 맵다. 왜캐 매워 이 라면은",
            "type": "ramen",
            "cost": 1820,
            "sale": 10,
            "total": 6400000,
            "url": "ramen/FireChickRamen",
            "ext": ".jpg"
        }, {
            "id": 6,
            "title": "짜파게티",
            "subTitle": "짜장면이나 짜파게티나 짜장인 건 맛있다.",
            "type": "ramen",
            "cost": 1500,
            "sale": 5,
            "total": 3200000,
            "url": "ramen/Jjapagetti",
            "ext": ".jpg"
        }, {
            "id": 7,
            "title": "안성탕면",
            "subTitle": "이 라면은 뭐라고 설명해야 하죠?",
            "type": "ramen",
            "cost": 1200,
            "sale": 0,
            "total": 1740000,
            "url": "ramen/AnseongRamen",
            "ext": ".jpg"
        }, {
            "id": 8,
            "title": "팔도비빔면",
            "subTitle": "팔도에서 만든 비빔면",
            "type": "ramen",
            "cost": 1650,
            "sale": 5,
            "total": 1125000,
            "url": "ramen/PaldoRamen",
            "ext": ".jpg"
        }, {
            "id": 9,
            "title": "열라면",
            "subTitle": "예전에는 진매였는데 요즘은 왜인지 이 라면을 먹는다.",
            "type": "ramen",
            "cost": 1780,
            "sale": 10,
            "total": 780000,
            "url": "ramen/HeatRamen",
            "ext": ".jpg"
        }, {
            "id": 10,
            "title": "참깨라면",
            "subTitle": "진짜 참깨가 들어갔는지 후레이크 까면 안다.",
            "type": "ramen",
            "cost": 1500,
            "sale": 5,
            "total": 1230000,
            "url": "ramen/SesameRamen",
            "ext": ".jpg"
        }, {
            "id": 11,
            "title": "코카콜라",
            "subTitle": "탄산음료 계의 인기상품이였지만 지금은",
            "type": "drink",
            "cost": 1500,
            "sale": 10,
            "total": 12540000,
            "url": "drink/coke",
            "ext": ".jpg"
        }, {
            "id": 12,
            "title": "펩시",
            "subTitle": "탄산음료 계의 인기상품 Ver2",
            "type": "drink",
            "cost": 1500,
            "sale": 10,
            "total": 12360000,
            "url": "drink/pepsi",
            "ext": ".jpg"
        }, {
            "id": 13,
            "title": "포카리스웨트",
            "subTitle": "이온음료다. 자주 마신다.",
            "type": "drink",
            "cost": 1850,
            "sale": 5,
            "total": 7280000,
            "url": "drink/pokari",
            "ext": ".jpg"
        }, {
            "id": 14,
            "title": "파워에이드",
            "subTitle": "이름 그대로 마시면 힘이 세지는 지는 의문",
            "type": "drink",
            "cost": 1720,
            "sale": 5,
            "total": 9150000,
            "url": "drink/powerade",
            "ext": ".jpg"
        }, {
            "id": 15,
            "title": "몬스터 에너지",
            "subTitle": "이거 마셔본 사람 후기 좀",
            "type": "drink",
            "cost": 1820,
            "sale": 10,
            "total": 15300000,
            "url": "drink/monster",
            "ext": ".jpg"
        }, {
            "id": 16,
            "title": "핫식스",
            "subTitle": "이 에너지 음료는 국내에서 잘 팔린다",
            "type": "drink",
            "cost": 1900,
            "sale": 5,
            "total": 2400000,
            "url": "drink/hot6",
            "ext": ".jpg"
        }, {
            "id": 17,
            "title": "델몬트 (오렌지)",
            "subTitle": "주스 계열인데 맛있다.",
            "type": "drink",
            "cost": 1500,
            "sale": 5,
            "total": 1503000,
            "url": "drink/delmontOrange",
            "ext": ".jpg"
        }, {
            "id": 18,
            "title": "델몬트 (포도)",
            "subTitle": "포도를 출시했는데도 맛있다.",
            "type": "drink",
            "cost": 1500,
            "sale": 5,
            "total": 10200000,
            "url": "drink/delmontPodo",
            "ext": ".jpg"
        }, {
            "id": 19,
            "title": "바나나맛 우유",
            "subTitle": "맛있음. 바나나맛이라 더 맛있음.",
            "type": "drink",
            "cost": 1450,
            "sale": 10,
            "total": 34000000,
            "url": "drink/bananamilk",
            "ext": ".jpg"
        }, {
            "id": 20,
            "title": "스누피 커피 우유",
            "subTitle": "마법의 우유다 우주계에서는 이를 금지하고 있다.",
            "type": "drink",
            "cost": 2400,
            "sale": 7,
            "total": 1200000,
            "url": "drink/snupi",
            "ext": ".jpg"
        }, {
            "id": 21,
            "title": "사과",
            "subTitle": "사과에 금칠을 해놨는지 지금은 매우 비싸다.",
            "type": "fruVeg",
            "cost": 25000,
            "sale": 10,
            "total": 3520000,
            "url": "fruVeg/apple",
            "ext": ".jpg"
        }, {
            "id": 22,
            "title": "오렌지",
            "subTitle": "이거 얼마나 오래됐죠?",
            "type": "fruVeg",
            "cost": 17500,
            "sale": 10,
            "total": 2152000,
            "url": "fruVeg/orange",
            "ext": ".jpg"
        }, {
            "id": 23,
            "title": "배",
            "subTitle": "이걸로 바다 위를 건널 수 있고 심지어 우리 몸에도 있다",
            "type": "fruVeg",
            "cost": 12000,
            "sale": 5,
            "total": 1520000,
            "url": "fruVeg/peer",
            "ext": ".jpg"
        }, {
            "id": 24,
            "title": "바나나",
            "subTitle": "그냥 먹어도 되고 우유랑 갈아서 먹어도 되고",
            "type": "fruVeg",
            "cost": 12500,
            "sale": 5,
            "total": 5612000,
            "url": "fruVeg/banana",
            "ext": ".jpg"
        }, {
            "id": 25,
            "title": "포도",
            "subTitle": "포도씨 까먹는 맛이 있을련가",
            "type": "fruVeg",
            "cost": 11500,
            "sale": 15,
            "total": 1525000,
            "url": "fruVeg/grape",
            "ext": ".jpg"
        }, {
            "id": 26,
            "title": "당근",
            "subTitle": "당연하다, 살려달라는 의미를 담긴 작물",
            "type": "fruVeg",
            "cost": 14200,
            "sale": 5,
            "total": 1523000,
            "url": "fruVeg/carrot",
            "ext": ".jpg"
        }, {
            "id": 27,
            "title": "감자",
            "subTitle": "땅 속에 갓 퍼올린 작물",
            "type": "fruVeg",
            "cost": 12500,
            "sale": 10,
            "total": 1223000,
            "url": "fruVeg/potato",
            "ext": ".jpg"
        }, {
            "id": 28,
            "title": "양파",
            "subTitle": "눈이 매운 주범인 작물",
            "type": "fruVeg",
            "cost": 15400,
            "sale": 10,
            "total": 1600000,
            "url": "fruVeg/onion",
            "ext": ".jpg"
        }, {
            "id": 29,
            "title": "토마토",
            "subTitle": "거꾸로 읽어도 그대로인 작물",
            "type": "fruVeg",
            "cost": 11400,
            "sale": 10,
            "total": 1936000,
            "url": "fruVeg/tomato",
            "ext": ".jpg"
        }, {
            "id": 30,
            "title": "가지",
            "subTitle": "나뭇가지",
            "type": "fruVeg",
            "cost": 15200,
            "sale": 5,
            "total": 1633000,
            "url": "fruVeg/eggplant",
            "ext": ".jpg"
        }, {
            "id": 31,
            "title": "에어컨",
            "subTitle": "이 제품을 발명한 분에게 박수를",
            "type": "appliance",
            "cost": 1500000,
            "sale": 10,
            "total": 1200000,
            "url": "appliance/aircon",
            "ext": ".jpg"
        }, {
            "id": 32,
            "title": "선풍기",
            "subTitle": "에어컨의 하위버전 그러나 바람은 잘 들어오는",
            "type": "appliance",
            "cost": 430000,
            "sale": 15,
            "total": 5402000,
            "url": "appliance/fan",
            "ext": ".jpg"
        }, {
            "id": 33,
            "title": "청소기",
            "subTitle": "청소하는 대신 소음이 매우 시끄럽다",
            "type": "appliance",
            "cost": 235000,
            "sale": 10,
            "total": 3404000,
            "url": "appliance/cleaner",
            "ext": ".jpg"
        }, {
            "id": 34,
            "title": "세탁기",
            "subTitle": "옷을 세탁할 때 사용되는 제품",
            "type": "appliance",
            "cost": 760000,
            "sale": 15,
            "total": 1260000,
            "url": "appliance/washer",
            "ext": ".jpg"
        }, {
            "id": 35,
            "title": "건조기",
            "subTitle": "옷을 말릴 때 사용되는 제품",
            "type": "appliance",
            "cost": 840000,
            "sale": 15,
            "total": 860000,
            "url": "appliance/dryer",
            "ext": ".jpg"
        }, {
            "id": 36,
            "title": "전자레인지",
            "subTitle": "데우기 좋은 제품",
            "type": "appliance",
            "cost": 324000,
            "sale": 5,
            "total": 980000,
            "url": "appliance/microwave",
            "ext": ".jpg"
        }, {
            "id": 37,
            "title": "PC",
            "subTitle": "사실상 최고급 제품",
            "type": "appliance",
            "cost": 1450000,
            "sale": 10,
            "total": 5400000,
            "url": "appliance/PC",
            "ext": ".jpg"
        }, {
            "id": 38,
            "title": "노트북",
            "subTitle": "간편하게 들고 다니는 PC",
            "type": "appliance",
            "cost": 1250000,
            "sale": 15,
            "total": 1420000,
            "url": "appliance/notebook",
            "ext": ".jpg"
        }, {
            "id": 39,
            "title": "TV",
            "subTitle": "날씨랑 뉴스 반복",
            "type": "appliance",
            "cost": 1360000,
            "sale": 5,
            "total": 850000,
            "url": "appliance/TV",
            "ext": ".jpg"
        }, {
            "id": 40,
            "title": "냉장고",
            "subTitle": "음식 보관하는데 매우 유용하고 용량이 매우 큰 리포지터리",
            "type": "appliance",
            "cost": 1480000,
            "sale": 15,
            "total": 2300000,
            "url": "appliance/refriger",
            "ext": ".jpg"
        }, {
            "id": 41,
            "title": "My Trap Card",
            "subTitle": "You just actived my trap card",
            "type": "etc",
            "cost": 1250000,
            "sale": 10,
            "total": 1220000,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 42,
            "title": "Chile Man",
            "subTitle": "중국이 두려워하고 일본이 놀라며 칠레가 감격해하는 제품 및 솔루션",
            "type": "etc",
            "cost": 6452000,
            "sale": 15,
            "total": 6720000,
            "url": "ChileMan",
            "ext": ".png"
        }, {
            "id": 43,
            "title": "GgaZziZzu",
            "subTitle": "아무도 이해해주지 않아 절규하는 분",
            "type": "etc",
            "cost": 2572000,
            "sale": 10,
            "total": 1540000,
            "url": "Ggazzizzu",
            "ext": ".png"
        }, {
            "id": 44,
            "title": "JongWon-Back",
            "subTitle": "생전 처음 먹어 본 음식의 평가 중 대사",
            "type": "etc",
            "cost": 1750000,
            "sale": 5,
            "total": 2560000,
            "url": "Backjongwon",
            "ext": ".png"
        }, {
            "id": 45,
            "title": "SoWhat",
            "subTitle": "그저 그런 새 한 마리",
            "type": "etc",
            "cost": 2156000,
            "sale": 10,
            "total": 980000,
            "url": "SoWhat",
            "ext": ".jpg"
        }, {
            "id": 46,
            "title": "My Trap Card6",
            "subTitle": "You just actived my trap card",
            "type": "etc",
            "cost": 125000,
            "sale": 10,
            "total": 1150000,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 47,
            "title": "My Trap Card7",
            "subTitle": "You just actived my trap card",
            "type": "etc",
            "cost": 125000,
            "sale": 10,
            "total": 1160000,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 48,
            "title": "My Trap Card8",
            "subTitle": "You just actived my trap card",
            "type": "etc",
            "cost": 125000,
            "sale": 10,
            "total": 1170000,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 49,
            "title": "My Trap Card9",
            "subTitle": "You just actived my trap card",
            "type": "etc",
            "cost": 125000,
            "sale": 10,
            "total": 1180000,
            "url": "Mytrapcard",
            "ext": ".png"
        }, {
            "id": 50,
            "title": "My Trap Card10",
            "subTitle": "You just actived my trap card",
            "type": "etc",
            "cost": 125000,
            "sale": 10,
            "total": 1190000,
            "url": "Mytrapcard",
            "ext": ".png"
        }
    ]);

    const [basket, setBasket] = useState([]);

    const addBasket = (id, qua) => {
        if(user == undefined) {
            alert("로그인 후 이용해주세요");
            return;
        }

        const newBasket = {"id": id, "qua": qua};
        const exist = basket.some(data => data.id == id);
        let target;
        if(!exist){
            target = data => [...data, newBasket];
            alert("해당 상품을 장바구니에 담았습니다");
        }else{
            target = data => data.map(data => data.id == id ? {...data, "qua": data.qua + qua} : data);
        }
        setBasket(target);
    }

    const deleteBasket = (id) => {
        setBasket(data => {
            return data.filter(data => data.id != id);
        });
    }

    const activeLogin = (target) => {
        const update = {...target, "active": true}
        setLogin(data => data.map(data => data.id == target.id && data.passwd == target.passwd ? update : data));
    }

    const activeBasket = () => {
        if(user == undefined) {
            alert("로그인 후 이용해주세요");
            return;
        }
        navigate("/basket");
    }

    const loginStatus = () => {
        return(
            <div>
                {user != undefined ? 
                    <Link to='/basket'>
                        <i className="fa-solid fa-circle-user"></i>
                        <h2>{user.id}</h2>
                    </Link>
                : 
                    <Link to='/login'>
                        <i className="fa-solid fa-circle-user"></i>
                        <h2>로그인</h2>
                    </Link>
                }
            </div>
        );
    };

    return(
        <DataContext.Provider value={{shopData, basket, addBasket, deleteBasket, activeBasket, login, activeLogin, loginStatus}}>
            {children}
        </DataContext.Provider>
    );
}