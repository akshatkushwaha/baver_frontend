import { useParams } from "react-router-dom";

function User(props) {
  const { id } = useParams();
  return <>{`User ${id}`}</>;
}

export default User;
