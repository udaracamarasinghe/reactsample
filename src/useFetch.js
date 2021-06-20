import { useEffect, useState } from 'react'

const useFetch = (url, id = null) => {
    console.log(id);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id !== 'undefined' || id === null) {
            const abortCont = new window.AbortController();

            const furl = id === null ? url : url + '/' + id;

            setTimeout(() => {
                fetch(furl, { signal: abortCont.signal }).then(res => {
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
                    console.log(err);
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
        }


    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;