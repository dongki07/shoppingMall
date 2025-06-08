import Applogo from "./articles/AppLogo";
// import Hello from "./Hello";
// import StateTest from "./StateTest";
import Main from "./articles/ShopMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applogo />} ></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
