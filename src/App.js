import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeGate from "./components/AgeGate";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Subscribe from "./pages/Subscribe";
import StoreLocator from "./pages/StoreLocator";
import LabReports from "./pages/LabReports";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  const isAllowed = sessionStorage.getItem("is21Plus");

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/stores" element={<StoreLocator />} />
          <Route path="/labs" element={<LabReports />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {!isAllowed && <AgeGate />}
    </>
  );
}

export default App;
