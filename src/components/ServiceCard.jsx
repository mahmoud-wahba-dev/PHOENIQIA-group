import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

const ServiceCard = ({ icon, title, description, items, motto, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl text-primary-600">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      
      {motto && (
        <div className="bg-primary-50 p-4 rounded-lg mb-6">
          <p className="text-primary-700 font-medium italic">{motto}</p>
        </div>
      )}
      
      <WhatsAppButton 
        message={`Hello PHOENIQIA Group, I'm interested in your ${title} services. Please provide more information.`}
        className="w-full justify-center"
      />
    </motion.div>
  );
};

export default ServiceCard;