import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Showcase from "../pages/Showcase";

export default function Routers() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
} 