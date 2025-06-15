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
