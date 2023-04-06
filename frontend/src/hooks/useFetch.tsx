import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useFetch = <T,>({ url, params }: { url: string; params?: object }) => {
  const [response, setResponse] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchErr, setFetchErr] = useState<boolean>(false);
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(url, {
        params: params,
        headers: {
          authorization: sessionStorage.getItem("token"),
        },
      });
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setResponse(null);
      setLoading(false);
      setFetchErr(true);
    }
  }, [response]);

  const FetchOnAction = () => {
    fetchData();
  };

  // useEffect(() => {
  //   fetchData();
  // }, [url]);

  return { response, loading, fetchErr, FetchOnAction };
};
export default useFetch;
