import { NavLink } from "react-router-dom";
import StaffBlock from "../components/blocks/StaffBlock";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";
import TrustStatsBlock from "../components/blocks/TrustStatsBlock";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import { useI18n } from "../lang/i18n";

function StaffPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="surface-section page-intro page-intro--soft">
        <Container>
          <SectionHeading title={t("staff.title")} description={t("staff.description")} />
          <div className="inline-actions">
            <NavLink className="btn btn-primary" to="/contacto">
              {t("staff.primaryCta")}
            </NavLink>
            <NavLink className="btn btn-secondary" to="/especialidades">
              {t("staff.secondaryCta")}
            </NavLink>
          </div>
        </Container>
      </section>

      <TrustStatsBlock />
      <StaffBlock showAll />
      <TestimonialsBlock />
    </main>
  );
}

export default StaffPage;
