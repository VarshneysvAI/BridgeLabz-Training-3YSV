// Q6: Filter table rows whenever the search input changes.
const studentSearch = document.querySelector("#student-search");
const studentRows = [...document.querySelectorAll("#student-table-body tr")];
const noResultsMessage = document.querySelector("#no-results-message");

studentSearch.addEventListener("input", () => {
  const searchText = studentSearch.value.trim().toLowerCase();
  let visibleRows = 0;

  studentRows.forEach((row) => {
    const matches = row.textContent.toLowerCase().includes(searchText);
    row.hidden = !matches;
    if (matches) visibleRows += 1;
  });

  noResultsMessage.hidden = visibleRows !== 0;
});
