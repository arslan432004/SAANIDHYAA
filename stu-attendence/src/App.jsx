import "./App.css";
import Introslides from "./components/common/introslider";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Auth/LoginPage";
import Dashboard2 from "./pages/Dashboard/dashboard2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
const App = () => {
  return (
    <BrowserRouter>
  
      <Routes>

        {/* Intro Page */}
        <Route path="/" element={<Introslides />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Page */}
     
      <Route
  path="/dashboard"
  element={
    <Sidebar>
      <Dashboard />
    </Sidebar>
  }
/>

       

        {/* Dashboard2 Page */}
        <Route path="/dashboard2" element={<Dashboard2 />} />

{/* <Route path="/sidebar" element={<Sidebar />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
