import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    // Navbar
    nav_me: "ME",
    nav_experience: "EXPERIENCE",
    nav_portfolio: "PORTFOLIO",
    nav_skills: "SKILLS",
    nav_certifications: "CERTIFICATIONS",
    nav_courses: "COURSES",
    nav_contact: "Contact Me",

    // Hero
    hero_badge: "Future Software Engineer • NJIT Computer Science",
    hero_about: "About",
    hero_about_me: "Me",
    hero_title: "I'm",
    hero_title_2: "a Computer Science student at",
    hero_location: "(New Jersey, USA).",
    hero_p1: "Passionate about software engineering, technology, and building systems that solve real-world problems. Currently focused on improving my programming skills and exploring web development, algorithms, and tech-driven innovation.",
    hero_p2: "My goal is to grow into a strong engineer and contribute to impactful technology. Whether it's a clean UI or a robust backend, I love the craft of building things that actually work.",
    hero_interests: "I'm especially interested in:",
    hero_i1_bold: "Web Development",
    hero_i1_rest: " – building clean, responsive, modern interfaces.",
    hero_i2_bold: "Algorithms & Data Structures",
    hero_i2_rest: " – problem-solving at its core.",
    hero_i3_bold: "Tech-driven innovation",
    hero_i3_rest: " – leveraging tools to build what matters.",
    hero_contact: "Contact Me",
    hero_resume: "View Resume",
    hero_follow: "Follow me:",
    hero_available: "Available for work",

    // About
    about_label: "About Me",
    about_title: "Skills &",
    about_title_italic: "Languages",
    about_prog: "Programming Languages",
    about_frameworks: "Frameworks / Libraries",
    about_languages: "Languages",

    // Experience
    exp_label: "Career Journey",
    exp_title: "Experience",
    exp_title_italic: "that speaks.",
    exp_current: "Current",

    // Projects
    proj_label: "Featured Work",
    proj_title: "Projects",
    proj_title_italic: "that matter.",
    proj_soon: "Coming Soon",
    proj_soon_desc: "I'm currently working on some exciting projects. Stay tuned — they'll be here soon!",

    // Certifications
    cert_label: "Certifications",
    cert_title: "Credentials &",
    cert_title_italic: "achievements.",
    cert_view: "View",
    cert_pdf_soon: "PDF coming soon",
    cert_note: "* Some certificates are available in PDF only — they will be added soon.",

    // Courses
    courses_label: "NJIT Curriculum",
    courses_title: "Courses &",
    courses_title_italic: "curriculum.",
    courses_count: "courses",
    courses_credits: "credits",
    courses_filter_all: "All",

    // Contact
    contact_label: "Get In Touch",
    contact_title: "Let's build",
    contact_title_italic: "something great.",
    contact_name: "Name",
    contact_name_ph: "Your name...",
    contact_email: "Email",
    contact_email_ph: "your@email.com",
    contact_message: "Message",
    contact_message_ph: "Your message...",
    contact_send: "Send Message",
    contact_sending: "Sending...",
    contact_success: "Message sent! I'll get back to you soon.",
    contact_error: "Failed to send. Please try again.",
    contact_available: "Currently Available",
    contact_available_desc: "Open to new opportunities and exciting projects. Whether you need a developer or a collaborator, let's talk!",

    // Footer
    footer_rights: "All rights reserved.",
  },
  fr: {
    // Navbar
    nav_me: "MOI",
    nav_experience: "EXPÉRIENCE",
    nav_portfolio: "PORTFOLIO",
    nav_skills: "COMPÉTENCES",
    nav_certifications: "CERTIFICATIONS",
    nav_courses: "COURS",
    nav_contact: "Me Contacter",

    // Hero
    hero_badge: "Futur Ingénieur Logiciel • NJIT Informatique",
    hero_about: "À propos de",
    hero_about_me: "Moi",
    hero_title: "Je suis",
    hero_title_2: "étudiant en Informatique à",
    hero_location: "(New Jersey, États-Unis).",
    hero_p1: "Passionné par le génie logiciel, la technologie et la création de systèmes qui résolvent de vrais problèmes. Actuellement concentré sur l'amélioration de mes compétences en programmation et l'exploration du développement web, des algorithmes et de l'innovation technologique.",
    hero_p2: "Mon objectif est de devenir un ingénieur solide et de contribuer à des technologies impactantes. Que ce soit une interface soignée ou un backend robuste, j'aime le travail de construction de choses qui fonctionnent vraiment.",
    hero_interests: "Je m'intéresse particulièrement à :",
    hero_i1_bold: "Développement Web",
    hero_i1_rest: " – créer des interfaces modernes, propres et responsives.",
    hero_i2_bold: "Algorithmes & Structures de données",
    hero_i2_rest: " – la résolution de problèmes à son cœur.",
    hero_i3_bold: "Innovation technologique",
    hero_i3_rest: " – utiliser les outils pour construire ce qui compte.",
    hero_contact: "Me Contacter",
    hero_resume: "Voir le CV",
    hero_follow: "Me suivre :",
    hero_available: "Disponible pour travailler",

    // About
    about_label: "À Propos",
    about_title: "Compétences &",
    about_title_italic: "Langues",
    about_prog: "Langages de Programmation",
    about_frameworks: "Frameworks / Bibliothèques",
    about_languages: "Langues",

    // Experience
    exp_label: "Parcours Professionnel",
    exp_title: "Expérience",
    exp_title_italic: "qui parle.",
    exp_current: "En cours",

    // Projects
    proj_label: "Travaux Récents",
    proj_title: "Projets",
    proj_title_italic: "qui comptent.",
    proj_soon: "Bientôt disponible",
    proj_soon_desc: "Je travaille actuellement sur des projets passionnants. Restez à l'écoute — ils arrivent bientôt !",

    // Certifications
    cert_label: "Certifications",
    cert_title: "Diplômes &",
    cert_title_italic: "réalisations.",
    cert_view: "Voir",
    cert_pdf_soon: "PDF à venir",
    cert_note: "* Certains certificats sont disponibles en PDF uniquement — ils seront ajoutés prochainement.",

    // Courses
    courses_label: "Programme NJIT",
    courses_title: "Cours &",
    courses_title_italic: "programme.",
    courses_count: "cours",
    courses_credits: "crédits",
    courses_filter_all: "Tous",

    // Contact
    contact_label: "Me Contacter",
    contact_title: "Construisons",
    contact_title_italic: "quelque chose de grand.",
    contact_name: "Nom",
    contact_name_ph: "Votre nom...",
    contact_email: "Email",
    contact_email_ph: "votre@email.com",
    contact_message: "Message",
    contact_message_ph: "Votre message...",
    contact_send: "Envoyer le message",
    contact_sending: "Envoi en cours...",
    contact_success: "Message envoyé ! Je vous répondrai bientôt.",
    contact_error: "Échec de l'envoi. Veuillez réessayer.",
    contact_available: "Actuellement Disponible",
    contact_available_desc: "Ouvert aux nouvelles opportunités et projets passionnants. Que vous ayez besoin d'un développeur ou d'un collaborateur, parlons-en !",

    // Footer
    footer_rights: "Tous droits réservés.",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);