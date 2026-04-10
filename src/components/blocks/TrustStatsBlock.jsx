import { trustStats } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function TrustStatsBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section trust-stats-section">
      <Container>
        <div className="trust-stats-grid">
          {trustStats.map((stat) => (
            <article className="trust-stat-card" key={stat.id}>
              <p className="trust-stat-card__value">{t(`home.trustStats.${stat.id}.value`)}</p>
              <p className="trust-stat-card__label">{t(`home.trustStats.${stat.id}.label`)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustStatsBlock;
