import { useState } from "react";
import useSave from "./useSave";
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom"
import ItemList from "./ItemList";
import BreadcrumbBar from "./BreadcrumbBar";
import useFetch from "./useFetch";

const initialList = [

];

const OrderForm = ({ origOrder }) => {
    console.log('fff ', origOrder);
    const [url, setUrl] = useState('http://localhost:8000/orders');
    const [id, setId] = useState(origOrder && origOrder.id ? origOrder.id : null);
    const [orderId, setOrderId] = useState(origOrder && origOrder.orderId ? origOrder.orderId : '');
    const [customerId, setcustomerId] = useState(origOrder && origOrder.customerId ? origOrder.customerId : '');
    const [itemId, setItemId] = useState('');
    const [qty, setQty] = useState('');
    const [items, setItems] = useState(origOrder && origOrder.items ? origOrder.items : initialList);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();
    const order = { orderId, customerId, items };
    const item = { itemId, qty };

    const handleItemAdd = (e) => {
        e.preventDefault();
        const newList = items.concat({ itemId, qty });

        setItems(newList);

        setItemId('');
        setQty('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (origOrder && origOrder.id) {
            fetch(url + '/' + id, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            }).then(() => {
                console.log("New Order Added");
                setIsLoading(false);
                // history.go(-1);
                history.push('/');
            });
        } else {
            fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            }).then(() => {
                console.log("New Order Added");
                setIsLoading(false);
                // history.go(-1);
                history.push('/');
            });
        }

    }

    return (

        <div className="create-order">

            <form id="outerform" onSubmit={handleSubmit}></form>
            <form id="innerform" onSubmit={handleItemAdd}></form>
            <h2>{origOrder && origOrder.id ? 'Update Order' : 'Create New Order'}</h2>

            <label>Order Id:</label>
            <input type="text" form="outerform" required value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            <label>Customer Id</label>
            <input type="text" form="outerform" required value={customerId} onChange={(e) => setcustomerId(e.target.value)} />

            <div className="add-item" >
                <div class="row">
                    <div class="col">
                        <label>Item Id:</label>
                        <select value={itemId} form="innerform" onChange={(e) => setItemId(e.target.value)} defaultValue={{ label: 'Select', value: '-1' }}>
                            <option value="-1">--Select--</option>
                            <option value="Huwawi8">Huwawi8</option>
                            <option value="IPhone8">IPhone8</option>
                            <option value="Samsung7">Samsung7</option>
                        </select>
                    </div>
                    <div class="col">
                        <label>Quantity</label>
                        <input type="text" form="innerform" required value={qty} onChange={(e) => setQty(e.target.value)} />
                    </div>
                </div>
                <button form="innerform">Add</button>
            </div>

            <ItemList items={items} />

            {!isLoading && <button form="outerform">{origOrder && origOrder.id ? 'Update' : 'Create'}</button>}
            {isLoading && <button disabled>{origOrder && origOrder.id ? 'Updating...' : 'Creating...'}</button>}

        </div>

    );
}

export default OrderForm;