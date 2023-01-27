import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Routes/AnimatedRoutes";
import { ProSidebarProvider } from "react-pro-sidebar";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div style={{ backgroundColor: "F7FAFC" }}>
      <QueryClientProvider client={queryClient}>
        <ProSidebarProvider>
          <Router>
            <AnimatedRoutes />
          </Router>
        </ProSidebarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
