
import { useParams } from 'react-router';
import useFetch from './useFetch';

const OrderDetails = () => {

    const { id } = useParams();

    const { data: order, isLoading, error } = useFetch('http://localhost:8000/orders/' + id);

    const changeQty = (orderId, itemId, value) => { }

    return (
        <div className="order-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {order && (
                <div className="order-details" key={order.id}>
                    <h2>Order Id : {order.orderId}</h2>
                    <p>Customer Id : {order.customerId}</p>
                    <h3>Items</h3>
                    {order.items.map((item) =>
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
                </div>
            )}
        </div>
    );
}

export default OrderDetails;