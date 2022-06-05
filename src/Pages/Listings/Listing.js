import { useParams } from "react-router-dom";
function Listing(porps) {
  const { id } = useParams();
  return <>{`Listing id : ${id}`}</>;
}

export default Listing;
