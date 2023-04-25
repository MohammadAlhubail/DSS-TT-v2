// get the table element and add an event listener to it
const table = document.getElementById("leaderboard-table");
table.addEventListener("click", handleTableClick);

// define the handleTableClick function
function handleTableClick(event) {
  const element = event.target;
  const row = element.closest("tr");
  const rank = row.cells[0].textContent;
  const player = row.cells[1].textContent;
  const wins = row.cells[2].textContent;
  const losses = row.cells[3].textContent;
  const elo = row.cells[4].textContent;
  const league = row.cells[5].textContent;

  if (element.classList.contains("edit-button")) {
    // create input fields for each cell
    const rankInput = createInput(rank);
    const playerInput = createInput(player);
    const winsInput = createInput(wins);
    const lossesInput = createInput(losses);
    const eloInput = createInput(elo);
    const leagueInput = createInput(league);

    // replace the cell contents with the input fields
    row.cells[0].textContent = "";
    row.cells[1].textContent = "";
    row.cells[2].textContent = "";
    row.cells[3].textContent = "";
    row.cells[4].textContent = "";
    row.cells[5].textContent = "";
    row.cells[0].appendChild(rankInput);
    row.cells[1].appendChild(playerInput);
    row.cells[2].appendChild(winsInput);
    row.cells[3].appendChild(lossesInput);
    row.cells[4].appendChild(eloInput);
    row.cells[5].appendChild(leagueInput);

    // change the edit button to a save button
    element.textContent = "Save";
    element.classList.remove("edit-button");
    element.classList.add("save-button");
  } else if (element.classList.contains("save-button")) {
    // get the input field values
    const newRank = rankInput.value;
    const newPlayer = playerInput.value;
    const newWins = winsInput.value;
    const newLosses = lossesInput.value;
    const newElo = eloInput.value;
    const newLeague = leagueInput.value;

    // replace the input fields with the new values
    row.cells[0].textContent = newRank;
    row.cells[1].textContent = newPlayer;
    row.cells[2].textContent = newWins;
    row.cells[3].textContent = newLosses;
    row.cells[4].textContent = newElo;
    row.cells[5].textContent = newLeague;

    // change the save button back to an edit button
    element.textContent = "Edit";
    element.classList.remove("save-button");
    element.classList.add("edit-button");
  }
}

// define the createInput function
function createInput(value) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  return input;
}
s;
