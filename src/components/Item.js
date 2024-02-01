import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("in-cart");
  function handleinCartClick() {
    setInCart((inCart) => !inCart);
  }
  const listClass = inCart ? "" : "in-cart";

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleinCartClick} className="add">
        {inCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
