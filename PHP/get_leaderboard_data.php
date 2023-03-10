
// Connect to the MySQL database
$servername = "localhost";
$username = "admin";
$password = "";
$dbname = "DSSTT";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check for errors
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query the leaderboard table and fetch the results as an associative array
$sql = "SELECT name, score FROM leaderboard ORDER BY score DESC";
$result = $conn->query($sql);
$leaderboard_data = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $leaderboard_data[] = $row;
  }
}

// Close the database connection
$conn->close();

// Return the leaderboard data as a JSON object
header('Content-Type: application/json');
echo json_encode($leaderboard_data);
