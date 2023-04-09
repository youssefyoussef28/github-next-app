import React from "react";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos"
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);

  return <div>{repos[0].name}</div>;
};

export default ReposPage;
