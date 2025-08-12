import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaPlane,
  FaPassport,
  FaFileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import { useLocation } from "react-router-dom"; // If using React Router
import EmblaCarousel from "../components/EmblaCarousel"; // Your carousel component
import { useEffect, useState } from "react";
import AccordionItem from "../components/Accordion";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "business",
      icon: <FaBriefcase />,
      title: t("services.business.title"),
      description: t("services.business.description"),
      items: t("services.business.items", { returnObjects: true }),
      motto: t("services.business.motto"),
      images: [
        "/business_services/business_service (1).jpg",
        "/business_services/business_service (2).jpg",
        "/business_services/business_service (3).jpg",
        "/business_services/business_service (4).jpg",
      ],
    },
    {
      id: "tourism",
      icon: <FaPlane />,
      title: t("services.tourism.title"),
      description: t("services.tourism.description"),
      items: t("services.tourism.items", { returnObjects: true }),
      images: [
        "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
        "https://images.pexels.com/photos/21014/pexels-photo.jpg",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      ],
    },
  ];
  const location = useLocation();
  const [currentService, setCurrentService] = useState(services[0]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const service = services.find((s) => s.id === hash) || services[0];
    setCurrentService(service);
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="mb-8">
        {currentService.id === "business" ? (
          <EmblaCarousel images={currentService.images} />
        ) : (
          <>
            <div className="!h-full">
              <video
                className=" w-full h-full object-cover"
                src="https://www.dropbox.com/scl/fi/dqkxfckmmjcoiycqu02h5/dubai.mp4?rlkey=rzn2w0d0qqgsrubwmu3wpotlw&st=dmvqu70t&dl=0&raw=1"
                autoPlay
                loop
                playsInline
                preload="auto"
                muted
              />
            </div>
          </>
        )}
      </section>
      {/* Hero Section */}
      {/* Service Content */}
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          {currentService.icon} {currentService.title}
        </h1>
        <p className="mt-4 text-lg">{currentService.description}</p>

        {currentService.motto && (
          <blockquote className="mt-6 italic text-gray-600">
            {currentService.motto}
          </blockquote>
        )}

        {/* <ul className="mt-6 list-disc list-inside space-y-2">
          {currentService.items?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul> */}

        <div className="w-full mt-6 rounded-lg  shadow-2xl ">
          {currentService.items?.map((item, idx) => (
            <AccordionItem
              key={idx}
              title={item.title}
              description={item.description}
              docs={item.docs}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get the best service every
              step of the way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your needs and provide expert guidance on the best solutions for your situation.",
              },
              {
                step: "02",
                title: "Documentation",
                description:
                  "Our team handles all the paperwork and documentation required for your specific service.",
              },
              {
                step: "03",
                title: "Completion",
                description:
                  "We ensure everything is completed efficiently and keep you updated throughout the process.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* // whats app links for both services */}

      <section className="bg-gray-100 py-8">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Get Started with Our {currentService.title}?
          </h2>

          {currentService.id === "business" ? (
            <a
              href="https://wa.me/+971581995107"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mb-4"
            >
              <FaWhatsapp className="inline-block mr-2" />
              {t("whatsapp")}
            </a>
          ) : (
            <>
              <a
                href="https://wa.me/+971521539277"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mb-4"
              >
                <FaWhatsapp className="inline-block mr-2" />
                {t("whatsapp")}
              </a>
              <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                  {/* TikTok Card */}
                  <motion.a
                    href="https://www.tiktok.com/@mohisl?_t=ZT-8ylNdZ43Fax&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src="/tiktok_screen.png"
                      alt="TikTok Profile"
                      className="w-full h-[85%] object-cover"
                    />
                    <div className="p-6 text-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl font-bold text-gray-800"
                      >
                        Join over{" "}
                        <span className="text-primary">600K followers</span> on
                        TikTok
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 mt-2"
                      >
                        Follow us for the best travel deals and adventures.
                      </motion.p>
                    </div>
                  </motion.a>

                  {/* Instagram Card */}
                  <motion.a
                    href="https://www.instagram.com/faridaphoeniqia?igsh=MTVxaG15NTRrcm5vag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src="/ig_screen.png"
                      alt="Instagram Profile"
                      className="w-full h-[85%] object-cover"
                    />
                    <div className="p-6 text-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl font-bold text-gray-800"
                      >
                        Join over{" "}
                        <span className="text-pink-500">400K followers</span> on
                        Instagram
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 mt-2"
                      >
                        Discover beautiful destinations and travel inspiration.
                      </motion.p>
                    </div>
                  </motion.a>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
