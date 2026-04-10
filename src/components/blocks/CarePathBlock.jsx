import { careSteps } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function CarePathBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section care-path-section">
      <Container>
        <SectionHeading title={t("specialties.carePath.title")} description={t("specialties.carePath.description")} />
        <div className="care-path-grid">
          {careSteps.map((step) => (
            <article key={step.id} className="care-path-card">
              <p className="care-path-card__index">{t(`specialties.carePath.${step.id}.index`)}</p>
              <h3>{t(`specialties.carePath.${step.id}.title`)}</h3>
              <p>{t(`specialties.carePath.${step.id}.description`)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CarePathBlock;
