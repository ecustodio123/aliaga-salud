import ContactBlock from "../components/blocks/ContactBlock";
import FaqBlock from "../components/blocks/FaqBlock";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import { useI18n } from "../lang/i18n";

function ContactPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="surface-section page-intro page-intro--soft">
        <Container>
          <SectionHeading title={t("contact.title")} description={t("contact.description")} />
        </Container>
      </section>
      <ContactBlock />
      <FaqBlock />
    </main>
  );
}

export default ContactPage;
