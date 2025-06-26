import Applogo from "./articles/AppLogo";
import Main from "./articles/ShopMain";
import Menu from "./articles/ShopMenu";
import Info from "./articles/ShopInfo";
import Login from "./articles/Login";
import Basket from "./articles/ShopBasket";
import Pay from "./articles/ShopPay";
import Success from "./articles/Success";
import DataProvider from "./articles/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Applogo />} ></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/menu/:type" element={<Menu />}></Route>
          <Route path="/info/:id" element={<Info />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/basket/pay" element={<Pay />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
