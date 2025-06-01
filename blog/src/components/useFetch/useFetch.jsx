import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
                console.log("Fetched blogs:", data);
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log(`Fetch aborted ${error}`);
                } else {
                    setError(error.message);
                    setIsLoading(false);
                    console.error("Error fetching blogs:", error);
                }
            });

        return () => abortController.abort();

    }, [url]);

    return { data, isLoading, error };
};

export default UseFetch;
