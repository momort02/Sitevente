// Liste des produits
const products = [
    {
        name: "Fusil d'assaut avec silencieux",
        imageUrl: "th (10).jpeg",,
        gumroadLink: "https://momoart5.gumroad.com/l/Rifle_with_Suppressor"
    },
    {
        name: "Astronaute",
        modelPath: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        gumroadLink: "#"
    },
    {
        name: "Buste",
        modelPath: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        gumroadLink: "#"
    }
];

// Génération des cartes produits
const productsContainer = document.getElementById("products");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <model-viewer src="${product.modelPath}" alt="${product.name}" auto-rotate camera-controls></model-viewer>
        <p>${product.name}</p>
        <a class="gumroad-button" href="${product.gumroadLink}" target="_blank">Acheter ce modèle 3D sur Gumroad</a>
    `;

    productsContainer.appendChild(productCard);
});

// Bannière de sélection de langue
window.onload = () => {
    const banner = document.getElementById('language-banner');
    const selectedLang = localStorage.getItem('lang');

    if (!selectedLang) {
        banner.style.display = 'flex'; // Montre la bannière si pas de langue choisie
    } else {
        applyLanguage(selectedLang);
    }

    document.getElementById('btn-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
};

// Stocker la langue choisie
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.getElementById('language-banner').style.display = 'none';
    applyLanguage(lang);
}

// Appliquer la langue choisie (simple exemple pour le titre)
function applyLanguage(lang) {
    const header = document.querySelector('header h1');

    if(lang === 'fr') {
        header.textContent = 'Boutique de Modèles 3D';
    } else if(lang === 'en') {
        header.textContent = '3D Model Shop';
    }
    // Ici tu peux aussi traduire d'autres textes si tu veux
}
