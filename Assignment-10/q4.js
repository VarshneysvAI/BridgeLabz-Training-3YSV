// Q4: Run `json-server --watch q4/db.json --port 3004` from this folder.
const API_URL = "http://localhost:3004";

const dashboardSources = [
  { key: "users", url: `${API_URL}/users`, elementId: "user-count" },
  { key: "orders", url: `${API_URL}/orders`, elementId: "order-count" },
  { key: "products", url: `${API_URL}/products`, elementId: "product-count" },
];

async function fetchCollection(source) {
  try {
    const response = await fetch(source.url);

    if (!response.ok) {
      throw new Error(`${source.key} request failed with status ${response.status}`);
    }

    const records = await response.json();
    if (!Array.isArray(records)) {
      throw new Error(`${source.key} response was not a list`);
    }

    return { source, count: records.length, error: null };
  } catch (error) {
    console.error(`Could not load ${source.key}:`, error);
    return { source, count: null, error };
  }
}

async function loadDashboard() {
  const results = await Promise.all(dashboardSources.map(fetchCollection));
  const hasFailures = results.some((result) => result.error);

  results.forEach(({ source, count }) => {
    const value = document.getElementById(source.elementId);
    value.textContent = count === null ? "Unavailable" : String(count);
    value.classList.remove("skeleton");
  });

  document.querySelector("#dashboard-warning").textContent = hasFailures
    ? "Some data could not be loaded."
    : "";
  document.querySelector("#metrics").setAttribute("aria-busy", "false");
}

loadDashboard();
