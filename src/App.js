import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import User from "./components/User";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UserList />} />

          <Route path="/users/:id" element={<User />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
/**/
