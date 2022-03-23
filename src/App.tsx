import { Route, Routes } from "react-router";
import FormPage from "./pages/FormPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GlobalListPage from "./pages/GlobalListPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SquadPage from "./pages/SquadPage";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/squad" element={<SquadPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/global-list" element={<GlobalListPage />} />
        <Route path="/hero-form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
