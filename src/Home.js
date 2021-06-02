
import { useState, useEffect } from 'react';
import OrderList from './OrderList';
import useFetch from './useFetch';

const Home = () => {

    const { data, isLoading, error } = useFetch('http://localhost:8000/orders');

    const handleDelete = (id) => {
        const newOrders = data.filter(order => order.orderId !== id);
        //setData(newOrders);
    }

    //     console.log(orderId, itemId, value);
    //     const order = orders.find(o => o.orderId === orderId);
    //     console.log(order.orderId);
    //     const item = order.items.find(i => i.itemId === itemId);
    //     item.qty += value;
    //     const items = order.items.filter(i => i.itemId !== itemId);
    //     items.push(item);
    //     order.items = items;
    //     const newOrders = orders.filter(o => o.orderId !== orderId);
    //     newOrders.push(order);
    //     newOrders.sort();
    //     setOrders(newOrders);
    //     // item.qty = item.qty + value;

    //     // console.log(item.qty);
    // }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <OrderList orders={data} title="All Orders" handleDelete={handleDelete}  />}

            {/* <OrderList orders={orders.filter((order) => order.status === "Ready")} title="Orders Ready" handleDelete={handleDelete} /> */}
        </div>
    );
}

export default Home;