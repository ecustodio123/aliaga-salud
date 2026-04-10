import ContactBlock from "../components/blocks/ContactBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import StaffBlock from "../components/blocks/StaffBlock";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";
import TrustStatsBlock from "../components/blocks/TrustStatsBlock";

function HomePage() {
  return (
    <main>
      <HeroBlock />
      <TrustStatsBlock />
      <ServicesBlock limit={6} />
      <StaffBlock />
      <TestimonialsBlock />
      <ContactBlock />
    </main>
  );
}

export default HomePage;
