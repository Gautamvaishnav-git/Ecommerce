import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useDelete = <T,>({ url }: { url: string }) => {
  const [deleteResponse, setDeleteResponse] = useState<
    Promise<unknown> | any
  >();
  const [deleteErr, setDeleteErr] = useState<boolean>(false);
  const deleteOnAction = async (
    asin: string,
    success: string,
    pending: string,
    error: string
  ) => {
    try {
      const { data: res } = await toast.promise(
        axios.delete(`${url}/${asin}`, {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }),
        {
          success,
          pending,
          error,
        }
      );
      setDeleteResponse(await res);
    } catch (error) {
      setDeleteErr(true);
      setDeleteResponse(error);
    }
  };
  return { deleteResponse, deleteOnAction, deleteErr };
};

export default useDelete;
