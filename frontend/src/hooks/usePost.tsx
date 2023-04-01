import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const usePost = ({ url, data }: { url: string; data: object }) => {
  const [response, setResponse] = useState();
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

  useEffect(() => {
    postData();
  }, []);

  return { response, postOnAction };
};

export default usePost;
