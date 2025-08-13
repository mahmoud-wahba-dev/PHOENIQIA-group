import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/#services_sec" },
    // { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const whatsappUrl =
    "https://wa.me/971581995107?text=Hello%20PHOENIQIA%2C%20I%20have%20a%20query...";

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50 overflow-hidden">
      <div className="container-max px-8 md:px-12 lg:px-16 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center active:scale-95">
            <motion.div
              className="text-2xl font-bold text-primary-600 w-[100px] "
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-full "
                src="/new_logo.png"
                alt="logo"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                  end={item.href === "/"} // only exact match for home
               className={({ isActive }) => {
    const isHashMatch =
      item.href.includes("#") &&
      window.location.hash === item.href.split("#")[1] ? true : false;
    const active = isActive && !item.href.includes("#") ? true : isHashMatch;

    return `font-medium transition-colors duration-200 active:scale-95 ${
      active ? "text-primary" : "text-white hover:text-primary"
    }`;
  }}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            {/* <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              {t("whatsapp")}
            </motion.a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <FaTimes className="text-white" size={24} /> : <FaBars className="text-white" size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "text-primary-600"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <LanguageSwitcher />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp justify-center"
                  >
                    <FaWhatsapp />
                    {t("whatsapp")}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
