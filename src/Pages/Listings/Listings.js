import { useParams } from "react-router-dom";

function Listings(props) {
  // const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

  const params = new URLSearchParams(window.location.search);
  const obj = {};

  for (const key of params.keys()) {
    obj[key] = params.get(key);
  }
  console.log(obj);

  return <>{`All Listing with search query`}</>;
}

export default Listings;
