import axios from "axios";
import { useState } from "react";

const useDelete = <T,>({ url }: { url: string }) => {
  const [deleteResponse, setDeleteResponse] = useState<
    Promise<unknown> | any
  >();
  const [deleteErr, setDeleteErr] = useState<boolean>(false);
  const deleteOnAction = async (asin: string) => {
    try {
      const { data: res } = await axios.delete(`${url}/${asin}`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      });
      setDeleteResponse(await res);
    } catch (error) {
      setDeleteErr(true);
      setDeleteResponse(error);
    }
  };
  return { deleteResponse, deleteOnAction, deleteErr };
};

export default useDelete;
