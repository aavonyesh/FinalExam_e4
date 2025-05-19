
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import Shop from './pages/Shop/Shop';
import NoPage from './pages/NoPage/NoPage';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import AdminTable from './pages/Admin/AdminTable';
import AdminAdd from './pages/Admin/AdminAdd';
import BasketProvider from './context/BasketProvider';
import Basket from './pages/Basket/Basket';
import WishlistProvider from './context/WishlistProvider';
import Wishlist from './pages/Wishlist/Wishlist';
import Detail from './pages/Details/Detail';
function App() {


  return (
    <>
    < WishlistProvider>
    <BasketProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="shop" element={<Shop />} />
          <Route path="admin" element={<AdminTable />} />
          <Route path="add" element={<AdminAdd />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </BasketProvider>
    </WishlistProvider>
    </>
  )
}

export default App
