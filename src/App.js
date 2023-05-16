import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/components/Dashboard/Dashboard";
import SingleDay from "./features/components/SingleDay/SingleDay";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/single/:dt" element={<SingleDay />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
