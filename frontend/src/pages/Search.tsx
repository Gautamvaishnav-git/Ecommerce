import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import IProduct from "../interfaces/product";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Search: React.FC = () => {
  const [searchList, setSearchList] = useState<IProduct[] | null | undefined>();
  const params = useParams();
  const baseURI = import.meta.env.VITE_API_BASE_URI;
  const { response, fetchErr, loading } = useFetch<IProduct[]>({
    url: `${baseURI}/filter/search/?q=${params.query}`,
  });
  useEffect(() => {
    setSearchList(response);
  }, [response]);

  if (fetchErr) return <p>Fetch Error occur</p>;

  return (
    <>
      {loading && <Loader message="searching..." />}
      <div className="container mx-auto flex w-full flex-wrap">
        {searchList?.map((list) => (
          <Card product={list} key={list.asin} grow={0} />
        ))}
      </div>
    </>
  );
};

export default Search;
