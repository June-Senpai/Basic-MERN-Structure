import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Logo } from "./pages/Logo";
import { Search } from "./pages/Search";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import Navbar from "./component/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          {/* //!for any unknown route without /random-word */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
