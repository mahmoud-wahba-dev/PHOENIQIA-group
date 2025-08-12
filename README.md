# PHOENIQIA - Tourism & Business Services Website

A modern, multilingual React website for PHOENIQIA, specializing in tourism, visa, and business setup services in the UAE.

## Features

- **Multilingual Support**: English and Arabic with RTL support
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **WhatsApp Integration**: Direct contact via WhatsApp throughout the site
- **Email Contact**: Contact form with EmailJS integration
- **Image Carousel**: Embla Carousel for image galleries
- **SEO Optimized**: Semantic HTML and proper meta tags

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React i18next** - Internationalization
- **React Hook Form** - Form handling
- **EmailJS** - Email service integration
- **Embla Carousel** - Image carousel component
- **React Icons** - Icon library

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LanguageSwitcher.jsx
│   ├── WhatsAppButton.jsx
│   ├── ServiceCard.jsx
│   └── ImageCarousel.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── i18n/               # Internationalization
│   ├── index.js
│   └── locales/
│       ├── en.json
│       └── ar.json
├── App.jsx
├── main.jsx
└── index.css
```

## Services Offered

### Business Services
- Company formation in the UAE
- Trade license issuance and renewal
- Residency permits processing
- Legal and financial support
- Business consultations

### Tourism Services
- Schengen visa processing
- VIP Umrah and Hajj trips
- Monthly pilgrimage packages
- Travel consultations

### Visa Services
- Tourist visa processing
- Residency permits for families
- Appeals for violators
- Tasheel and Amer transactions

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/pages/Contact.jsx`:
     ```javascript
     // Replace these with your actual EmailJS values
     'YOUR_SERVICE_ID'    // Your EmailJS service ID
     'YOUR_TEMPLATE_ID'   // Your EmailJS template ID
     'YOUR_PUBLIC_KEY'    // Your EmailJS public key
     ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Contact Information

- **Phone**: +971581995107
- **Email**: INFO@PHOENIQIA.COM
- **Locations**: TUNIS – DUBAI
- **WhatsApp**: Direct integration throughout the website

## Future Enhancements

The project is structured to easily integrate with Supabase for:
- Dynamic content management
- Admin dashboard
- Booking system
- User authentication
- Database-driven gallery and services

## License

© 2024 PHOENIQIA. All rights reserved.