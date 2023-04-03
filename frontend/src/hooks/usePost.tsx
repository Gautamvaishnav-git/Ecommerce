import axios from "axios";
import { useState } from "react";

const usePost = <T,>({ url, data }: { url: string; data: object }) => {
  const [response, setResponse] = useState<T>();
  const [posting, setPosting] = useState<boolean>(false);
  const [postErr, setPostErr] = useState<boolean>(false);
  const postOnAction = async () => {
    try {
      setPosting(true);
      const { data: res } = await axios.post(
        url,
        { ...data },
        { headers: { Authorization: sessionStorage.getItem("token") } }
      );
      setResponse(await res);
      setPosting(false);
    } catch (error) {
      setPostErr(true);
      setPosting(false);
    }
  };

  return { response, postOnAction, postErr, posting };
};

export default usePost;
