import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Goldbars from "./pages/Goldbars";
import Goldcoins from "./pages/Goldcoins";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="goldbars" element={<Goldbars />} />
        <Route path="goldcoins" element={<Goldcoins />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
