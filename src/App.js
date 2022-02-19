import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Testing from "./components/Testing"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// console.log(Home);



function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <Testing /> */}
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
