import { useState, useEffect } from "react";

function useFetch(url,options) {
  const [data, setData] = useState(null); // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Start fetching data
    const fetchData = () => {
      fetch(url,options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json(); // Parse JSON
        })
        .then((json) => {
          setData(json); // Store the data
        })
        .catch((err) => {
          setError(err.message); // Handle errors
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    };

    fetchData();
  }, [url]); // Re-run effect when URL changes

  return { data, loading, error }; // Return state
}

export default useFetch;
