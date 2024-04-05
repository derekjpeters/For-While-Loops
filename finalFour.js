// Waits for the HTML document to be fully loaded before running the contained code.
document.addEventListener("DOMContentLoaded", () => {
	// Initializes an array with the names of the final four teams.
	const finalFourTeams = ["Purdue", "NC State", "Alabama", "UConn"];
	// Initializes arrays to hold user predictions, actual results, user score predictions, and actual scores.
	let userPredictions = [];
	let actualResults = [];
	let userScorePrediction = [];
	let actualScores = [];

	// Function to initialize the form with options for making predictions.
	function initializeForm() {
		// Gets the form element by its ID.
		const form = document.getElementById("prediction-form");
		// Clears the form to ensure it starts empty (useful for re-initializing).
		form.innerHTML = "";
		// Loops through the teams array two at a time to create matchup options.
		for (let i = 0; i < finalFourTeams.length; i += 2) {
			// Creates a new div for each matchup.
			const matchDiv = document.createElement("div");
			// Sets the inner HTML of the div to include labels, select options for the teams, and an input for the score prediction.
			matchDiv.innerHTML = `
                <label>Who will win: ${finalFourTeams[i]} or ${finalFourTeams[i + 1]}?</label>
                <select id="team-prediction-${i / 2}">
                    <option value="${finalFourTeams[i]}">${finalFourTeams[i]}</option>
                    <option value="${finalFourTeams[i + 1]}">${finalFourTeams[i + 1]}</option>
                </select>
                <label>Predict the score for your chosen team:</label>
                <input type="number" id="score-prediction-${i / 2}" min="0">
            `;
			// Appends the matchup div to the form.
			form.appendChild(matchDiv);
		}
	}

	// Function to submit predictions.
	function submitPredictions() {
		// Resets the arrays to avoid duplication if predictions are resubmitted.
		userPredictions = [];
		userScorePrediction = [];
		actualResults = [];
		actualScores = [];

		// Gets the divs where user entries and actual results will be displayed.
		const userEntriesDiv = document.getElementById("user-entries");
		const actualResultsDiv = document.getElementById("actual-results");
		// Sets the inner HTML of these divs to headings.
		userEntriesDiv.innerHTML = "<h2>Your Predictions</h2>";
		actualResultsDiv.innerHTML = "<h2>Actual Results</h2>";

		// Loops through the number of matchups to collect and display predictions and generate simulated actual results.
		for (let i = 0; i < finalFourTeams.length / 2; i++) {
			// Collects the user's team and score predictions.
			const prediction = document.getElementById(`team-prediction-${i}`).value;
			const predictedScore = parseInt(document.getElementById(`score-prediction-${i}`).value, 10);
			// Updates the arrays with these predictions.
			userPredictions.push(prediction);
			userScorePrediction.push(predictedScore);
			// Updates the user entries div with the predictions.
			userEntriesDiv.innerHTML += `<p>${prediction} will win with a score of ${predictedScore}</p>`;

			// Simulates actual results randomly.
			const winnerIndex = Math.random() < 0.5 ? i * 2 : i * 2 + 1;
			const winner = finalFourTeams[winnerIndex];
			const gameScore = Math.floor(Math.random() * (120 - 65 + 1)) + 65;
			// Updates the arrays with these simulated results.
			actualResults.push(winner);
			actualScores.push(gameScore);
			// Updates the actual results div with the outcomes.
			actualResultsDiv.innerHTML += `<p>Game ${i + 1}: ${winner} won with a score of ${gameScore}</p>`;
		}

		// Makes the calculate score button visible.
		document.getElementById("calculate-score").style.display = "block";
	}

	// Function to calculate and display the score based on the accuracy of predictions.
	function calculateScore() {
		let score = 0;
		let index = 0; // Initializes an index for looping through the predictions.

		// Finds or creates a div to display the prediction results.
		let resultsDiv = document.getElementById('prediction-results');
		if (!resultsDiv) {
			resultsDiv = document.createElement('div');
			resultsDiv.id = 'prediction-results';
			document.body.appendChild(resultsDiv);
		}

		resultsDiv.innerHTML = ''; // Clears previous results from the display div.

		// Loops through the predictions to compare with actual results and calculate the score.
		while (index < userPredictions.length) {
			let resultMessage;
			// Checks if the prediction matches the actual result and updates the score and message accordingly.
			if (userPredictions[index] === actualResults[index]) {
				score++;
				resultMessage = `Correct prediction for game ${index + 1}.`;
			} else {
				resultMessage = `Wrong prediction for game ${index + 1}.`;
			}

			// Creates a paragraph element for each game's result and appends it to the results div.
			const p = document.createElement('p');
			p.textContent = resultMessage;
			resultsDiv.appendChild(p);

			index++;
		}

		// Displays the total score in a new paragraph element.
		const scoreP = document.createElement('p');
		scoreP.textContent = `Your final score: ${score}/${userPredictions.length}`;
		resultsDiv.appendChild(scoreP);
	}

	// Initializes the form when the page loads.
	initializeForm();

	// Sets event handlers for the submit predictions and calculate score buttons.
	document.getElementById("submit-predictions").onclick = submitPredictions;
	document.getElementById("calculate-score").onclick = calculateScore;
});

