import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TranslationProvider } from "./translations/TranslationContext.jsx";
import AuthProvider from "./pages/AuthPages/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <TranslationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
          
      </TranslationProvider>
  
  </StrictMode>
);