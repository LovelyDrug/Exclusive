import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { ErrorPage } from "./ErrorPage";
import { Contact } from "./Contact";
import { About } from "./About";
import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Wishlist } from "./Wishlist";
import { Account } from "./Account";
import { Checkout } from "./Checkout";
import { Cart } from "./Cart";
import { ProductPage } from "./ProductPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts} from "./redux/reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => dispatch(setProducts(data)))
      .catch(error => console.error(error));
    }, []);
      
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:id" element={<ProductPage />}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
