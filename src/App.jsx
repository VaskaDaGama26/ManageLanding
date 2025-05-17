import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Route path="/" element={<MainPage />} />
    </Router>
  );
}

export default App;
