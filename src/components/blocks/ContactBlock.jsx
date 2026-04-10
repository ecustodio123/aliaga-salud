import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ContactBlock() {
  const { t } = useI18n();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("config_error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS send error", error);
      setStatus("error");
    }
  };

  return (
    <section className="surface-section" id="contacto">
      <Container>
        <SectionHeading title={t("contactBlock.title")} description={t("contactBlock.description")} />
        <div className="contact-block">
          <article className="contact-panel">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  className="input"
                  name="user_name"
                  placeholder={t("contactBlock.fields.fullName")}
                  required
                />
                <input className="input" name="user_phone" placeholder={t("contactBlock.fields.phone")} required />
              </div>

              <div className="form-grid" style={{ marginTop: "0.7rem" }}>
                <input
                  className="input"
                  type="email"
                  name="user_email"
                  placeholder={t("contactBlock.fields.email")}
                  required
                />
                <select className="select" name="specialty" defaultValue="" required>
                  <option value="" disabled>
                    {t("contactBlock.fields.specialty")}
                  </option>
                  <option>{t("contactBlock.options.option1")}</option>
                  <option>{t("contactBlock.options.option2")}</option>
                  <option>{t("contactBlock.options.option3")}</option>
                </select>
              </div>

              <textarea
                className="textarea"
                rows="5"
                name="message"
                placeholder={t("contactBlock.fields.message")}
                style={{ marginTop: "0.7rem" }}
                required
              />

              {status === "success" && <p className="contact-feedback is-success">{t("contactBlock.feedback.success")}</p>}
              {status === "error" && <p className="contact-feedback is-error">{t("contactBlock.feedback.error")}</p>}
              {status === "config_error" && (
                <p className="contact-feedback is-error">{t("contactBlock.feedback.configError")}</p>
              )}

              <button
                type="submit"
                className="btn btn-primary w-full"
                style={{ marginTop: "0.7rem" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? t("contactBlock.sending") : t("contactBlock.submit")}
              </button>
            </form>
          </article>

          <article className="contact-panel contact-panel--info">
            <h3>{t("contactBlock.panelTitle")}</h3>
            <ul className="contact-list">
              <li>
                <strong>{t("contactBlock.channels.phoneLabel")}</strong>
                <a href={`tel:${t("business.phoneHref")}`}>{t("business.phoneDisplay")}</a>
              </li>
              <li>
                <strong>{t("contactBlock.channels.whatsappLabel")}</strong>
                <a href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
                  {t("business.whatsappDisplay")}
                </a>
              </li>
              <li>
                <strong>{t("contactBlock.channels.addressLabel")}</strong>
                <span>{t("business.address")}</span>
              </li>
              <li>
                <strong>{t("contactBlock.channels.scheduleLabel")}</strong>
                <span>{t("business.schedule")}</span>
              </li>
            </ul>

            <iframe
              title={t("contactBlock.mapTitle")}
              src="https://maps.google.com/maps?q=Ventanilla%2C%20Callao%2C%20Peru&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </article>
        </div>
      </Container>
    </section>
  );
}

export default ContactBlock;
