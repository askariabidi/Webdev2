import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';

const Home = () => {
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [ setError] = useState(false);

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
    }, []);

    return (
        <Layout
            className="container"
        >
            <Search />
            <h2 className="mb-4" style={{backgroundColor:"#DC143c", color:"white", height:"50px"}}><h2 className="mt-3 ml-5">New Arrivals</h2></h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

        </Layout>
    );
};

export default Home;

