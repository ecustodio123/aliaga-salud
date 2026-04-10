import { Navigate, Route, Routes } from "react-router-dom";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";
import ScrollToTop from "./components/layout/ScrollToTop";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import ComponentsPage from "./pages/ComponentsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import StaffPage from "./pages/StaffPage";

function App() {
  return (
    <>
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/especialidades" element={<SpecialtiesPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <SiteFooter />
      <LanguageSwitcher />
    </>
  );
}

export default App;
