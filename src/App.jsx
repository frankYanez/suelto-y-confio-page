import "./App.css";
import { Form, Route, Routes } from "react-router-dom";
import NotFound from "./Components/404/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import ProductosPage from "./Components/Pages/Productos/Productos";
import Footer from "./Components/Footer/Footer";
import NosotrosPage from "./Components/Pages/Nosotros/NosotrosPage";
import ContactoPage from "./Components/Pages/Contacto/ContactoPage";
import  useState  from "react";
import CartcontextProvider from "./context/CartContext";
import CarritoPage from "./Components/Pages/Carrito/CarritoPage";
import FormEnvio from "./Components/Form/FormEnvio"



function App() {
  


  return (
    <div className="app">
      <CartcontextProvider>

    <Navbar/>
      
      <Routes>
        <Route path="/" home element={<Home/>}/>
        <Route path="/productos"  element={<ProductosPage />}/>
        <Route path="/nosotros" element={<NosotrosPage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
        <Route path="/carrito" element={<CarritoPage/>}/>
        <Route path="/form" element={<FormEnvio/>}/>

        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Footer className="p-10"/>
      </CartcontextProvider>
    </div>
  );
}

export default App;
