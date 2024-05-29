import Home from "./pages/Dashboard";
import "./index.scss";
import "./core/theme.scss";
import { setTheme } from "./core/Theme";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTheme();
  }, []);
  return <Home />;
}

export default App;
