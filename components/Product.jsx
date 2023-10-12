import React from "react";
import { productsData } from "../data/productsData";

const Product = () => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4 text-center text-indigo-500">
        Product List
      </h1>
      <ul>
        {productsData.map((product) => (
          <li key={product.id} className="m-4 p-4 border rounded-xl">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">Price: {product.unitPrice}</p>
            <p className="text-gray-700">
              Quantity in Stock: {product.unitsInStock}
            </p>
            <p className="text-gray-700">
              Product Quantity Per Unit: {product.quantityPerUnit}
            </p>
            {product.discontinued ? (
              <p className="text-red-500">Discontinued</p>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
