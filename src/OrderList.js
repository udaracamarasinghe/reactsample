
import { Link } from 'react-router-dom';

const OrderList = ({ orders, title, handleDelete, changeQty }) => {

    return (
        <div className="order-list">
            <h2>{title}</h2>

            {orders && orders.map((order) =>
                <div className="order-preview" key={order.id}>
                    <Link to={`/order/${order.id}`}>
                        <h2>Order Id : {order.orderId}</h2>
                        <p>Customer Id : {order.customerId}</p>
                        
                        <button onClick={() => handleDelete(order.orderId)}>Delete</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default OrderList;