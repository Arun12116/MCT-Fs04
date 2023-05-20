import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProductDeatiles from "./Pages/ProductDeatiles";
import OrderSucess from "./Pages/OrderSucess";
import { Route, Routes } from "react-router-dom"
import Cart from "./Pages/Cart";
function App() {

  return (
    <>

      <Home/>
      <Routes>
      <Route path="/" element={<Header />} />

        <Route path="/Home" element={<Header />} />
        <Route path="/Cart" element={<Cart/>} />


        <Route path="/Order" element={<OrderSucess />} />

        <Route path="/Product/:id" element={<ProductDeatiles />} />


      </Routes>


    </>
  );
}

export default App;
