// leaderboard.js

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set up the request
xhr.open("GET", "get_leaderboard_data.php", true);

// Define the callback function that will be called when the request completes
xhr.onload = function () {
  // Check that the response was successful
  if (xhr.status === 200) {
    // Parse the JSON data from the response
    const data = JSON.parse(xhr.responseText);

    // Loop through the leaderboard data and add a row for each player
    const tableBody = document.querySelector("#leaderboard tbody");
    data.forEach((player, index) => {
      const row = tableBody.insertRow();
      const rankCell = row.insertCell();
      rankCell.textContent = index + 1;
      const nameCell = row.insertCell();
      nameCell.textContent = player.name;
      const scoreCell = row.insertCell();
      scoreCell.textContent = player.score;
    });
  } else {
    // Handle errors
    console.error(xhr.statusText);
  }
};

// Send the request
xhr.send();
