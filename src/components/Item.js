import React, { useState }from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}> {isInCart ? 'In-Cart' : 'Add to Cart' }</button>
    </li>
  );
}

export default Item;
