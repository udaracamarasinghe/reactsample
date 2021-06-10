import { useState } from "react";
import useSave from "./useSave";
import { useHistory } from "react-router-dom"
import ItemList from "./ItemList";

const initialList = [

];

const Create = () => {
    const [url, setUrl] = useState('http://localhost:8000/orders');

    const [orderId, setOrderId] = useState('');
    const [customerId, setcustomerId] = useState('');
    const [itemId, setItemId] = useState('');
    const [qty, setQty] = useState(0);
    const [items, setItems] = useState(initialList);

    const order = { orderId, customerId, items };
    const item = { itemId, qty };

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const history = useHistory();

    const handleItemAdd = (e) => {
        e.preventDefault();
        const newList = items.concat({ itemId, qty });

        setItems(newList);

        setItemId('');
        setQty('');
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

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

    return (

        <div className="create-order">
            <form id="outerform" onSubmit={HandleSubmit}></form>
            <form id="innerform" onSubmit={handleItemAdd}></form>
            <h2>Create New Order</h2>

            <label>Order Id:</label>
            <input type="text" form="outerform" required value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            <label>Customer Id</label>
            <input type="text" form="outerform" required value={customerId} onChange={(e) => setcustomerId(e.target.value)} />

            <div className="add-item" >
                <label>Item Id:</label>
                <select value={itemId} form="innerform" onChange={(e) => setItemId(e.target.value)} defaultValue={{ label: 'Select', value: '-1' }}>
                    <option value="-1">--Select--</option>
                    <option value="Huwawi8">Huwawi8</option>
                    <option value="IPhone8">IPhone8</option>
                    <option value="Samsung7">Samsung7</option>
                </select>
                <label>Quantity</label>
                <input type="text" form="innerform" required value={qty} onChange={(e) => setQty(e.target.value)} />
                <button form="innerform">Add</button>
            </div>

            <ItemList items={items} />

            {!isLoading && <button form="outerform">Create</button>}
            {isLoading && <button disabled>Createing...</button>}
            <h4>{orderId}</h4>

        </div>
    );
}

export default Create;