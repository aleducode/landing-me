import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Translation data - same as in translations.js but for React
const translations = {
  en: {
    // Header
    alejandro_duque: 'Alejandro Duque',
    cto_developer: 'CTO/Tech Leader/Developer',
    available: 'Available',
    
    // Navigation
    about: 'About',
    portfolio: 'Portfolio', 
    services: 'Services',
    contact: 'Contact',
    book_a_call: 'Book a Call',
    
    // Home Page
    hello_intro: '👋 Hello, I\'m Alejandro – Dynamic CTO & Tech Leader!',
    intro_description: 'Dynamic technology leader with +8 years of experience driving innovation in high-impact roles as CTO and VP of Engineering. Django/Python + Docker + AWS expert delivering robust solutions serving millions of active users across LATAM. Universidad EIA graduate with 2K+ LinkedIn followers.',
    creative_journey: 'My Technical Leadership Journey',
    top_work_projects: 'Top Projects & Achievements',
    solutions_goals: 'Tech Solutions & Engineering',
    start_conversation: 'Let\'s Build Something Great',
    
    // Footer
    all_rights_reserved: '© 2024, All Rights Reserved',
    licenses: 'Licenses',
    
    // Page Titles
    page_title: 'Alejandro Duque - CTO/Tech Leader',
    page_description: 'Dynamic CTO with +8 years driving innovation. Specializing in Django, Docker, PostgreSQL - delivering scalable solutions serving millions of users.',
    
    // About Page
    about_title: 'Engineering Excellence – My Leadership Journey',
    about_description: 'Discover my +8 years journey as a technology leader, from VP of Engineering to CTO, driving innovation across high-impact startups in LATAM serving millions of users.',
    about_content_title: '✨ Engineering Leadership & Innovation Mindset',
    about_content_text_1: 'I\'m Alejandro Duque, a Colombian-born CTO and startup technology leader with over 8 years of C-level experience driving innovation across LATAM. From leading Hacku (Top 100 LATAM startup) as CTO to scaling Medicato\'s engineering organization in Mexico as VP of Engineering, I\'ve built high-performing teams and architected solutions serving millions of users.',
    about_content_text_2: 'My expertise spans hands-on technical leadership with Django/Python + Docker + AWS to strategic C-level decision making for startup growth. With Universidad EIA engineering foundation and continuous Platzi certifications (Python Backend, AWS, Blockchain, Data Engineering), I excel at analyzing complex problems and focusing on pragmatic solutions that scale.',
    about_skills_title: '🔆 Technical Leadership & Core Technologies',
    about_awards_title: '🏆 Key Achievements & Recognition',
    innovative_web_developer: '🏆 Top 100 Startups LATAM (Hacku CTO)',
    top_emerging_tech_talent: '🏅 Universidad EIA Engineering Graduate',
    best_app_developer: '🥇 2K+ LinkedIn Followers & Recommendations',
    
    // Portfolio Page
    portfolio_title: 'Startup Leadership & Technical Achievements',
    portfolio_description: 'Explore my journey across high-impact startups and government projects in LATAM. From CTO roles to VP Engineering positions, each project showcases technical excellence and leadership in building scalable solutions serving millions of users.',
    website_type: 'Website',
    
    // Services Page
    services_title: 'Technical Leadership & Engineering Solutions',
    services_description: 'Proven expertise in driving innovation and operational efficiency through advanced technology solutions. From CTO consulting to full-stack development, delivering exceptional results for high-impact projects.',
    web_development: 'Full-Stack Development',
    web_development_description: 'Enterprise-grade applications using Django/Python + Docker + AWS stack. Proven experience serving 30K+ daily active users with high transactional activity and real-time microservices. PostgreSQL, Redis, and cloud-native architectures.',
    full_stack_development: 'Technical Leadership',
    full_stack_development_description: 'CTO and VP Engineering consulting for startups and scale-ups. Universidad EIA engineering background with continuous Platzi certifications. Expert at analyzing complex problems and focusing on pragmatic solutions that scale.',
    ecommerce_solutions: 'Cloud & Data Engineering',
    ecommerce_solutions_description: 'AWS cloud architectures and data engineering solutions. Blockchain and Ethereum expertise with comprehensive platform solutions using Django, Docker, and modern data pipelines for scalable systems.',
    website_optimization: 'System Architecture',
    website_optimization_description: 'High-availability systems serving millions of users. Expertise in microservices architecture, real-time connections, API design with Django Rest Framework, and performance optimization.',
    tech_stack_title: '🧩 Core Technologies & Engineering Stack',
    tech_stack_description: 'Advanced technology stack proven in production environments serving millions of users. From backend architecture to mobile development, delivering scalable solutions across LATAM startups.',
    
    // Contact Page
    contact_title: 'Let\'s Connect and Collaborate',
    contact_description: 'Reach out to discuss your project or ideas. I\'m here to provide support and turn your vision into reality.',
    get_in_touch: '📤 Get In Touch',
    get_in_touch_description: 'Have a question or want to start a project? Contact me, and let\'s make your ideas come to life!',
    your_name: 'Your Name',
    email: 'Email',
    how_can_i_help: 'How can I help you?',
    send_message: 'Send a Message',
    follow_me: '🔹 Follow Me',
    book_call_title: '🦋 Book a Call',
    book_call_description: 'Have a question or want to start a project? Contact me, and let\'s make your ideas come to life!'
  },
  es: {
    // Header
    alejandro_duque: 'Alejandro Duque',
    cto_developer: 'CTO/Líder Tecnológico/Desarrollador',
    available: 'Disponible',
    
    // Navigation
    about: 'Acerca de',
    portfolio: 'Portafolio',
    services: 'Servicios',
    contact: 'Contacto',
    book_a_call: 'Reservar Llamada',
    
    // Home Page
    hello_intro: '👋 ¡Hola, soy Alejandro – CTO & Líder Tecnológico Dinámico!',
    intro_description: 'Líder tecnológico dinámico con +8 años de experiencia impulsando la innovación en roles de alto impacto como CTO y VP de Ingeniería. Especializado en Django, Docker y PostgreSQL para entregar soluciones robustas sirviendo millones de usuarios activos en LATAM.',
    creative_journey: 'Mi Trayectoria en Liderazgo Técnico',
    top_work_projects: 'Proyectos Top y Logros',
    solutions_goals: 'Soluciones Técnicas e Ingeniería',
    start_conversation: 'Construyamos Algo Grandioso',
    
    // Footer
    all_rights_reserved: '© 2024, Todos los Derechos Reservados',
    licenses: 'Licencias',
    
    // Page Titles
    page_title: 'Alejandro Duque - CTO/Líder Tecnológico',
    page_description: 'CTO dinámico con +8 años impulsando la innovación. Especializado en Django, Docker, PostgreSQL - entregando soluciones escalables para millones de usuarios.',
    
    // About Page
    about_title: 'Excelencia en Ingeniería – Mi Trayectoria de Liderazgo',
    about_description: 'Descubre mi trayectoria de +8 años como líder tecnológico, desde VP de Ingeniería hasta CTO, impulsando la innovación en startups de alto impacto en LATAM sirviendo millones de usuarios.',
    about_content_title: '✨ Liderazgo en Ingeniería y Mentalidad de Innovación',
    about_content_text_1: 'Soy Alejandro Duque, un CTO y líder tecnológico colombiano con más de 8 años de experiencia C-level impulsando la innovación en startups de LATAM. Desde liderar Hacku (Top 100 startups LATAM) como CTO hasta escalar la organización de ingeniería de Medicato en México como VP de Ingeniería, he construido equipos de alto rendimiento y arquitecturas sirviendo millones de usuarios.',
    about_content_text_2: 'Mi experiencia abarca desde liderazgo técnico hands-on con Django, Docker y PostgreSQL hasta toma de decisiones estratégicas C-level para el crecimiento de startups. Prospero en entornos startup de ritmo acelerado, construyendo culturas de ingeniería que entregan resultados excepcionales mientras mantienen la excelencia técnica y fomentan la innovación continua en equipos distribuidos.',
    about_skills_title: '🔆 Liderazgo Técnico y Tecnologías Core',
    about_awards_title: '🏆 Logros Clave y Reconocimiento',
    innovative_web_developer: '🏆 Top 100 Startups LATAM (Hacku)',
    top_emerging_tech_talent: '🏅 Experiencia CTO & VP Ingeniería',
    best_app_developer: '🥇 Sirviendo +30K Usuarios Activos Diarios',
    
    // Portfolio Page
    portfolio_title: 'Liderazgo Startup y Logros Técnicos',
    portfolio_description: 'Explora mi trayectoria en startups de alto impacto y proyectos gubernamentales en LATAM. Desde roles CTO hasta posiciones VP de Ingeniería, cada proyecto muestra excelencia técnica y liderazgo construyendo soluciones escalables sirviendo millones de usuarios.',
    website_type: 'Sitio Web',
    
    // Services Page
    services_title: 'Explora Mi Gama de Servicios Especializados',
    services_description: 'Explora servicios diseñados para dar vida a tu visión. Desde soluciones innovadoras hasta soporte experto, ofrezco todo lo necesario para resultados excepcionales.',
    web_development: 'Desarrollo Web',
    web_development_description: 'Sitios web personalizados y de alto rendimiento que combinan diseño moderno con funcionalidad, adaptados para satisfacer tus necesidades específicas.',
    full_stack_development: 'Desarrollo Full-Stack',
    full_stack_development_description: 'Servicios de desarrollo completos, cubriendo tanto front-end como back-end, para crear aplicaciones web robustas y escalables.',
    ecommerce_solutions: 'Soluciones E-Commerce',
    ecommerce_solutions_description: 'Crear y optimizar plataformas E-Commerce que ofrecen una experiencia de compra fluida, desde el diseño de la tienda hasta la integración de pagos.',
    website_optimization: 'Optimización de Sitios Web',
    website_optimization_description: 'Mejorar el rendimiento, velocidad y SEO del sitio web para mejorar la experiencia del usuario y asegurar mejor visibilidad en motores de búsqueda.',
    tech_stack_title: '🧩 Herramientas y Tecnologías que Impulsan Mis Creaciones',
    tech_stack_description: 'Explora las herramientas y tecnologías de vanguardia que uso para construir soluciones digitales innovadoras y efectivas, desde aplicaciones web y móviles hasta integraciones fluidas y optimizaciones.',
    
    // Contact Page
    contact_title: 'Conectemos y Colaboremos',
    contact_description: 'Contáctame para discutir tu proyecto o ideas. Estoy aquí para brindar apoyo y convertir tu visión en realidad.',
    get_in_touch: '📤 Ponerse en Contacto',
    get_in_touch_description: '¿Tienes una pregunta o quieres comenzar un proyecto? Contáctame y hagamos realidad tus ideas!',
    your_name: 'Tu Nombre',
    email: 'Correo Electrónico',
    how_can_i_help: '¿Cómo puedo ayudarte?',
    send_message: 'Enviar Mensaje',
    follow_me: '🔹 Sígueme',
    book_call_title: '🦋 Reservar Llamada',
    book_call_description: '¿Tienes una pregunta o quieres comenzar un proyecto? Contáctame y hagamos realidad tus ideas!'
  },
  fr: {
    // Header
    alejandro_duque: 'Alejandro Duque',
    cto_developer: 'CTO/Leader Technologique/Développeur',
    available: 'Disponible',
    
    // Navigation
    about: 'À propos',
    portfolio: 'Portfolio',
    services: 'Services',
    contact: 'Contact',
    book_a_call: 'Réserver un Appel',
    
    // Home Page
    hello_intro: '👋 Bonjour, je suis Alejandro – Leader Technologique Dynamique !',
    intro_description: 'CTO avec +8 ans d\'expérience dans l\'innovation en rôles à fort impact. Spécialisé en Django, Docker et PostgreSQL pour livrer des solutions robustes servant des millions d\'utilisateurs. Transformons vos idées en solutions numériques évolutives !',
    creative_journey: 'Mon Parcours en Leadership Technique',
    top_work_projects: 'Portfolio et Projets Techniques',
    solutions_goals: 'Solutions Tech et Conseil',
    start_conversation: 'Construisons Quelque Chose de Grand',
    
    // Footer
    all_rights_reserved: '© 2024, Tous Droits Réservés',
    licenses: 'Licences',
    
    // Page Titles
    page_title: 'Alejandro Duque - CTO/Leader Technologique',
    page_description: 'CTO dynamique avec +8 ans d\'innovation. Spécialisé en Django, Docker, PostgreSQL - livrant des solutions évolutives pour des millions d\'utilisateurs.',
    
    // About Page
    about_title: 'Dans Mon Monde – L\'Histoire Derrière le Travail',
    about_description: 'Découvrez mon parcours et l\'inspiration derrière mon travail. Découvrez ce qui me motive et comment mes expériences façonnent ma vision créative.',
    about_content_title: '✨ La Motivation, la Passion et la Vision Derrière Mon Travail',
    about_content_text_1: 'Je suis Alejandro Duque, un CTO et leader technologique colombien avec plus de 8 ans d\'expérience C-level conduisant l\'innovation dans les startups LATAM. De la direction d\'Hacku (Top 100 startups LATAM) en tant que CTO à la mise à l\'échelle de l\'organisation d\'ingénierie de Medicato au Mexique en tant que VP d\'Ingénierie, j\'ai construit des équipes performantes et des architectures servant des millions d\'utilisateurs.',
    about_content_text_2: 'Je mélange compétences techniques et design pour créer des solutions fluides et conviviales, repoussant toujours les limites pour dépasser les attentes.',
    about_skills_title: '🔆 Libérant Mes Super-Pouvoirs Compétents',
    about_awards_title: '🏆 Présentant Mes Prix et Honneurs',
    innovative_web_developer: '🏆 Développeur Web Innovant',
    top_emerging_tech_talent: '🏅 Meilleur Talent Tech Émergent',
    best_app_developer: '🥇 Meilleur Développeur d\'Apps',
    
    // Portfolio Page
    portfolio_title: 'Collection de Mes Solutions Exceptionnelles',
    portfolio_description: 'Explorez une sélection de mes meilleurs projets numériques, où la créativité rencontre l\'innovation. Chaque pièce reflète mon engagement à livrer des solutions impactantes.',
    website_type: 'Site Web',
    
    // Services Page
    services_title: 'Explorez Ma Gamme de Services Spécialisés',
    services_description: 'Explorez des services conçus pour donner vie à votre vision. De solutions innovantes à un support expert, j\'offre tout ce qui est nécessaire pour des résultats exceptionnels.',
    web_development: 'Développement Web',
    web_development_description: 'Sites web personnalisés et haute performance qui combinent design moderne et fonctionnalité, adaptés pour répondre à vos besoins spécifiques.',
    full_stack_development: 'Développement Full-Stack',
    full_stack_development_description: 'Services de développement de bout en bout, couvrant à la fois front-end et back-end, pour créer des applications web robustes et évolutives.',
    ecommerce_solutions: 'Solutions E-Commerce',
    ecommerce_solutions_description: 'Créer et optimiser des plateformes E-Commerce qui offrent une expérience d\'achat fluide, de la conception de vitrine à l\'intégration de paiement.',
    website_optimization: 'Optimisation de Site Web',
    website_optimization_description: 'Améliorer les performances, la vitesse et le SEO du site web pour améliorer l\'expérience utilisateur et assurer une meilleure visibilité sur les moteurs de recherche.',
    tech_stack_title: '🧩 Outils et Technologies Alimentant Mes Créations',
    tech_stack_description: 'Explorez les outils et technologies de pointe que j\'utilise pour construire des solutions numériques innovantes et efficaces, des applications web et mobiles aux intégrations fluides et optimisations.',
    
    // Contact Page
    contact_title: 'Connectons-nous et Collaborons',
    contact_description: 'Contactez-moi pour discuter de votre projet ou idées. Je suis là pour fournir du support et transformer votre vision en réalité.',
    get_in_touch: '📤 Prendre Contact',
    get_in_touch_description: 'Avez-vous une question ou voulez-vous commencer un projet? Contactez-moi et donnons vie à vos idées!',
    your_name: 'Votre Nom',
    email: 'Email',
    how_can_i_help: 'Comment puis-je vous aider?',
    send_message: 'Envoyer un Message',
    follow_me: '🔹 Suivez-moi',
    book_call_title: '🦋 Réserver un Appel',
    book_call_description: 'Avez-vous une question ou voulez-vous commencer un projet? Contactez-moi et donnons vie à vos idées!'
  },
  de: {
    // Header
    alejandro_duque: 'Alejandro Duque',
    cto_developer: 'CTO/Tech Leader/Entwickler',
    available: 'Verfügbar',
    
    // Navigation
    about: 'Über mich',
    portfolio: 'Portfolio',
    services: 'Dienstleistungen',
    contact: 'Kontakt',
    book_a_call: 'Anruf Buchen',
    
    // Home Page
    hello_intro: '👋 Hallo, ich bin Alejandro – Dynamischer Technology Leader!',
    intro_description: 'CTO mit +8 Jahren Innovation in wirkungsvollen Rollen. Spezialisiert auf Django, Docker und PostgreSQL für robuste Lösungen für Millionen von Nutzern. Lassen Sie uns Ihre Ideen in skalierbare digitale Lösungen verwandeln!',
    creative_journey: 'Meine Technische Führungsreise',
    top_work_projects: 'Portfolio & Technische Projekte',
    solutions_goals: 'Tech-Lösungen & Beratung',
    start_conversation: 'Lassen Sie uns etwas Großes bauen',
    
    // Footer
    all_rights_reserved: '© 2024, Alle Rechte Vorbehalten',
    licenses: 'Lizenzen',
    
    // Page Titles
    page_title: 'Alejandro Duque - CTO/Tech Leader',
    page_description: 'Dynamischer CTO mit +8 Jahren Innovation. Spezialisiert auf Django, Docker, PostgreSQL - skalierbare Lösungen für Millionen von Nutzern.',
    
    // About Page
    about_title: 'In Meine Welt – Die Geschichte Hinter der Arbeit',
    about_description: 'Werfen Sie einen Blick in meine Reise und die Inspiration hinter meiner Arbeit. Entdecken Sie, was mich antreibt und wie meine Erfahrungen meine kreative Vision formen.',
    about_content_title: '✨ Der Antrieb, die Leidenschaft und Vision Hinter Meiner Arbeit',
    about_content_text_1: 'Ich bin Alejandro Duque, ein kolumbianischer CTO und Startup-Technologieführer mit über 8 Jahren C-Level-Erfahrung, der Innovation in LATAM vorantreibt. Von der Leitung von Hacku (Top 100 LATAM-Startup) als CTO bis zur Skalierung der Engineering-Organisation von Medicato in Mexiko als VP Engineering habe ich leistungsstarke Teams und Architekturen aufgebaut, die Millionen von Benutzern dienen.',
    about_content_text_2: 'Ich verbinde technische Fähigkeiten mit Design, um nahtlose, benutzerfreundliche Lösungen zu schaffen, die immer Grenzen überschreiten, um Erwartungen zu übertreffen.',
    about_skills_title: '🔆 Meine Geschickten Superkräfte Entfesseln',
    about_awards_title: '🏆 Meine Auszeichnungen und Ehrungen Präsentieren',
    innovative_web_developer: '🏆 Innovativer Web-Entwickler',
    top_emerging_tech_talent: '🏅 Top Aufstrebendes Tech-Talent',
    best_app_developer: '🥇 Bester App-Entwickler',
    
    // Portfolio Page
    portfolio_title: 'Sammlung Meiner Außergewöhnlichen Lösungen',
    portfolio_description: 'Erkunden Sie eine Auswahl meiner besten digitalen Projekte, wo Kreativität auf Innovation trifft. Jedes Stück spiegelt mein Engagement wider, wirkungsvolle Lösungen zu liefern.',
    website_type: 'Website',
    
    // Services Page
    services_title: 'Erkunden Sie Meine Palette Spezialisierter Dienstleistungen',
    services_description: 'Erkunden Sie Dienstleistungen, die darauf ausgelegt sind, Ihre Vision zum Leben zu erwecken. Von innovativen Lösungen bis hin zu expertem Support biete ich alles, was für außergewöhnliche Ergebnisse benötigt wird.',
    web_development: 'Web-Entwicklung',
    web_development_description: 'Maßgeschneiderte, leistungsstarke Websites, die modernes Design mit Funktionalität kombinieren, zugeschnitten auf Ihre spezifischen Bedürfnisse.',
    full_stack_development: 'Full-Stack-Entwicklung',
    full_stack_development_description: 'End-to-End-Entwicklungsdienste, die sowohl Front-End als auch Back-End abdecken, um robuste und skalierbare Webanwendungen zu erstellen.',
    ecommerce_solutions: 'E-Commerce-Lösungen',
    ecommerce_solutions_description: 'Erstellen und optimieren Sie E-Commerce-Plattformen, die ein nahtloses Einkaufserlebnis bieten, vom Schaufensterdesign bis zur Zahlungsintegration.',
    website_optimization: 'Website-Optimierung',
    website_optimization_description: 'Verbessern Sie Website-Performance, Geschwindigkeit und SEO, um die Benutzererfahrung zu verbessern und eine bessere Sichtbarkeit in Suchmaschinen zu gewährleisten.',
    tech_stack_title: '🧩 Tools & Technologien, die Meine Kreationen Antreiben',
    tech_stack_description: 'Erkunden Sie die hochmodernen Tools und Technologien, die ich verwende, um innovative und effektive digitale Lösungen zu entwickeln, von Web- und mobilen Apps bis hin zu nahtlosen Integrationen und Optimierungen.',
    
    // Contact Page
    contact_title: 'Lassen Sie uns Verbinden und Zusammenarbeiten',
    contact_description: 'Kontaktieren Sie mich, um Ihr Projekt oder Ihre Ideen zu besprechen. Ich bin hier, um Unterstützung zu bieten und Ihre Vision in die Realität umzusetzen.',
    get_in_touch: '📤 In Kontakt Treten',
    get_in_touch_description: 'Haben Sie eine Frage oder möchten ein Projekt starten? Kontaktieren Sie mich und lassen Sie uns Ihre Ideen zum Leben erwecken!',
    your_name: 'Ihr Name',
    email: 'E-Mail',
    how_can_i_help: 'Wie kann ich Ihnen helfen?',
    send_message: 'Nachricht Senden',
    follow_me: '🔹 Folgen Sie Mir',
    book_call_title: '🦋 Anruf Buchen',
    book_call_description: 'Haben Sie eine Frage oder möchten ein Projekt starten? Kontaktieren Sie mich und lassen Sie uns Ihre Ideen zum Leben erwecken!'
  },
  pt: {
    // Header
    alejandro_duque: 'Alejandro Duque',
    cto_developer: 'CTO/Líder Tecnológico/Desenvolvedor',
    available: 'Disponível',
    
    // Navigation
    about: 'Sobre',
    portfolio: 'Portfólio',
    services: 'Serviços',
    contact: 'Contato',
    book_a_call: 'Agendar Chamada',
    
    // Home Page
    hello_intro: '👋 Olá, sou Alejandro – Líder Tecnológico Dinâmico!',
    intro_description: 'CTO com +8 anos impulsionando inovação em papéis de alto impacto. Especializado em Django, Docker e PostgreSQL para entregar soluções robustas servindo milhões de usuários. Vamos transformar suas ideias em soluções digitais escaláveis!',
    creative_journey: 'Minha Jornada em Liderança Técnica',
    top_work_projects: 'Portfólio & Projetos Técnicos',
    solutions_goals: 'Soluções Tech & Consultoria',
    start_conversation: 'Vamos Construir Algo Grandioso',
    
    // Footer
    all_rights_reserved: '© 2024, Todos os Direitos Reservados',
    licenses: 'Licenças',
    
    // Page Titles
    page_title: 'Alejandro Duque - CTO/Líder Tecnológico',
    page_description: 'CTO dinâmico com +8 anos impulsionando inovação. Especializado em Django, Docker, PostgreSQL - entregando soluções escaláveis para milhões de usuários.',
    
    // About Page
    about_title: 'Dentro do Meu Mundo – A História Por Trás do Trabalho',
    about_description: 'Dê uma olhada na minha jornada e na inspiração por trás do meu trabalho. Descubra o que me motiva e como minhas experiências moldam minha visão criativa.',
    about_content_title: '✨ A Motivação, Paixão e Visão Por Trás do Meu Trabalho',
    about_content_text_1: 'Sou Alejandro Duque, um CTO e líder tecnológico colombiano com mais de 8 anos de experiência C-level impulsionando inovação em startups LATAM. Desde liderar Hacku (Top 100 startups LATAM) como CTO até escalar a organização de engenharia da Medicato no México como VP de Engenharia, construí equipes de alta performance e arquiteturas servindo milhões de usuários.',
    about_content_text_2: 'Combino habilidades técnicas com design para criar soluções fluidas e amigáveis ao usuário, sempre empurrando limites para superar expectativas.',
    about_skills_title: '🔆 Liberando Meus Superpoderes Habilidosos',
    about_awards_title: '🏆 Apresentando Meus Prêmios e Honrarias',
    innovative_web_developer: '🏆 Desenvolvedor Web Inovador',
    top_emerging_tech_talent: '🏅 Melhor Talento Tech Emergente',
    best_app_developer: '🥇 Melhor Desenvolvedor de Apps',
    
    // Portfolio Page
    portfolio_title: 'Coleção das Minhas Soluções Excepcionais',
    portfolio_description: 'Explore uma seleção dos meus melhores projetos digitais, onde criatividade encontra inovação. Cada peça reflete meu comprometimento em entregar soluções impactantes.',
    website_type: 'Website',
    
    // Services Page
    services_title: 'Explore Minha Gama de Serviços Especializados',
    services_description: 'Explore serviços criados para dar vida à sua visão. De soluções inovadoras a suporte especializado, ofereço tudo o que é necessário para resultados excepcionais.',
    web_development: 'Desenvolvimento Web',
    web_development_description: 'Websites personalizados e de alta performance que combinam design moderno com funcionalidade, adaptados para atender suas necessidades específicas.',
    full_stack_development: 'Desenvolvimento Full-Stack',
    full_stack_development_description: 'Serviços de desenvolvimento completos, cobrindo tanto front-end quanto back-end, para criar aplicações web robustas e escaláveis.',
    ecommerce_solutions: 'Soluções E-Commerce',
    ecommerce_solutions_description: 'Criar e otimizar plataformas E-Commerce que oferecem uma experiência de compra fluida, desde design da vitrine até integração de pagamentos.',
    website_optimization: 'Otimização de Website',
    website_optimization_description: 'Melhorar performance, velocidade e SEO do website para aprimorar a experiência do usuário e garantir melhor visibilidade em motores de busca.',
    tech_stack_title: '🧩 Ferramentas e Tecnologias Impulsionando Minhas Criações',
    tech_stack_description: 'Explore as ferramentas e tecnologias de ponta que uso para construir soluções digitais inovadoras e eficazes, desde aplicações web e móveis até integrações fluidas e otimizações.',
    
    // Contact Page
    contact_title: 'Vamos nos Conectar e Colaborar',
    contact_description: 'Entre em contato para discutir seu projeto ou ideias. Estou aqui para fornecer suporte e transformar sua visão em realidade.',
    get_in_touch: '📤 Entrar em Contato',
    get_in_touch_description: 'Tem uma pergunta ou quer começar um projeto? Entre em contato comigo e vamos dar vida às suas ideias!',
    your_name: 'Seu Nome',
    email: 'Email',
    how_can_i_help: 'Como posso ajudá-lo?',
    send_message: 'Enviar Mensagem',
    follow_me: '🔹 Siga-me',
    book_call_title: '🦋 Agendar Chamada',
    book_call_description: 'Tem uma pergunta ou quer começar um projeto? Entre em contato comigo e vamos dar vida às suas ideias!'
  }
};

// Types
type Language = keyof typeof translations;
type TranslationKey = keyof typeof translations['en'];

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

// Context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Hook to detect browser language
function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0] as Language;
  
  const supportedLanguages: Language[] = ['en', 'es', 'fr', 'de', 'pt'];
  return supportedLanguages.includes(langCode) ? langCode : 'en';
}

// Provider component
export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Initialize language from browser or localStorage
    const savedLanguage = typeof window !== 'undefined' 
      ? localStorage.getItem('preferred-language') as Language 
      : null;
    
    const initialLanguage = savedLanguage && translations[savedLanguage] 
      ? savedLanguage 
      : detectBrowserLanguage();
    
    setLanguageState(initialLanguage);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Hook to use translations
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

// Language Switcher Component
export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="fixed top-5 right-5 z-50">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-black/80 text-white border border-white/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
        <option value="fr">🇫🇷 FR</option>
        <option value="de">🇩🇪 DE</option>
        <option value="pt">🇧🇷 PT</option>
      </select>
    </div>
  );
}