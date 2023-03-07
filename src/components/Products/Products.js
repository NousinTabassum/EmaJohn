import React from 'react';
import './Products.css'

const Products = ({ product, handleAddToCart }) => {

    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='product-text'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-small'>
                    <small> Menufacture : {seller}</small>
                    <br />
                    <small>Rating : {ratings} stars</small>
                </p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='product-button'>Add To Cart </button>
        </div>
    );
};

export default Products;