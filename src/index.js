// src/index.js
import _ from "lodash";
import "./index.scss";

export const fetchBuildTools = async () => {
  try {
    const response = await fetch("build-tools.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const displayBuildTools = (tools) => {
  const buildToolsList = document.getElementById("build-tools");
  const sortedTools = _.sortBy(tools, ["name"]);

  sortedTools.forEach((tool) => {
    const listItem = document.createElement("div");
    listItem.className = "tool-item";

    listItem.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <a href="${tool.website}" target="_blank">Learn More</a>
    `;

    buildToolsList.appendChild(listItem);
  });
};

export const handleFetchError = (error) => {
  const buildToolsList = document.getElementById("build-tools");
  console.error("Error fetching build tools.", error);
  buildToolsList.innerHTML = "<P>Failed to load build tools.</P>";
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const tools = await fetchBuildTools();
    displayBuildTools(tools);
  } catch (error) {
    handleFetchError(error);
  }
});
