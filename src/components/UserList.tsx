import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../store/reducers";
import { useTypedDispatch } from "./Hooks";
import { fetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state: any) => state.user);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  console.log("name", users)
  return (
    <div>
      {users.map((user: any) =>
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  );
};


export default UserList;