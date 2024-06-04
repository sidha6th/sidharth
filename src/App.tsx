import Home from "./pages/DashBoard/Dashboard";
import { setTheme } from "./core/theme/Theme";
import { useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

function App() {
  useEffect(() => {
    return setTheme();
  }, []);

 return <Home/>
}

export default App;
