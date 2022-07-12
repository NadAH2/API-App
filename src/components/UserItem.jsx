import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__icon">
          <i className="fas fa-bolt"></i>
        </div>

        <h2 className="card__title">{user.name}</h2>
        <p class="card__apply">
          <Link className="card__link" to={`/users/${user.id}`}>
            Read More <i className="fas fa-arrow-right"></i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserItem;
