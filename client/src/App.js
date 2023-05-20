import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/components/Dashboard/Dashboard";
import SingleDay from "./features/components/SingleDay/SingleDay";
import Login from "./features/components/Login/Login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/single/:dt" element={<SingleDay />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
