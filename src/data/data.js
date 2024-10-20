const products = [
    {
        id: 'A1R34',
        name: 'Camiseta Básica',
        description: 'Camiseta de algodón 100% en color blanco, ideal para el uso diario.',
        stock: 25,
        precio: 15.99,
        img: "/img/remera.webp",
        category: 'vestimenta',
    },
    {
        id: 'A2R56',
        name: 'Pantalón Deportivo',
        description: 'Pantalón de chándal de poliéster, perfecto para entrenamientos o días casuales.',
        stock: 18,
        precio: 29.99,
        img: "/img/pantalon-deportivo.webp",
        category: 'vestimenta',
    },
    {
        id: 'B1Z23',
        name: 'Zapatillas Running',
        description: 'Zapatillas ligeras con amortiguación avanzada, ideales para correr largas distancias.',
        stock: 12,
        precio: 79.99,
        img: "/img/zapatilla.jpg", 
        category: 'calzado',
    },
    {
        id: 'B2Z78',
        name: 'Botines de Cuero',
        description: 'Botines de cuero genuino, cómodos y elegantes para uso diario.',
        stock: 7,
        precio: 95.50,
        img: "/img/botines-cuero.jpg",
        category: 'calzado',
    },
    {
        id: 'C1A45',
        name: 'Reloj Deportivo',
        description: 'Reloj digital resistente al agua con cronómetro y alarma, ideal para actividades al aire libre.',
        stock: 30,
        precio: 49.99,
        img: "/img/reloj.jpg", //
        category: 'accesorios',
    },
    {
        id: 'C2A89',
        name: 'Gorra Ajustable',
        description: 'Gorra clásica de algodón con cierre ajustable, disponible en varios colores.',
        stock: 40,
        precio: 12.99,
        img: "/img/gorra.webp", 
        category: 'accesorios',
    },
    {
        id: 'A3R67',
        name: 'Sudadera con Capucha',
        description: 'Sudadera de algodón con capucha y bolsillo frontal, estilo casual.',
        stock: 15,
        precio: 39.99,
        img: "/img/sudadera.webp", 
        category: 'vestimenta',
    },
    {
        id: 'B3Z90',
        name: 'Sandalias de Playa',
        description: 'Sandalias cómodas y ligeras, perfectas para la playa o la piscina.',
        stock: 22,
        precio: 24.99,
        img: "/img/sandalias.jpg", 
        category: 'calzado',
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);  
        }, 2000);
    });
}

export { getProducts };
