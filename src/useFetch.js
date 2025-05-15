import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("couldnt fetch");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setError(false);
          setData(data);
          setIsPending(false);
        })
        .catch((e) => {
          setIsPending(false);
          setError(e.message);
          console.log(e.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
