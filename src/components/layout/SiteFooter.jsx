import { NavLink } from "react-router-dom";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";

function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div>
          <BrandLogo className="brand-logo--footer" />
          <p>{t("footer.description")}</p>
        </div>

        <ul className="footer-links">
          <li>
            <NavLink to="/">{t("navigation.home")}</NavLink>
          </li>
          <li>
            <NavLink to="/especialidades">{t("navigation.specialties")}</NavLink>
          </li>
          <li>
            <NavLink to="/staff">{t("navigation.staff")}</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">{t("navigation.contact")}</NavLink>
          </li>
        </ul>

        <ul className="footer-links">
          <li>{t("footer.highlights.experience")}</li>
          <li>{t("footer.highlights.response")}</li>
          <li>{t("footer.highlights.multispecialty")}</li>
        </ul>
      </Container>
      <div className="footer-bottom">{t("footer.rights")}</div>
    </footer>
  );
}

export default SiteFooter;
