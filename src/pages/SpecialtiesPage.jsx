import { NavLink } from "react-router-dom";
import CarePathBlock from "../components/blocks/CarePathBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import { useI18n } from "../lang/i18n";

function SpecialtiesPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="surface-section page-intro page-intro--soft">
        <Container>
          <SectionHeading title={t("specialties.title")} description={t("specialties.description")} />
          <div className="inline-actions">
            <a className="btn btn-primary" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
              {t("specialties.primaryCta")}
            </a>
            <NavLink className="btn btn-secondary" to="/contacto">
              {t("specialties.secondaryCta")}
            </NavLink>
          </div>
        </Container>
      </section>

      <ServicesBlock useCarousel={false} />
      <CarePathBlock />
    </main>
  );
}

export default SpecialtiesPage;
