import { useParams } from "react-router-dom";

const Filter = () => {
  const { params } = useParams();
  console.log(params);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default Filter;
