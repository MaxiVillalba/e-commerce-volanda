const products= [
    {
    id:"dd234",
    name: "remera roja",
    description: "",
    price: 2000,
    image: "",
    category: "remeras"
    },

    {
    id:"dd240",
    name: "zapatilla negra",
    description: "",
    price: 10000,
    image: "",
    category: "calzado"
    },
    {
    id:"dd250",
    name: "zapatilla blanca",
    description: "",
    price: 10800,
    image: "",
    category: "calzado"
    },

    {
    id:"dd260",
    name: "remera negra",
    description: "",
    price: 2000,
    image: "",
    category: "remeras"
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        resolve(products)    
    }, 2000)
    })
}

export { getProducts }