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

const productList = document.getElementById('product-list');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <model-viewer src="${product.modelUrl}" alt="${product.name}" camera-controls auto-rotate exposure="1" shadow-intensity="1"></model-viewer>
        <div class="product-info">
            <span class="product-title">${product.name}</span>
            <button class="buy-button">Acheter - ${product.price}</button>
        </div>
    `;
    productList.appendChild(card);
});
