import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import X7Macro from "./pages/X7Macro";
import BloodyMacro from "./pages/BloodMacro";
import Logitech from "./pages/Logitech";
import MyContacts from "./pages/MyContacts";
import MyAccount from "./pages/Account";
import Registration from "./pages/Registration";
import AllMacro from "./pages/AllMacro";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="x7-macro" element={<X7Macro />} />
        <Route path="bloody-macro" element={<BloodyMacro />} />
        <Route path="logitech-macro" element={<Logitech />} />
        <Route path="my-contacts" element={<MyContacts />} />
        <Route path="auth" element={<MyAccount />} />
        <Route path="registration" element={<Registration />}></Route>
        <Route path="your-order"  element = {<AllMacro />}></Route>
        <Route path="*" element= {<NotFound />}></Route>
      </Routes>
    </>

  );
}


