import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortConst = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortConst.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error(`Couldn't fetch data from the database.`)
                } else {
                return res.json();
                }
            })
            .then(data => {
                setData(data.slice(0, 10));
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            })

            // abort fetch
            return () => abortConst.abort();
        }, 2000)
    }, [])

    return [data, isLoading, error];
}
 
export default useFetch;