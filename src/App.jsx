import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import  men_banner from './Components/Asset/banner_mens.png'
import women_banner from './Components/Asset/banner_women.png'
import kid_banner from './Components/Asset/banner_kids.png'
import Register from './Components/Register/Register';
function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/register' element= {<Register user={user} setUser={setUser} token={token}
     setToken={setToken}/>}/>
        <Route path='/shop' element= {<Shop/>}/>
        <Route path='/mens' element= {<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element= {<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path='/kids' element= {<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='product' element= {<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
     <Route path='/cart' element= {<Cart/>}/>
     <Route path='/login' element= {<LoginSignup user={user} setUser={setUser} token={token}
     setToken={setToken}/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
