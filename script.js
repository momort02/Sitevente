const products = [
    {
        name: "Fusil assaut avec silencieux",
        imageUrl:"th (10).jpeg",
        gumroadLink: "https://momoart5.gumroad.com/l/Rifle_with_Suppressor"
    },
    {
        name: "Astronaute",
        modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        gumroadLink: "https://exemple.com/astronaute" // ou ton vrai lien Gumroad
    },
    {
        name: "Buste",
        modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        gumroadLink: "https://exemple.com/buste" // ou ton vrai lien Gumroad
    }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <model-viewer src="${product.modelUrl}" alt="${product.name}" auto-rotate camera-controls></model-viewer>
        <p>${product.name}</p>
        <a class="gumroad-button" href="${product.gumroadLink}" target="_blank">Acheter ce modèle 3D sur Gumroad</a>
    `;

    productsContainer.appendChild(productCard);
});
