import { useState, useEffect } from 'react';
import OrderList from './OrderList';
import useFetch from './useFetch';

const Home = () => {

    const { data, isLoading, error } = useFetch('http://localhost:8000/orders');

    const handleDelete = (id) => {
        const newOrders = data.filter(order => order.orderId !== id);
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <OrderList orders={data} title="All Orders" />}

            {/* <OrderList orders={orders.filter((order) => order.status === "Ready")} title="Orders Ready" handleDelete={handleDelete} /> */}
        </div>
    );
}

export default Home;