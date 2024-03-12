import { useLocation, Navigate } from "react-router";

interface Children {
    children: Object
}

const RequireAuth = ({children}: Children) => {
  const location = useLocation();
  const auth = false;
  if (!auth) {
    return <Navigate to={"/"} state={{from: location}}/>;
  }

  return children;
};
export default RequireAuth;
