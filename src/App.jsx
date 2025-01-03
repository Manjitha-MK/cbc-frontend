import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AdminHomePage from "./pages/adminHomePage";
import Contact from "./pages/contactPage";
import { Toaster } from "react-hot-toast";
import FileUploadTest from "./pages/test";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Toaster/>
        <Routes path="/*">
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/admin/*" element={<AdminHomePage />}></Route>
          <Route path="/home/contact" element={<Contact/>}></Route>
          <Route path="/testing" element={<FileUploadTest/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
