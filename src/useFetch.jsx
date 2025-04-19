import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error(`Couldn't fetch data from the database.`)
                } else {
                res.json();
                }
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 2000)
    }, [])

    return [data, isLoading, error];
}
 
export default useFetch;