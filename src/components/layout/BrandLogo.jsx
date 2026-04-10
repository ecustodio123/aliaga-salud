import logoImage from "../../assets/img/AliagaSaludLogoClean.png";
import { useI18n } from "../../lang/i18n";

function BrandLogo({ className = "" }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo ${className}`.trim()}>
      <img className="brand-logo__image" src={logoImage} alt={t("logo.word")} />
    </div>
  );
}

export default BrandLogo;
