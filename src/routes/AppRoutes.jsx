import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayouts";

// Componentes temporales para las rutas que faltan
const About = () => <h1>About Page</h1>;
const Menu = () => <h1>Menu Page</h1>;
const Reservation = () => <h1>Reservation Page</h1>;
const OrderOnline = () => <h1>Order Online Page</h1>;
const Login = () => <h1>Login Page</h1>;

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
