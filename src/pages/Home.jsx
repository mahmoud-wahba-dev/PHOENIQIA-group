import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBriefcase, FaPlane, FaPassport } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton";
import ImageCarousel from "../components/ImageCarousel";
import { useEffect } from "react";

const Home = () => {
  const { t } = useTranslation();

  const heroImages = [
    {
      src: "/hero_img.jpg",
      alt: "Professional Team",
    },
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Dubai Business District",
    },
    {
      src: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "UAE Tourism",
    },
    {
      src: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Business Meeting",
    },
  ];

  const services = [
    {
      icon: <FaBriefcase />,
      title: t("services.business.title"),
      description: t("services.business.description"),
      link: "/services#business",
    },
    {
      icon: <FaPlane />,
      title: t("services.tourism.title"),
      description: t("services.tourism.description"),
      link: "/services#tourism",
    },
    // {
    //   icon: <FaPassport />,
    //   title: t("services.visa.title"),
    //   description: t("services.visa.description"),
    //   link: "/services#visa",
    // },
  ];

  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#services_sec") {
      const section = document.getElementById("services_sec");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="lg:hidden ">
                <img className="w-full rounded-md" src="/hero_img.jpg" alt="" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex itecms-center gap-6">
                <div className="h-fit">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-dark">
                    {t("hero.welcome")}
                  </h1>
                  <p className="text-xl mb-6 text-secondary-soft">
                    {t("hero.subtitle")}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg ">
                    <p className="text-lg font-medium italic text-secondary-soft">
                      {t("hero.slogan")}
                    </p>
                  </div>
                </div>
              </div>
              {/* <WhatsAppButton className="text-lg px-8 py-4" /> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="lg:block hidden">
                {/* <ImageCarousel images={heroImages} /> */}
                <img className="w-full rounded-md" src="/hero_img.jpg" alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section
        className="section-padding bg-gray-50 scroll-mt-[-5rem]"
        id="services_sec"
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl text-primary-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link} className="btn-primary">
                  {t("learn_more")}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PHOENIQIA Group Team"
                className="rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {t("about.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("about.description")}
              </p>
              <p className="text-gray-600 mb-8">{t("about.mission")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary">
                  {t("learn_more_about_us")}
                </Link>
                {/* <WhatsAppButton /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
