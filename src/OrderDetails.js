import { useState } from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';
import { Link, useHistory } from 'react-router-dom';
import ItemList from './ItemList';
import BreadcrumbBar from './BreadcrumbBar';

const OrderDetails = () => {

    const { id } = useParams();

    const { url } = useState('http://localhost:8000/orders/');

    const { data: order, isLoading, error } = useFetch('http://localhost:8000/orders/' + id);

    const changeQty = (orderId, itemId, value) => { }

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/orders/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    };

    return (
        <div>
            <BreadcrumbBar />

            <div className="order-details">

                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {order && (
                    <div key={order.id}>
                        <h2>Order Id : {order.orderId}</h2>
                        <p>Customer Id : {order.customerId}</p>
                        <h3>Items</h3>
                        <ItemList items={order.items} />
                        <Link to={`/edit/${order.id}`}><button>Edit</button></Link>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderDetails;