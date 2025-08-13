import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobile,
  FaTiktok,
} from "react-icons/fa";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
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
      href: "https://www.instagram.com/phoeniqia.travel?igsh=ZzRwaDE2MTlpZHE1",
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
  ];

  const whatsappUrl =
    "https://wa.me/971581995107?text=Hello%20PHOENIQIA%2C%20I%20have%20a%20query...";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary-400  h-[115px]">
              <img src="/new_logo.png" className="h-full" alt="logo" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t("footer.description")}
            </p>
      
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-white hover:text-primary transition-colors duration-300 text-xl"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.contactInfo")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary-400" />
                <span className="text-gray-300">
                  {t("contact.info.locations")}
                </span>
              </div>
                  <div className="flex items-center gap-3">
                <FaPhone className="text-primary-400" />
                <a
                  href="tel:042388545"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  042388545
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMobile className="text-primary-400" />
                <a
                  href="tel:+971581995107"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  +971 58 1995107
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400" />
                <a
                  href="mailto:INFO@PHOENIQIA.COM"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {t("contact.info.email")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 my-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:text-primary transition-colors duration-300 text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
