import { ReactNode } from "react";
import { useIntersection } from "../../helpers/helpers";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
}

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
    />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"
    />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="m13.2 5.4l5.6 5.6H3v2h15.8l-5.6 5.6l1.4 1.4l8-8l-8-8z"
    />
  </svg>
);

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "ema.araujo.ea@gmail.com",
    href: "mailto:ema.araujo.ea@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "Teléfono",
    value: "+54 3731 455614",
    href: "tel:+543731455614",
    icon: <PhoneIcon />,
  },
  {
    label: "Ubicación",
    value: "Charata, Chaco, Argentina",
    href: "https://maps.app.goo.gl/ihCR549LaGutK7gX8",
    icon: <LocationIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuel-araujo",
    href: "https://www.linkedin.com/in/emmanuel-araujo/",
    icon: <LinkedInIcon />,
    external: true,
  },
];

export const Contact = () => {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal"
      aria-labelledby="contact-title"
    >
      <div className="contact-box">
        <div
          className={`contact-content ${isVisible ? "animate-about" : ""
            }`}
        >
          <header className="contact-header">

            <div className="contact-heading-icon" aria-hidden="true">
              <EmailIcon />
            </div>

            <h2 id="contact-title">
              Hablemos de tu
              <strong>próximo proyecto</strong>
            </h2>
            <p>
              Contame qué estás construyendo y veamos cómo convertirlo en una
              experiencia clara, útil y memorable.
            </p>
          </header>

          <div className="contact-info">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact-item"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-details">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </span>
                <span className="contact-arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
