import React, { useState, useEffect } from "react";
import { octokit } from "../utils/octokit";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Nav from "./Nav";
import "./Styling/Profile.css";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      const user = await octokit
        .request(`GET /users/{owner}`, {
          owner: "mirab3l",
        })
        .then((users) => {
          setUsers(users.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    onLoad();
  }, []);

  console.log(users);
  return (
    <div>
      <div className="navigation">

      <Nav />
      </div>
      <div className="heading">
        <Link to="/Repos" aria-label="go back">
          <FaArrowLeft />
        </Link>
        <h1>{users.name}'s profile</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="profile">
          <img src={users.avatar_url} alt="github profile" className="image" />
          <h3>{users.name}</h3>
          <h3>{users.login}</h3>
          <h3>
            <FaUser /> {users.followers} Follower • {users.following} Following
          </h3>
          <a href="https://github.com/mirab3l" className="link">https://github.com/mirab3l</a>
        </div>
      )}
    </div>
  );
};
export default Profile;
