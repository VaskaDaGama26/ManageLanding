import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper py-8">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
