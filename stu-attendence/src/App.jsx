import "./App.css";
import Introslides from "./components/common/introslider";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Auth/LoginPage";
// import SignupPage from "./pages/Auth/SignupPage";
import Dashboard2 from "./pages/Dashboard/dashboard2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
// import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Intro Page */}
        <Route path="/" element={<Introslides />} />

        {/* Login + Signup */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          
          element={
        
              <Sidebar>
                <Dashboard />
              </Sidebar>
            
          }
        />

       

      </Routes>
    </BrowserRouter>
  );
};

export default App;
