import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import AnimatedRoutes from "./Routes/AnimatedRoutes";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  const { user } = useAuth();

  return (
    <div style={{ backgroundColor: "F7FAFC" }}>
      <ProSidebarProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
