import { Route, Routes } from "react-router";
import Form from "./components/Form/Form";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GlobalListPage from "./pages/GlobalListPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/global-list" element={<GlobalListPage />} />
        <Route path="/hero-form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
