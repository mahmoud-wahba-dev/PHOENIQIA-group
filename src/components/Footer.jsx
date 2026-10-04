import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobile,
  FaTiktok,
  FaSnapchatGhost,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCreditCard,
  FaLock,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/#services_sec" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=61576755857481",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/phoeniqia.travel",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/phoeniqia-travel-481654368/",
      label: "LinkedIn",
    },
    {
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@phoeniqia_business",
      label: "TikTok",
    },
    {
      icon: <FaSnapchatGhost />,
      href: "https://www.snapchat.com/@phoeniqiagroup",
      label: "Snapchat",
      snapchat: true,
    },
  ];

  const paymentPartners = [
    {
      id: "tabby",
      name: t("footer.tabbyTitle"),
      badge: "/tabby-badge.svg",
      tag: t("footer.tabbyTag"),
      desc: t("footer.tabbyDesc"),
      url: "https://tabby.ai",
      borderColor: "hover:border-[#3EEDB0]/70",
      glowColor: "hover:shadow-[0_10px_35px_rgba(62,237,176,0.18)]",
      badgePill: "bg-[#3EEDB0]/10 text-[#3EEDB0] border-[#3EEDB0]/30",
      accentBg: "from-[#3EEDB0]/5 to-transparent",
    },
    {
      id: "tamara",
      name: t("footer.tamaraTitle"),
      badge: "/tamara-badge.svg",
      tag: t("footer.tamaraTag"),
      desc: t("footer.tamaraDesc"),
      url: "https://tamara.co",
      borderColor: "hover:border-[#FFA07A]/70",
      glowColor: "hover:shadow-[0_10px_35px_rgba(255,160,122,0.18)]",
      badgePill: "bg-gradient-to-r from-[#FFA07A]/15 to-[#DE89F5]/15 text-[#FFA07A] border-[#FFA07A]/35",
      accentBg: "from-[#FFA07A]/5 to-transparent",
    },
    {
      id: "nomod",
      name: t("footer.nomodTitle"),
      badge: "/nomod-badge.svg",
      tag: t("footer.nomodTag"),
      desc: t("footer.nomodDesc"),
      url: "https://nomod.com/p/phoeniqiabusinessmenadmin",
      borderColor: "hover:border-[#0046FF]/70",
      glowColor: "hover:shadow-[0_10px_35px_rgba(0,70,255,0.22)]",
      badgePill: "bg-[#0046FF]/15 text-[#60A5FA] border-[#0046FF]/35",
      accentBg: "from-[#0046FF]/5 to-transparent",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary-400 h-[115px]">
              <img src="/new_logo.png" className="h-full object-contain" alt="logo" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-base leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4 my-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700/60 flex items-center justify-center text-white transition-all duration-300 text-lg shadow-sm ${
                    link.snapchat
                      ? "hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-gray-800"
                      : "hover:text-primary hover:border-primary/50 hover:bg-gray-800"
                  }`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full" />
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-base md:text-lg block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full" />
              {t("footer.contactInfo")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <a href="https://maps.app.goo.gl/qaynVHkMab7kFXQVA" target="_blank" rel="noopener noreferrer" className="mt-1">
                  <FaMapMarkerAlt className="text-primary-400 flex-shrink-0" />
                </a>
                <span className="text-gray-300 text-sm md:text-base leading-snug">
                  {t("contact.info.locations")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:042388545"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm md:text-base"
                >
                  042388545
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMobile className="text-primary-400 flex-shrink-0" />
                <a
                  dir="ltr"
                  href="tel:+971585740400"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm md:text-base"
                >
                  +971 58 5740400
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:INFO@PHOENIQIA.COM"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm md:text-base"
                >
                  {t("contact.info.email")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT SERVICES SECTION */}
        <div className="mt-12 pt-8 border-t border-gray-800/80">
          <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/60 to-gray-900/95 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-800/70">
              <div className="flex items-start md:items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <FaCreditCard className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                    {t("footer.paymentMethods")}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                    {t("footer.paymentSubtitle")}
                  </p>
                </div>
              </div>

              {/* Trust & Security Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300 self-start md:self-auto">
                <div className="flex items-center gap-1.5 bg-gray-950/60 px-3 py-1.5 rounded-full border border-gray-800 text-gray-300">
                  <FaLock className="text-primary text-[10px]" />
                  <span>{t("footer.securePayment")}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-950/60 px-3 py-1.5 rounded-full border border-gray-800 text-gray-300">
                  <FaCheckCircle className="text-emerald-400 text-[10px]" />
                  <span>{t("footer.instantApproval")}</span>
                </div>
              </div>
            </div>

            {/* Payment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              {paymentPartners.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-gray-950/70 hover:bg-gray-900 border border-gray-800/90 ${partner.borderColor} ${partner.glowColor} rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:-translate-y-1`}
                >
                  {/* Subtle hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  <div>
                    {/* Top Row: Logo Badge + External Link Icon */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="h-11 flex items-center">
                        <img
                          src={partner.badge}
                          alt={partner.name}
                          className="h-10 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <span className="w-8 h-8 rounded-full bg-gray-800/60 border border-gray-700/40 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/40 transition-colors duration-300 text-xs">
                        <FaExternalLinkAlt className="text-[11px]" />
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mt-3.5 mb-4">
                      {partner.desc}
                    </p>
                  </div>

                  {/* Feature Tag */}
                  <div className="pt-2 border-t border-gray-800/60 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center text-[11px] md:text-xs font-medium px-3 py-1 rounded-full border ${partner.badgePill}`}
                    >
                      {partner.tag}
                    </span>
                    <span className="text-[11px] text-gray-400 group-hover:text-primary transition-colors duration-200">
                      {partner.name} &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT AND MINI BADGES BAR */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <p className="text-gray-400 text-sm">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>

          {/* Quick Payment Logos Mini Row */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden md:inline">
              {t("footer.paymentMethods")}:
            </span>
            <div className="flex items-center gap-2">
              {paymentPartners.map((partner) => (
                <a
                  key={`mini-${partner.id}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  className="transition-all duration-200 hover:scale-105 opacity-85 hover:opacity-100"
                >
                  <img
                    src={partner.badge}
                    alt={partner.name}
                    className="h-6 w-auto object-contain rounded-md"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
