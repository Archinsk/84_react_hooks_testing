import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UseActionStateRoute from "./routes/UseActionStateRoute";
import UseCallbackRoute from "./routes/UseCallbackRoute";

function App() {
  return (
    <div className="App">
      <div>App Component</div>
      <div>
        <Link to="/useactionstate">useActionState</Link>
        <Link to="/usecallback">useCallback</Link>
      </div>
      <Routes>
        <Route path="/useactionstate" element={<UseActionStateRoute />} />
        <Route path="/usecallback" element={<UseCallbackRoute />} />
      </Routes>
    </div>
  );
}

export default App;
