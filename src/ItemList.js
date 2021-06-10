import * as ReactBootStrap from "react-bootstrap";

const renderItems = (item, index) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{item.itemId}</td>
            <td>{item.qty}</td>
        </tr>
    );
}

const ItemList = ({ items }) => {

    return (
        <div className="item-list">
            <ReactBootStrap.Table>
                <thead>
                    <th>#</th>
                    <th>Item Id</th>
                    <th>Qty</th>
                </thead>
                <tbody>
                    {items && items.map(renderItems)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
}

export default ItemList;