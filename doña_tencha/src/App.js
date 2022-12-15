import './App.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComponent from './components/MenuComponent';
import HomeComponent from './components/HomeComponent';
import ConfirmarCompraComponent from './components/ConfirmarCompraComponent';
import PagoComponent from './components/PagoComponent';
import PedidoConfirmadoComponent from './components/PedidoConfirmadoComponent';
import CrearPizzaComponent from './components/CrearPizzaComponent';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path= "/confirmar-compra" element={<ConfirmarCompraComponent />} />
        <Route path= "/pago" element={<PagoComponent />} />
        <Route path= "/pedido-confirmado" element={<PedidoConfirmadoComponent />} />
        <Route path= "/crear-pizza" element={<CrearPizzaComponent />} />


      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
