import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/components/Dashboard/Dashboard";
import SingleDay from "./features/components/SingleDay/SingleDay";
import Login from "./features/components/Login/Login";
import Home from "./features/components/Home/Home";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/single/:dt" element={<SingleDay />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
