import Applogo from "./articles/AppLogo";
import Main from "./articles/ShopMain";
import Menu from "./articles/ShopMenu";
import Info from "./articles/ShopInfo";
import Basket from "./articles/ShopBasket";
import DataProvider from "./articles/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Applogo />} ></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/menu/:id" element={<Menu />}></Route>
          <Route path="/info/:id" element={<Info />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
