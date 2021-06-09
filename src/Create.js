import { useState } from "react";
import useSave from "./useSave";

const Create = () => {

    const [orderId, setOrderId] = useState('');
    const [customerId, setcustomerId] = useState('');
    const [itemId, setItemId] = useState('I0010');

    const order = { orderId, customerId, itemId };

    //const [isLoading, setIsLoading] = useState(false);

    const HandleSubmit = (e) => {
        e.preventDefault();

        //setIsLoading('true');

        useSave('http://localhost:8000/orders', order);

    }

    return (
        <div className="create-order">
            <h2>Create New Order</h2>
            <form onSubmit={HandleSubmit}>
                <label>Order Id:</label>
                <input type="text" required value={orderId} onChange={(e) => setOrderId(e.target.value)} />
                <label>Customer Id</label>
                <input type="text" required value={customerId} onChange={(e) => setcustomerId(e.target.value)} />
                <label>Item Id:</label>
                <select value={itemId} onChange={(e) => setItemId(e.target.value)}>
                    <option value="I0010">Huwawi8</option>
                    <option value="I0001">IPhone8</option>
                    <option value="I0009">Samsung7</option>
                </select>
                <button>Create</button>
                {/* {!isLoading && <button>Create</button>}
                {isLoading && <button disabled>Createing...</button>} */}
                <h4>{orderId}</h4>
            </form>
        </div>
    );
}

export default Create;