import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const usePost = <T,>({ url, data }: { url: string; data: object }) => {
  const [response, setResponse] = useState<T>();
  const [postErr, setPostErr] = useState<boolean>(false);
  const postOnAction = async (
    success: string,
    err: string,
    loading: string
  ) => {
    try {
      const { data: res } = await toast.promise(
        axios.post(
          url,
          { ...data },
          { headers: { Authorization: sessionStorage.getItem("token") } }
        ),
        {
          success,
          error: err,
          pending: loading,
        }
      );
      setResponse(await res);
    } catch (error) {
      toast.error(err);
      setPostErr(true);
    }
  };

  return { response, postOnAction, postErr };
};

export default usePost;
