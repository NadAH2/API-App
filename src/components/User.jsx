import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./user.css";
import axios from "axios";
const User = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    userInfo();
  }, [id]);

  console.log(user);
  const handleClick = () => navigate("/users");
  return (
    user && (
      <div className="cards">
        <div
          class="card "
          style={{
            background: " radial-gradient(#1fe4f5, #3fbafe",
            width: 600,
          }}
        >
          <div class="card__icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h2 class="card__title">{user.name}</h2>
          <h6> Email : {user.email}</h6>
          <h6> Phone : {user.phone}</h6>
          <h6>
            Address : {user.address.city}, {user.address.street},{" "}
            {user.address.suite}
          </h6>

          <button
            className="btn btn-primary card__link"
            onClick={handleClick}
            style={{ width: 100, position: "centre" }}
          >
            <i className="fas fa-arrow-left"></i>
            Go back
          </button>
        </div>
      </div>
    )
  );
};
export default User;
