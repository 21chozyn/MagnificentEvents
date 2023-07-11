import "./App.css";
import {
  Link,
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Pages/Portfolio";
import About from "./Components/Pages/About";
import Background from "./Components/Background";

function App() {
  return (
    <Router basename={import.meta.env.DEV ? "/" : "/MagnificentEvents/"}>
      <Header />
      <Background />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
