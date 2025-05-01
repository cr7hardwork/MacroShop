import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
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
import AdminPage, { adminLoader } from "./pages/Account/AdminPage";
import NavbarLayout from "./components/NavbarLayout";
import Reviews from "./Review/Review";
import BuyImmediately from "./pages/Contact/BuyImmediately";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <HomePage /> },
      { path: "auth", element: <LoginPage /> },
      { path: "registration", element: <Registration /> },
      { path: "x7-macro", element: <X7Macro /> },
      { path: "bloody-macro", element: <BloodyMacro /> },
      {path : "review",element : <Reviews />},
      {path : 'buyimmediately', element : <BuyImmediately />},
      { path: "logitech-macro", element: <Logitech /> },
      { path: "your-order", element: <AllMacro /> },
      { path: "my-contacts", element: <MyContacts /> },
      { path: "my-orders", element: <Order /> },
      { path: "payment/:orderId", element: <PaymentPage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "my-account", element: <AccountPage /> },
      {
        path: "admin",
        element: <AdminPage />,
        loader: adminLoader,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


export default function App() {

  return (
    <RouterProvider router={router} />
  )
}