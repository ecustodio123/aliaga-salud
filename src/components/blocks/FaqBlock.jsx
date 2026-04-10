import { faqItems } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function FaqBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section faq-section">
      <Container>
        <SectionHeading title={t("contact.faq.title")} description={t("contact.faq.description")} />
        <div className="faq-grid">
          {faqItems.map((item) => (
            <article key={item.id} className="surface-card">
              <div className="surface-card__body">
                <h3>{t(`contact.faq.${item.id}.question`)}</h3>
                <p>{t(`contact.faq.${item.id}.answer`)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FaqBlock;
