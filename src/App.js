import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Commingle from "./pages/Commingle";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Share from "./pages/Share";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/commingle" element={<Commingle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/share" element={<Share />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;