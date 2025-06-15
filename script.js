const products = [
    {
        name: "Fusil assaut avec silencieux",
        imageUrl: "assets/th (10).jpeg", 
        gumroadLink: "https://momoart5.gumroad.com/l/Rifle_with_Suppressor"
    },
    {
        name: "Minecraft",
        imageUrl: "assets/Capture d'écran 2025-06-15 180443.png",
        gumroadLink: "https://momoart5.gumroad.com/l/minecraft_creeper"
    },
    {
        name: "Buste",
        modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        gumroadLink: "https://exemple.com/buste"
    }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    let content = '';

    if (product.imageUrl) {
        // Si une image est définie, afficher une balise <img>
        content = `<img src="${product.imageUrl}" alt="${product.name}" style="width: 100%; height: auto;">`;
    } else if (product.modelUrl) {
        // Sinon afficher le modèle 3D
        content = `<model-viewer src="${product.modelUrl}" alt="${product.name}" auto-rotate camera-controls style="width: 100%; height: 300px;"></model-viewer>`;
    }

    productCard.innerHTML = `
        ${content}
        <p>${product.name}</p>
        <a class="gumroad-button" href="${product.gumroadLink}" target="_blank">Acheter ce modèle 3D sur Gumroad</a>
    `;

    productsContainer.appendChild(productCard);
});
