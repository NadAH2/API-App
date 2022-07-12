import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import UserItem from "./UserItem";
const UserList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
export default UserList;
