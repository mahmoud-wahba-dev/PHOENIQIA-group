import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGift } from "react-icons/fa";

const STORAGE_KEY = "announcement_dismissed_v1";

const AnnouncementBar = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative z-[60] overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-[#0a0a0a] via-[#111827] to-[#0a0a0a] border-b border-primary/20">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

            <div
              className="container-max px-4 md:px-8 mx-auto py-2.5 flex items-center justify-between gap-3"
              dir={isRtl ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <FaGift className="text-primary text-xs" />
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">
                    {"\uD83C\uDF89"} {t("announcement.headline")}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://tabby.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Tabby"
                      className="transition-all duration-200 hover:scale-110 opacity-90 hover:opacity-100"
                    >
                      <img
                        src="/tabby-badge.svg"
                        alt="Tabby"
                        className="h-5 md:h-6 w-auto object-contain"
                      />
                    </a>
                    <span className="text-gray-500 text-sm leading-none">|</span>
                    <a
                      href="https://tamara.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Tamara"
                      className="transition-all duration-200 hover:scale-110 opacity-90 hover:opacity-100"
                    >
                      <img
                        src="/tamara-badge.svg"
                        alt="Tamara"
                        className="h-5 md:h-6 w-auto object-contain"
                      />
                    </a>
                    <span className="text-gray-500 text-sm leading-none">|</span>
                    <a
                      href="https://nomod.com/p/phoeniqiabusinessmenadmin"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Nomod"
                      className="transition-all duration-200 hover:scale-110 opacity-90 hover:opacity-100"
                    >
                      <img
                        src="/nomod-badge.svg"
                        alt="Nomod"
                        className="h-5 md:h-6 w-auto object-contain rounded-sm"
                      />
                    </a>
                  </div>

                  <span className="text-gray-400 text-[11px] md:text-xs whitespace-nowrap hidden sm:inline">
                    {t("announcement.subtext")}
                  </span>
                </div>
              </div>

              <button
                onClick={handleDismiss}
                aria-label="Dismiss announcement"
                className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 ml-2"
              >
                <FaTimes className="text-[10px]" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;