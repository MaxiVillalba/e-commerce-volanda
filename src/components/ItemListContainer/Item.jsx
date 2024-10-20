const Item = ({ product }) => {
  return (
    <div>
      <img src={product.img} width={300} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.precio}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default Item;
