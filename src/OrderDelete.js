import { Button } from "bootstrap";
import { useState } from "react";

const OrderDelete = (id) => {
    const [buttonLable, setButtonLable] = useState('Delete');

    const handleDelete = () => {
        console.log(id);
        setButtonLable('Deleting...');

        fetch('http://localhost:8000/orders/' + id, {
            method: 'DELETE'
        }).then(() => {

        });
    }

    return (
        <button onClick={handleDelete}>{buttonLable}</button>
    );
}

export default OrderDelete;