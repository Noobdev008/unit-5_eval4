// import logo from './logo.svg';
import { Route, Routes } from "react-router";
import "./App.css";
import { AdminDashboard } from "./components/AdminDashboard";
import { AdminLogin } from "./components/AdminLogin";
import { Homepage } from "./components/Homepage";
import { Jobs } from "./components/Jobs";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRouter";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<PrivateRoute> <Jobs /> </PrivateRoute>} />
        <Route path="/ad_login" element={<AdminLogin />} />
        <Route path="/ad_dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;