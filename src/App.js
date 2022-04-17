import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Bannar from "./component/Bannar/Bannar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Blogs from "./component/Blogs/Blogs";
import About from "./component/About/About";
import Notfound from "./component/Notfound/404";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/about' element={<About></About>}>about</Route>
        <Route path='*' element={<Notfound></Notfound>}>about</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
