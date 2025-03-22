import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import X7Macro from "./pages/Macross/X7Macro";
import BloodyMacro from "./pages/Macross/BloodMacro";
import Logitech from "./pages/Macross/Logitech";
import AllMacro from "./pages/Macross/AllMacro";
import Registration from "./pages/AuthPages/Registration";
import NotFound from "./pages/AuthPages/NotFound";
import LoginPage from "./pages/AuthPages/LoginPage";
import AccountPage from "./pages/Account/AccountPage";
import HomePage from "./pages/HomePage";
import MyContacts from "./pages/Contact/MyContacts";
import Order from "./pages/Macross/Order";
import PaymentPage from "./Payment/PaymentPage";

export default function App() {
  return (
    <>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="x7-macro" element={<X7Macro />} />
          <Route path="bloody-macro" element={<BloodyMacro />} />
          <Route path="logitech-macro" element={<Logitech />} />
          <Route path="my-contacts" element={<MyContacts />} />
          <Route path="auth" element={<LoginPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="your-order" element={<AllMacro />} />
          <Route path="my-account" element={<AccountPage />} />
          <Route path="my-orders" element = {<Order />} />
          <Route path="payment" element = {<PaymentPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </>

  );
}


