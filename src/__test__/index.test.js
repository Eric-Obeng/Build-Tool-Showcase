import { jest } from "@jest/globals";
import { fetchBuildTools, displayBuildTools, handleFetchError } from "../index"; // Adjust the path if necessary

describe("Build Tools List", () => {
  let buildToolsList;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="build-tools"></div>
    `;
    buildToolsList = document.getElementById("build-tools");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and displays build tools", async () => {
    // Mock the fetch call
    const mockData = [
      {
        name: "Tool 1",
        description: "Description 1",
        website: "https://example.com/1",
      },
      {
        name: "Tool 2",
        description: "Description 2",
        website: "https://example.com/2",
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    // Call the displayBuildTools function directly
    await displayBuildTools(mockData);

    // Ensure elements are added to the DOM
    expect(document.querySelectorAll(".tool-item").length).toBe(
      mockData.length
    );
    expect(document.querySelector(".tool-item h3").textContent).toBe(
      mockData[0].name
    );
  });

  it("displays error message when fetch fails", async () => {
    // Mock the fetch call to simulate an error
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    try {
      await fetchBuildTools();
    } catch (error) {
      await handleFetchError(error);
    }

    // Check for the error message in the DOM
    expect(document.querySelector("#build-tools").innerHTML).toContain(
      "Failed to load build tools."
    );
  });
});
