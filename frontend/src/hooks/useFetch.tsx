import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = <T,>({ url, params }: { url: string; params?: object }) => {
  const [response, setResponse] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchErr, setFetchErr] = useState<boolean>(false);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url, { params: params });
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setResponse(null);
      setLoading(false);
      setFetchErr(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { response, loading, fetchErr };
};
export default useFetch;
