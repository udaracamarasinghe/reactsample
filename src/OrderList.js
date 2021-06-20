
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import OrderDelete from './OrderDelete';


const handleDelete = (id) => {
    console.log(id);
}

const renderOrder = (order, index) => {
    return (
        <tr>
            <td>{order.orderId}</td>
            <td>{order.customerId}</td>
            <td><Link to={`/order/${order.id}`}><button>Details</button></Link></td>
            <td><Link to={`/edit/${order.id}`}><button>Edit</button></Link></td>
            <td><OrderDelete id={order.id}/></td>
        </tr >
    );
}

const OrderList = ({ orders, title, handleDelete, changeQty }) => {
    console.log(orders);
    return (
        <div className="order-list">
            <h3>{title}</h3>

            <ReactBootStrap.Table>
                <thead>
                    <th>Order Id</th>
                    <th>Customer Id</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    {orders && orders.map(renderOrder)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
}

export default OrderList;