const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_classes: "Classes",
        nav_gallery: "Gallery",
        nav_tourist: "Tourist Places",
        nav_enquiry: "Enquiry",
        hero_title: "The Authentic Taste of Kerala",
        hero_text: "Join a friendly home-style cooking class in Kumily near Thekkady and learn traditional Kerala dishes using fresh spices, coconut, vegetables, and local cooking methods."
    },
    ml: {
        nav_home: "ഹോം",
        nav_about: "ഞങ്ങളെക്കുറിച്ച്",
        nav_classes: "ക്ലാസുകൾ",
        nav_gallery: "ഗാലറി",
        nav_tourist: "സഞ്ചാര കേന്ദ്രങ്ങൾ",
        nav_enquiry: "എൻക്വയറി",
        hero_title: "കേരളത്തിന്റെ യഥാർത്ഥ രുചി",
        hero_text: "കുമളിക്ക് സമീപമുള്ള തേക്കടിയിൽ സൗഹൃദപരമായ വീട്ടുവൈബുള്ള ക്ലാസിൽ പങ്കെടുക്കൂ, കേരളത്തിന്റെ പാചകരീതികളും മസാലകളും പഠിക്കൂ."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "A propos",
        nav_classes: "Cours",
        nav_gallery: "Galerie",
        nav_tourist: "Lieux touristiques",
        nav_enquiry: "Contact",
        hero_title: "Le gout authentique du Kerala",
        hero_text: "Participez a un cours de cuisine convivial a Kumily pres de Thekkady et apprenez des plats traditionnels du Kerala."
    },
    de: {
        nav_home: "Startseite",
        nav_about: "Uber uns",
        nav_classes: "Kurse",
        nav_gallery: "Galerie",
        nav_tourist: "Sehenswurdigkeiten",
        nav_enquiry: "Anfrage",
        hero_title: "Der authentische Geschmack Keralas",
        hero_text: "Erleben Sie einen freundlichen Kochkurs in Kumily nahe Thekkady und lernen Sie traditionelle Gerichte aus Kerala kennen."
    }
};

function applyTranslations(lang) {
    const active = translations[lang];
    if (!active) {
        return;
    }

    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (active[key]) {
            node.textContent = active[key];
        }
    });

    const heroTitle = document.getElementById("hero-title");
    const heroText = document.getElementById("hero-text");

    if (heroTitle && active.hero_title) {
        heroTitle.textContent = active.hero_title;
    }

    if (heroText && active.hero_text) {
        heroText.textContent = active.hero_text;
    }

    try {
        localStorage.setItem("sera_lang", lang);
    } catch (error) {
    }
}

function changeLang(lang) {
    applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        const savedLang = localStorage.getItem("sera_lang");
        if (savedLang) {
            applyTranslations(savedLang);
        }
    } catch (error) {
    }
});
