import axios from "axios";
import { useState, useCallback } from "react";

const usePost = <T,>({ url, data }: { url: string; data: object }) => {
  const [response, setResponse] = useState<T>();
  const postData = useCallback(async () => {
    const { data: res } = await axios.post(
      url,
      { ...data },
      { headers: { Authorization: sessionStorage.getItem("token") } }
    );
    setResponse(res);
  }, [data, url]);

  const postOnAction = useCallback(async () => {
    const { data: res } = await axios.post(
      url,
      { ...data },
      { headers: { Authorization: sessionStorage.getItem("token") } }
    );
    setResponse(res);
  }, [data, url]);

  return { response, postOnAction };
};

export default usePost;
