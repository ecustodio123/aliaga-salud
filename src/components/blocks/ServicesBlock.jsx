import { services } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import LoopCarousel from "../composites/LoopCarousel";
import ServiceCard from "../composites/ServiceCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock({ useCarousel = true, limit }) {
  const { t } = useI18n();

  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

  const cardRenderer = (item, key) => (
    <ServiceCard
      key={key}
      item={{
        image: item.image,
        title: t(`catalog.services.${item.id}.title`),
        description: t(`catalog.services.${item.id}.description`),
      }}
    />
  );

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title={t("home.servicesBlock.title")} description={t("home.servicesBlock.description")} />

        {useCarousel ? (
          <LoopCarousel items={visibleServices} renderItem={cardRenderer} visibleItems={4} autoplayMs={2600} />
        ) : (
          <div className="card-grid four">{visibleServices.map((item) => cardRenderer(item, item.id))}</div>
        )}
      </Container>
    </section>
  );
}

export default ServicesBlock;
