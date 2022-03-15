import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GlobalListPage from "./pages/GlobalListPage";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/global-list" element={<GlobalListPage />} />
      </Routes>
    </div>
  );
}

export default App;
