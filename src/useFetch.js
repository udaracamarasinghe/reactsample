import { useEffect, useState } from 'react'

const useFetch = (url, test) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new window.AbortController();
        test = 'Tested';
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(res => {
                console.log('response', res);
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource.');
                }
                return res.json();
            }).then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Abort Error');
                } else {
                    setError(err.message);
                    setIsLoading(false);
                    setData(null);
                }
            })
        }, 300);

        return () => abortCont.abort();

    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;