import React, { useContext } from "react";
import { BasketContext } from "./../context/basketContext";
import { FaTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const BasketItem = ({ product }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  return (
    <div className="d-flex align-items-center gap-3 gap-md-4 shadow border p-3 rounded p-md-4 ">
      <div>
        <img
          src={product.image}
          height={70}
          width={70}
          className="object-fit-contain"
        />
      </div>

      <div className="w-100">
        <div>
          <p className="fw-bold text-truncate">{product.title.slice(0, 40)}</p>
          <p> {product.category} </p>
        </div>

        <div className="d-flex justify-content-end align-items-center gap-3">
          <div className="rounded-2 overflow-hidden">
            <button
              onClick={() => decreaseAmount(product.id)}
              className="bg-black text-white"
            >
              <FaMinus />
            </button>
            <button
              onClick={() => addToBasket(product)}
              className="bg-black text-white"
            >
              <FaPlus />
            </button>
          </div>
          <h4> {product.amount} </h4>

          <button
            onClick={() => removeFromBasket(product.id)}
            className="rounded-2 bg-black text-white"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
