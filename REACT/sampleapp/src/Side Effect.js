import React, { useEffect, useState } from "react";
import './productList.css';
function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())  
            .then(data => setProducts(data))  
            .catch(error => console.error('You have typed a wrong code:', error));
    }, []);

    return (
        <div className="productlist">
            <h1 className="title">Available Products</h1>
            <div className="products">
                {products.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
