import { useEffect } from "react";
import "./App.scss";
import { Dashboard, Sidebar } from "./components";
import { useAppContext } from "./context/AppContext";

function App() {
  const { isSidebarOpen } = useAppContext();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isSidebarOpen]);

  return (
    <section className="App">
      <Sidebar />
      <Dashboard />
    </section>
  );
}

export default App;
