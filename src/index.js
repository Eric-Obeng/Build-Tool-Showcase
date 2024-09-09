document.addEventListener("DOMContentLoaded", () => {
  const buildToolsList = document.getElementById("build-tools");

  fetch("build-tools.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    })
    .then((data) => {
      data.forEach((tool) => {
        const listItem = document.createElement("div");

        listItem.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.website}" target="_blank">Learn More</a>
        `;

        buildToolsList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching build tools.", error);
      buildToolsList.innerHTML = "<P>Failed to load build tools.</P>";
    });
});
