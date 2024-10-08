function changeLanguage() {
    const language = document.getElementById('languageSelect').value;

    const translations = {
        en: {
            logo: "My Portfolio",
            navAbout: "About Me",
            navProjects: "Projects",
            heroTitle: "Hello, I am",
            heroDescription: "A person who is interested in programming",
            projectsBtn: "My Projects",
            aboutTitle: "About Me",
            aboutDescription1: "I am Alexander Nabokov. I am 20 years old and I am passionate about programming. I know Python, JavaScript, and C#.",
            aboutDescription2: "My experience includes developing Telegram bots, a portfolio website, and using the Gemini API in my projects.",
            projectsTitle: "My Projects",
            project1Title: "SnapChef AI",
            project1Description: "The introduction of Gemini Flash, which analyzes photos and provides recipes.",
            project1Link: "Learn more",
            project2Title: "Telegram Bot for Voice Message Transcription",
            project2Description: "A bot that converts voice messages into text.",
            project2Link: "Learn more",
            footerName: "Alexander Nabokov"
        },
        de: {
            logo: "Mein Portfolio",
            navAbout: "Über mich",
            navProjects: "Projekte",
            heroTitle: "Hallo, ich bin",
            heroDescription: "KI-Entwickler und Schöpfer innovativer Lösungen",
            projectsBtn: "Meine Projekte",
            aboutTitle: "Über mich",
            aboutDescription1: "Ich bin Alexander Nabokov. Ich bin 20 Jahre alt und programmiere leidenschaftlich gerne. Ich kenne Python, JavaScript und C #.",
            aboutDescription2: "Meine Erfahrung umfasst die Entwicklung von Telegramm-Bots, einer Portfolio-Website und die Verwendung der Gemini-API in meinen Projekten.",
            projectsTitle: "Meine Projekte",
            project1Title: "SnapChef AI",
            project1Description: "Die Einführung von Gemini Flash, das Fotos analysiert und Rezepte bereitstellt.",
            project1Link: "Mehr erfahren",
            project2Title: "Telegram Bot für Sprachnachrichtentranskription",
            project2Description: "Ein Bot, der Sprachnachrichten in Text umwandelt.",
            project2Link: "Mehr erfahren",
            footerName: "Alexander Nabokov"
        }
    };

    // Изменение текста на основе выбранного языка
    document.getElementById('logo').textContent = translations[language].logo;
    document.getElementById('nav-about').textContent = translations[language].navAbout;
    document.getElementById('nav-projects').textContent = translations[language].navProjects;
    document.getElementById('hero-title').textContent = `${translations[language].heroTitle} ${document.getElementById('name').textContent}`;
    document.getElementById('hero-description').textContent = translations[language].heroDescription;
    document.getElementById('projects-btn').textContent = translations[language].projectsBtn;
    document.getElementById('about-title').textContent = translations[language].aboutTitle;
    document.getElementById('about-description-1').textContent = translations[language].aboutDescription1;
    document.getElementById('about-description-2').textContent = translations[language].aboutDescription2;
    document.getElementById('projects-title').textContent = translations[language].projectsTitle;
    document.getElementById('project-1-title').textContent = translations[language].project1Title;
    document.getElementById('project-1-description').textContent = translations[language].project1Description;
    document.getElementById('project-1-link').textContent = translations[language].project1Link;
    document.getElementById('project-2-title').textContent = translations[language].project2Title;
    document.getElementById('project-2-description').textContent = translations[language].project2Description;
    document.getElementById('project-2-link').textContent = translations[language].project2Link;
    document.getElementById('footer-name').textContent = translations[language].footerName;
}
