import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem('lang') || 'pt';

i18n.use(initReactI18next).init({
  lng: savedLang,
  fallbackLng: "pt",

  interpolation: {
    escapeValue: false, // react already escapes
  },

  resources: {
    pt: {
      translation: {
        headerTitle: "RB",
        headerSubtitle: "Toque de Beleza",
        
        // services section
        servicesTitle: "Serviços",
        skinCleansingLabel: "Limpeza de Pele",
        footSpaLabel: "Spa para os Pés",
        manicureLabel: "Manicure",
        gelNailsLabel: "Unha em Gel",
        bambooTherapyLabel: "Bambu Terapia",
        eyebrowDesignLabel: "Design de Sobrancelha",
        eyebrowLiftLabel: "Lifting de Sobrancelha",
        eyelashLiftLabel: "Lifting de Cilios",
        eyelashExtenstionLiftLabel: "Lifting de Extensão de Cilios (fio a fio)",

        // epilation section
        epilationTitle: "Depilaçào",
        bikiniLineLabel: "Biquini",
        underarmsLabel: "Axila",
        legsLabel: "Perna",
        faceLabel: "Rosto",

        // contact section
        contactTitle: "Contato",
        contactEmailLabel: "E-Mail",
        contactPhoneLabel: "Telefone",
        contactAddressLabel: "Endereço",
      },
    },
    de: {
      translation: {
        headerTitle: "RB",
        headerSubtitle: "Ein hauch von Schönheit",
        
        // services section
        servicesTitle: "Dienstleistungen",
        skinCleansingLabel: "Hautreinigung",
        footSpaLabel: "Fussbad",
        manicureLabel: "Maniküre",
        gelNailsLabel: "Gelnägel",
        bambooTherapyLabel: "Bambus-Therapie",
        eyebrowDesignLabel: "Augenbrauenformung",
        eyebrowLiftLabel: "Augenbrauenlifting",
        eyelashLiftLabel: "Wimpernlifting",
        eyelashExtenstionLiftLabel: "Wimpernverlängerung (Wimper für Wimper)",

        // epilation section
        epilationTitle: "Haarentfernung",
        bikiniLineLabel: "Biqini",
        underarmsLabel: "Achselhöhle",
        legsLabel: "Beine",
        faceLabel: "Gesicht",

        // contact section
        contactTitle: "Kontakt",
        contactEmailLabel: "Email",
        contactPhoneLabel: "Telefon",
        contactAddressLabel: "Adresse",
      },
    },
  },
});

export default i18n;
