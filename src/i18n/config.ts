
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Navigation
          home: 'Home',
          aboutUs: 'About Us',
          departments: 'Departments',
          doctors: 'Our Doctors',
          blog: 'Health Blog',
          contactUs: 'Contact Us',
          callUs: 'Call Us',
          // About Us Submenu
          ourHistory: 'Our History',
          missionVision: 'Mission & Vision',
          leadership: 'Leadership',
          // Hero Banner
          excellenceTitle: 'Excellence in Healthcare',
          excellenceDesc: 'Providing compassionate care with cutting-edge technology',
          expertTitle: 'Expert Medical Professionals',
          expertDesc: 'Our team of specialists is dedicated to your well-being',
          modernTitle: 'Modern Facilities',
          modernDesc: 'State-of-the-art equipment for the best patient care',
          exploreHospital: 'Explore Our Hospital',
          meetDoctors: 'Meet Our Doctors',
          ourServices: 'Our Services'
        }
      },
      es: {
        translation: {
          // Navigation
          home: 'Inicio',
          aboutUs: 'Sobre Nosotros',
          departments: 'Departamentos',
          doctors: 'Nuestros Médicos',
          blog: 'Blog de Salud',
          contactUs: 'Contáctenos',
          callUs: 'Llámenos',
          // About Us Submenu
          ourHistory: 'Nuestra Historia',
          missionVision: 'Misión y Visión',
          leadership: 'Liderazgo',
          // Hero Banner
          excellenceTitle: 'Excelencia en Salud',
          excellenceDesc: 'Brindando atención compasiva con tecnología de vanguardia',
          expertTitle: 'Profesionales Médicos Expertos',
          expertDesc: 'Nuestro equipo de especialistas está dedicado a su bienestar',
          modernTitle: 'Instalaciones Modernas',
          modernDesc: 'Equipamiento de última generación para la mejor atención al paciente',
          exploreHospital: 'Explorar Nuestro Hospital',
          meetDoctors: 'Conocer a Nuestros Médicos',
          ourServices: 'Nuestros Servicios'
        }
      }
    }
  });

export default i18n;
