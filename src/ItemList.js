const ItemList = ({ items }) => {

    return (
        <div className="item-list">
            <ul>
                {items.map((item) => (
                    <li key={item.itemId}>{item.itemId + '|' + item.qty}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;