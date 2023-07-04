import "./App.css";
import {  Route, Routes } from "react-router-dom";
import NotFound from "./Components/404/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import ProductosPage from "./Components/Pages/Productos/Productos";
import Footer from "./Components/Footer/Footer";
import NosotrosPage from "./Components/Pages/Nosotros/NosotrosPage";
import ContactoPage from "./Components/Pages/Contacto/ContactoPage";
import CartcontextProvider from "./context/CartContext";
import CarritoPage from "./Components/Pages/Carrito/CarritoPage";
import FormEnvio from "./Components/Form/FormEnvio"
import { ToastContainer, toast } from 'react-toastify';


function App() {
  
  return (
    <div className="app">
      <CartcontextProvider>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark" />

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
