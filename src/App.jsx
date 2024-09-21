import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";

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
