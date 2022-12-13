import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import AnimatedRoutes from "./Routes/AnimatedRoutes";

function App() {
  const { user } = useAuth();
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
