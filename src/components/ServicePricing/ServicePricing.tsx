interface ServiceTier {
  name: string;
  rate: string;
  description: string;
  details: string;
}

interface MinimumReference {
  name: string;
  value: string;
}

const serviceTiers: ServiceTier[] = [
  {
    name: "Actualización de contenido",
    rate: "$20.000",
    description:
      "Modificación de textos, imágenes, enlaces, publicaciones y contenido existente.",
    details: "Por hora",
  },
  {
    name: "Diseño y funcionalidades",
    rate: "$30.000",
    description:
      "Ajustes visuales, maquetación, estilos CSS, diseño responsive y modificaciones de funcionalidades existentes de complejidad moderada.",
    details: "Por hora",
  },
  {
    name: "Desarrollo e integraciones",
    rate: "$35.000",
    description:
      "Funcionalidades avanzadas, personalización de plugins, código PHP, integraciones con servicios externos y resolución de problemas técnicos complejos.",
    details: "Por hora",
  },
];

const minimumReferences: MinimumReference[] = [
  { name: "Actualización de contenido", value: "$40.000" },
  { name: "Diseño y funcionalidades", value: "$60.000" },
  { name: "Desarrollo e integraciones", value: "$70.000" },
];

const conditions: string[] = [
  "Contratación mínima de 2 horas por intervención.",
  "Antes de iniciar, se evalúan las tareas y se informa una estimación de horas.",
  "El importe final se calcula según las horas trabajadas y la categoría, con el mínimo establecido.",
  "Los trabajos fuera del alcance acordado se presupuestan por separado.",
  "Los valores no incluyen licencias de plugins, hosting ni otros servicios de terceros.",
];

const contact = {
  email: "ema.araujo.ea@gmail.com",
  phoneLabel: "+54 3731 455614",
  // Formato internacional de WhatsApp para celulares de Argentina: 54 9 + característica + número.
  whatsapp: "5493731455614",
};

const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hola Emmanuel, vi el presupuesto de servicios WordPress y quiero hacerte una consulta.",
)}`;

const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta por presupuesto WordPress",
)}`;

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm5-8h6v-2H7zm0-3h10V9H7zm0-3h10V6H7z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4z"
    />
  </svg>
);

export const ServicePricing = () => (
  <section
    className="service-pricing"
    aria-labelledby="service-pricing-title"
  >
    <header className="service-pricing__header">
      <span className="service-pricing__eyebrow">Servicios · WordPress</span>
      <h1 id="service-pricing-title">Presupuesto</h1>
      <p>
        Modificaciones, ajustes y mantenimiento de sitios en WordPress. Los
        trabajos se presupuestan por hora según el tipo de tarea y su
        complejidad.
      </p>
      <p className="service-pricing__meta">
        <time dateTime="2026-11-18">18 de noviembre de 2026</time>
        <span aria-hidden="true">·</span>
        <span>Valores en pesos argentinos (ARS)</span>
      </p>
    </header>

    <div className="service-pricing__tiers">
      {serviceTiers.map((tier) => (
        <article key={tier.name} className="service-pricing__tier">
          <h3>{tier.name}</h3>
          <p className="service-pricing__rate">
            <span>{tier.rate}</span>
            <small>{tier.details}</small>
          </p>
          <p className="service-pricing__description">{tier.description}</p>
        </article>
      ))}
    </div>

    <div className="service-pricing__footer">
      <div className="service-pricing__block">
        <h3 className="service-pricing__subtitle">Condiciones</h3>
        <ul>
          {conditions.map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>
      </div>

      <div className="service-pricing__block">
        <h3 className="service-pricing__subtitle">
          Mínimos de referencia
        </h3>
        <p className="service-pricing__note">
          Para una intervención de 2 horas en una sola categoría.
        </p>
        <dl>
          {minimumReferences.map((item) => (
            <div key={item.name} className="service-pricing__row">
              <dt>{item.name}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <p className="service-pricing__disclaimer">
      La realización de los trabajos queda sujeta a la aprobación previa del
      presupuesto correspondiente.
    </p>

    <div className="service-pricing__contact">
      <div className="service-pricing__contact-text">
        <h2>¿Avanzamos?</h2>
        <p>
          Contame qué necesitás modificar y te envío la estimación de horas.
        </p>
        <p className="service-pricing__contact-print">
          {contact.email} · {contact.phoneLabel}
        </p>
      </div>

      <div className="service-pricing__contact-actions">
        <a
          className="service-pricing__button service-pricing__button--primary"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChatIcon />
          Consultar por WhatsApp
        </a>
        <a className="service-pricing__button" href={emailHref}>
          <EmailIcon />
          Enviar email
        </a>
      </div>
    </div>
  </section>
);
