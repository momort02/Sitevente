const products = [
    {
        name: "Fusil assaut avec silencieux",
        modelUrl: "Rifle_with_Suppressor_0517204445_texture.glb",
        gumroadLink: "https://momoart5.gumroad.com/l/Rifle_with_Suppressor"
    },
    {
        name: "Astronaute",
        modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        price: "6.99€"
    },
    {
        name: "Buste",
        modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        price: "8.99€"
    }
];

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
