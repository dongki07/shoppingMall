import Applogo from "./articles/AppLogo";
import Main from "./articles/ShopMain";
import Menu from "./articles/ShopMenu";
import Info from "./articles/ShopInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applogo />} ></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/menu/:id" element={<Menu />}></Route>
        <Route path="/menu/info" element={<Info />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
