let weather = ["sunny", "rainy", "cloudy", "snowy"];

			// Step 1: Find the index of "cloudy"
			let cloudyIndex = weather.indexOf("cloudy");
			const subArray = weather.slice(0, 2);

			if (cloudyIndex !== -1) {
				// Step 2: Move "cloudy" to the end of the array
				// This is done by swapping "cloudy" with the last element
				let temp = weather[weather.length - 1]; // Temporarily store the last element
				weather[weather.length - 1] = weather[cloudyIndex]; // Move "cloudy" to the last position
				weather[cloudyIndex] = temp; // Restore the previously last element to the position of "cloudy"

				// Step 3: Use pop() to remove "cloudy"
				weather.pop();
			}

			console.log(weather);
			console.log(subArray);

			// Brief explanation of for and while loops
			// For loop structure
			// while loop structure

			// Loop that counts from 1 to 10, logging each number followed by "Mississippi"
			for (let i = 1; i <= 10; i++) {
				console.log(`${i} Mississippi`);
			}

			// Initialize an array of numbers
			let numbers = [15, 24, 85, 5, 27, 64, 99, 100, 15, 12];
			console.log(numbers.length); // Log the length of the array

			// Loop through the array 'numbers' and log even numbers to the console
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] % 2 === 0) {
					// Checks if the number is even
					console.log(numbers[i]);
				}
			}

			// Initialize variables for a sum calculation using a while loop
			let j = 1;
			let sum = 0;
			// Sum odd numbers from 1 to 10
			while (j <= 10) {
				if (j % 2 !== 0) {
					// Check if 'j' is odd
					sum += j; // Adds 'j' to 'sum' if it is odd
				}
				j++; // Increment 'j' by 1 on each iteration
			}
			console.log(sum); // Log the final sum

			// Initialize an array of team names
			const finalFourTeams = ["Purdue", "NC State", "Alabama", "UConn"];
			// Initialize arrays to store user predictions and actual results
			let userPredictions = []; // Holds which team the user predicts will win
			let actualResults = []; // Placeholder for simplicity, meant to be randomly generated
			let userScorePrediction = []; // hold the predicted scores
			let actualScores = []; //hold the actual scores

			// Collect user predictions through prompts and store them
			for (let i = 0; i < finalFourTeams.length; i += 2) {
				let prediction = prompt(
					`Who will win: ${finalFourTeams[i]} or ${finalFourTeams[i + 1]}?`
				);
				let predictedScore = prompt(
					`Predict the score for ${prediction} (e.g., 85): `
				);
				//prompt to predict user scores
				userPredictions.push(prediction); // Stores user prediction
				userScorePrediction.push(parseInt(predictedScore, 10)); //Parse predicted score
				console.log(
					`User predicted: ${prediction} will win the game with a score of: ${predictedScore}`
				);
			}
			console.log(userPredictions);
			console.log(userScorePrediction);

			// Simulate match outcomes and store actual winners
			for (let i = 0; i < finalFourTeams.length; i += 2) {
				// Randomly determine the winner for each game
				let winner =
					Math.random() < 0.5 ? finalFourTeams[i] : finalFourTeams[i + 1]; //Math.random() generates a random float between 0 (inclusive) and 1 (exclusive). The comparison < 0.5 essentially gives a 50/50 chance to pick one of two teams as the winner.
				let gameScore = Math.floor(Math.random() * (120 - 65 +1)) +65;
				actualResults.push(winner); // Stores the result
				actualScores.push(gameScore); //Store the simulated result

				console.log(`Actual winner of the game ${i / 2 + 1}}: ${winner} with a score of ${gameScore}`);
			}

			// Initialize variables for scoring
			let score = 0;
			let index = 0; // Initialize index for while loop to compare predictions and results

			// Compare user predictions to actual results and calculate the score
			while (index < userPredictions.length) {
				if (userPredictions[index] === actualResults[index]) {
					score++; // Increment score for correct prediction
					console.log(`Correct prediction for game ${index + 1}.`);
				} else {
					console.log(`Wrong prediction for game ${index + 1}.`);
				}
				index++; // Move to the next prediction/result pair
			}

			// Log the user's final score
			console.log(`Your final score: ${score}/${userPredictions.length}`);