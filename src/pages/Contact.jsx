import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFax,
  FaMobile,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import WhatsAppButton from "../components/WhatsAppButton";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS (you'll need to replace these with actual values)
      await emailjs.send(
        "service_k9tgmhu", // Replace with your EmailJS service ID
        "template_ybkpufp", // Replace with your EmailJS template ID
        {
          name: data.name,
          time: new Date().toLocaleString(), // Add current time
          to_name: "Admin", // Recipient name
          email_id: data.email,
          phone: data.phone || "Not provided",
          message: data.message,
          email: data.email, // For reply-to
        },
        "Z01fVRvktM3o5WmLX" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendToWhatsApp = (data) => {
    const message = `Hello PHOENIQIA Group,

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message: ${data.message}

Please get back to me at your earliest convenience.`;

    const whatsappUrl = `https://wa.me/971581995107?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: t("contact.info.titles.locations"),
    info: t("contact.info.locations"),
  },
  {
    icon: <FaMobile />,
    title: t("contact.info.titles.mobile"),
    info: "+971581995107",
    link: "tel:+97142388545",
  },
  {
    icon: <FaEnvelope />,
    title: t("contact.info.titles.email"),
    info: t("contact.info.email"),
    link: "mailto:INFO@PHOENIQIA.COM",
  },
  {
    icon: <FaFax />,
    title: t("contact.info.titles.poBox"),
    info: "239345",
  },
  {
    icon: <FaPhone />,
    title: t("contact.info.titles.phone"),
    info: "042388545",
  }
];


  useEffect(() => {
    // Initialize EmailJS (do this once, could be in useEffect)
    emailjs.init("Z01fVRvktM3o5WmLX"); // Your user ID/public key
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-secondary-soft max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t("contact.info.title")}
             
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl text-primary-600 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* <WhatsAppButton
                className="w-full justify-center mb-8"
                message="Hello PHOENIQIA Group, I would like to get in touch with your team."
              /> */}

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57768.73951994075!2d55.21753858709652!3d25.18479573417791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6943beb22f89%3A0x9b5c708396a718bf!2sPDK%20Investment%20Consultants!5e0!3m2!1sen!2seg!4v1754882496777!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {t("contact.form.title")}
                
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      {t("contact.form.success")}
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {t("contact.form.error")}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex-1 justify-center"
                    >
                      {isSubmitting ? "Sending..." : t("contact.form.submit")}
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmit(sendToWhatsApp)}
                      className="btn-whatsapp flex-1 justify-center"
                    >
                      <FaWhatsapp />
                      {t("contact.form.whatsapp")}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
