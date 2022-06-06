import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Blogs from "./component/Blogs/Blogs";
import About from "./component/About/About";
import Notfound from "./component/Notfound/404";
import SignUp from "./component/SignUp/SignUp";
import Login from "./component/Login/Login";
import Checkout from "./component/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/about' element={<About></About>}>about</Route>
        <Route path='/Checkout' element={<Requireauth>
                 <Checkout></Checkout>
        </Requireauth>}>Checkout</Route>
        <Route path='/Login' element={<Login></Login>}>login</Route>
        <Route path='/Signup' element={<SignUp></SignUp>}>SignUp</Route>
        <Route path='*' element={<Notfound></Notfound>}>about</Route>
      </Routes>
    
    </div>
  );
}

export default App;
