import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import PricingPage from "./pages/pricingpage/PricingPage";
import FeaturesPage from "./pages/featurespage/FeaturesPage";
import WorkPage from "./pages/WorkPage";
import BlogPage from "./pages/blogpage/BlogPage";
import ContactPage from "./pages/contactspage/ContactPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
