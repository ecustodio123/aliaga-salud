import { NavLink } from "react-router-dom";
import { heroBackgroundVariant, heroImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HeroBlock() {
  const { t } = useI18n();

  return (
    <section className={`page-hero page-hero--${heroBackgroundVariant}`.trim()}>
      <Container className="page-hero__inner">
        <div>
          <p className="hero-kicker">{t("home.hero.kicker")}</p>
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.description")}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
              {t("home.hero.ctaPrimary")}
            </a>
            <NavLink className="btn btn-secondary" to="/especialidades">
              {t("home.hero.ctaSecondary")}
            </NavLink>
          </div>

          <ul className="hero-highlights" aria-label={t("home.hero.highlightsAria")}
          >
            <li>{t("home.hero.highlights.point1")}</li>
            <li>{t("home.hero.highlights.point2")}</li>
            <li>{t("home.hero.highlights.point3")}</li>
          </ul>
        </div>

        <div className="hero-image-wrap">
          <img src={heroImage} alt={t("home.hero.imageAlt")} />
        </div>
      </Container>
    </section>
  );
}

export default HeroBlock;
