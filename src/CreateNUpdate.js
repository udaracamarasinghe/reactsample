import { useState } from "react";
import { useParams } from "react-router";
import BreadcrumbBar from "./BreadcrumbBar";
import OrderForm from "./OrderForm";
import useFetch from "./useFetch";

const CreateNUpdate = () => {
    const { id } = useParams();   
    const { data: origOrder, isLoading: isOrderFetchLoading, error: orderFetchError } = useFetch('http://localhost:8000/orders/' + id);

    return (
        <div>
            <BreadcrumbBar />

            {(id && isOrderFetchLoading) && <div>Loading...</div>}
            {((!id) || (id && !isOrderFetchLoading && origOrder)) && <OrderForm origOrder={origOrder} /> }

        </div>
    )
};

export default CreateNUpdate;