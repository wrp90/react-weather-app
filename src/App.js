import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./features/components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
