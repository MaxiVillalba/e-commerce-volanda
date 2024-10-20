import Item from "./Item";
import "./ItemListContainer.css"  

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {
                products && products.length > 0 ? (
                    products.map((product) => (
                        <Item product={product} key={product.id} />
                    ))
                ) : (
                    <p>No se encontraron productos.</p>  
                )
            }
        </div>
    );
};

export default ItemList;
