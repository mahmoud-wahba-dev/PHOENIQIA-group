import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <FaCheckCircle />,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide'
    },
    {
      icon: <FaUsers />,
      title: 'Experience',
      description: 'Years of experience in UAE business and tourism sectors'
    },
    {
      icon: <FaAward />,
      title: 'Quality',
      description: 'High-quality services that exceed client expectations'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust',
      description: 'Building lasting relationships based on trust and reliability'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-secondary-soft max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/phoeniqia.jpg"
                alt="PHOENIQIA Group Office"
                className="rounded-xl shadow-lg w-full"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.description')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('about.mission')}
              </p>
              <p className="text-gray-600 mb-8">
                {t('about.values')}
              </p>
              {/* <WhatsAppButton 
                message="Hello PHOENIQIA Group, I would like to know more about your company and services."
              /> */}
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2> */}
            {/* <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('about.cta')}
            </p>
            <WhatsAppButton 
              className="text-lg px-8 py-4"
              message="Hello PHOENIQIA Group, I'm ready to start working with you. Please provide more information about your services."
            /> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;