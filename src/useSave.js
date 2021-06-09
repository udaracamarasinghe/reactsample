import { useEffect, useState } from "react";

const useSave = (url, data) => {

    const [isLoading, setIsLoading] = useState(true);

    // const [error, setError] = useState(null);

    setIsLoading(true);

    fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log("New Order Added");
        setIsLoading(false);
    });

    // return { isLoading, error };
}

export default useSave;