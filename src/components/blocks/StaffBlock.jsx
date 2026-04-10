import { staffMembers } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import StaffCard from "../composites/StaffCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function StaffBlock({ showAll = false }) {
  const { t } = useI18n();
  const members = showAll ? staffMembers : staffMembers.slice(0, 3);

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title={t("home.staffBlock.title")} description={t("home.staffBlock.description")} />
        <div className="card-grid three staff-grid">
          {members.map((member) => (
            <StaffCard
              key={member.id}
              item={{
                image: member.image,
                name: t(`catalog.staff.${member.id}.name`),
                role: t(`catalog.staff.${member.id}.role`),
                bio: t(`catalog.staff.${member.id}.bio`),
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StaffBlock;
