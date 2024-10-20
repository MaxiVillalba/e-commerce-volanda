import { useParams } from "react-router-dom";
import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import "./ItemListContainer.css";  // Asegúrate de que esta línea esté presente

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const { idCategory, idProduct } = useParams(); // Obtener los parámetros de la URL

    useEffect(() => {
        getProducts()
            .then((data) => {
                if (idCategory) {
                    // Filtrar productos por categoría
                    const filteredProducts = data.filter(product => product.category === idCategory);
                    setProducts(filteredProducts);
                } else if (idProduct) {
                    // Filtrar por el ID del producto para mostrar detalles
                    const productDetail = data.find(product => product.id === idProduct);
                    setProducts(productDetail ? [productDetail] : []);
                } else {
                    // Si no hay categoría ni producto, mostrar todos los productos
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.error("Error al obtener productos:", error);
            });
    }, [idCategory, idProduct]); // Escuchar cambios en los parámetros

    return (
        <div className="item-list-container">  {/* Asegúrate de que este contenedor tiene la clase correcta */}
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
