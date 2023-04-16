import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Logo } from "./pages/Logo/Logo";
import { Search } from "./pages/Search";
import { Cart } from "./pages/cart/Cart";
import Auth from "./pages/Auth/Auth";
import Navbar from "./component/navbar/navbar";
import { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";
type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.body.className = theme; // add theme value as class name to body element
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <div className="App">
          <Router>
            <Navbar setTheme={setTheme} theme={theme} />
            <Routes>
              <Route path="/" element={<Logo />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              {/* //!for any unknown route without /random-word */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
