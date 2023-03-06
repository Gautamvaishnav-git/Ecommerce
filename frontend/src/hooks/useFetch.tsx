import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = <T,>({ url }: { url: string }) => {
  const [response, setResponse] = useState<T | null>();
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setResponse(data);
    } catch (error) {
      setResponse(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { response };
};
export default useFetch;
