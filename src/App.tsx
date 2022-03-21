import { Route, Routes } from "react-router";
import FormPage from "./pages/FormPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GlobalListPage from "./pages/GlobalListPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/global-list" element={<GlobalListPage />} />
        <Route path="/hero-form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
