import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css'
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  
  return (
    <>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/AllProducts" element={<AllProducts/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App;
