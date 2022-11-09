import React, { useState, useEffect } from "react";
import { octokit } from "../utils/octokit";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Nav from "./Nav";
import "./Styling/Details.css";

const Details = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { repositoryId } = useParams();

  useEffect(() => {
    async function onLoad() {
      const repos = await octokit
        .request(`GET /users/{owner}/repos?per_page=6`, {
          owner: "mirab3l",
        })
        .then((repos) => {
          setRepos(repos.data);
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
  const NewArray = repos.find((repo) => repo.id === Number(repositoryId));
  console.log(NewArray);
  return (
    <div className="deets">
      <div className="navigation">
        <Nav />
      </div>
      <div className="Details-info">
        <Link to="/Repos" aria-label="go back">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="main">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="repo-details">
            <h1>{NewArray.name}</h1>
            <h4>
              <Link href="">URL: {NewArray.url}</Link>
            </h4>
            <h4>Created at:{NewArray.created_at}</h4>
            <h4>Pushed at:{NewArray.pushed_at}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
