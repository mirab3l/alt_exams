import React, { useState, useEffect } from "react";
import { octokit } from "../utils/octokit";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { format } from "date-fns";
import Nav from "./Nav";
import "./Styling/Repos.css";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentpage, setCurrentPage] = useState(4);

  console.log(repos.id);
  const pageNumbers = [1, 2, 3];

  useEffect(() => {
    async function onLoad() {
      const repos = await octokit
        .request(`GET /users/{owner}/repos?per_page=${currentpage}`, {
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
  }, [currentpage]);

  console.log(repos);

  return (
    <div>
      <Nav />
      <div className="heading">
        <Link to="/" aria-label="go back">
          <FaArrowLeft />
        </Link>
        <h3 className="header">Github repositories</h3>
      </div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          repos.map((repo) => {
            return (
              <div className="main">
                <div key={repo.id} className="details">
                  <h2>{repo.name}</h2>
                  <p className="visibility">{repo.visibility}</p>
                </div>
                <div className="time">
                  <p>
                    <i>* This repository was created </i>
                    {format(new Date(repo.created_at), "dd MMMM yyyy")}
                  </p>
                  <button className="view">
                    <Link to={`/details/${repo.id}`} className="repo-btn">
                      {" "}
                      View repo
                    </Link>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="pages">
        <button
          onClick={() => {
            setCurrentPage(currentpage - 1);
          }}
          disabled={currentpage === 1}
          className="pagination"
        >
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            value={number}
            onClick={(e) => {
              setCurrentPage(e.target.value);
            }}
            disabled={currentpage === number}
            className="pagination"
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => {
            setCurrentPage(currentpage + 1);
          }}
          className="pagination"
          disabled={currentpage === 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Repos;
