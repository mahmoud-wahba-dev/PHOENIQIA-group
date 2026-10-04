import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = ({ message = "", className = "" }) => {
  const { t } = useTranslation();
  
  const defaultMessage = "Hello PHOENIQIA Group, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/971585740400?text=${encodeURIComponent(message || defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp />
      {t('whatsapp')}
    </motion.a>
  );
};

export default WhatsAppButton;