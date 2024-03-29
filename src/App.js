import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutContainer from "./Components/CheckoutContainer/CheckoutContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categories/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CheckoutContainer />} />
            <Route path="*" element={<h1> error 404: Not found </h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
