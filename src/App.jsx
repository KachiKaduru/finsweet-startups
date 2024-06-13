import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import PricingPage from "./assets/pages/PricingPage";
import FeaturesPage from "./assets/pages/FeaturesPage";
import BlogPage from "./assets/pages/BlogPage";
import WorkPage from "./assets/pages/WorkPage";
import ContactPage from "./assets/pages/ContactPage";
import PageNotFound from "./assets/pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="pricing" element={<PricingPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
