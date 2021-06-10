
import { useState } from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const OrderDetails = () => {

    const { id } = useParams();

    const { url } = useState('http://localhost:8000/orders/');

    const { data: order, isLoading, error } = useFetch('http://localhost:8000/orders/' + id);

    const changeQty = (orderId, itemId, value) => { }

    const history  = useHistory();    

    const handleDelete = () => {
        fetch('http://localhost:8000/orders/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });       
    };

    return (
        <div className="order-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {order && (
                <div key={order.id}>
                    <h2>Order Id : {order.orderId}</h2>
                    <p>Customer Id : {order.customerId}</p>
                    <h3>Items</h3>
                    {order.items && order.items.map((item) =>
                        <div className="item-detals" key={item.itemId}>
                            <h4>{item.itemId}</h4>
                            <h4>{item.itemName}</h4>
                            <div className="item-qty">
                                <h4>{item.qty}</h4>
                                <button onClick={() => changeQty(order.orderId, item.itemId, +1)}>+</button>
                                <button onClick={() => changeQty(order.orderId, item.itemId, -1)}>-</button>
                            </div>
                        </div>
                    )}
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default OrderDetails;