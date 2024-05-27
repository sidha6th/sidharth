import Home from "./pages/Dashboard";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state: RootState) => state.themeReducer);

  return <Home theme={theme.activeTheme} />;
}

export default App;
