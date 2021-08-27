import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resources");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        else {
          setError(err);
          setisPending(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
