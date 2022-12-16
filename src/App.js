import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import AnimatedRoutes from "./Routes/AnimatedRoutes";

function App() {
  const { user } = useAuth();
  return (
    <div style={{ backgroundColor: "F7FAFC" }}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
