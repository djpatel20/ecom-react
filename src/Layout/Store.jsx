import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Store.css'; 
import { useDispatch } from 'react-redux';
import {  addCart } from "../Redux/Slice"
import { toastemitter } from '../utils/toastemitter';



export const Store = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.in/api/products");
            setProducts(response.data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addToCart = (product) => {
        dispatch(addCart(product))
        toastemitter("Added-To-Cart")
    };

    return (
        <div className="container">
            <h2 className="title">Product List</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
