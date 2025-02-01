import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AdminHomePage from "./pages/adminHomePage";
import Contact from "./pages/contactPage";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <GoogleOAuthProvider clientId="571403691537-mavos8e2qd5h4qbpg0o521glr9fm2g7l.apps.googleusercontent.com">
          <Routes path="/*">
            <Route path="/*" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/admin/*" element={<AdminHomePage />}></Route>
            <Route path="/home/contact" element={<Contact />}></Route>
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
