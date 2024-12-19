/* 

Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"


*/

const rps = (p1, p2) => {
	if (p1 === p2) return "Draw";

	if (p1 === "paper" && p2 === "scissors") return "Player Two wins!";
	if (p1 === "paper" && p2 === "rock") return "Player One wins!";

	if (p1 === "scissors" && p2 === "paper") return "Player One wins!";
	if (p1 === "scissors" && p2 === "rock") return "Player Two wins!";

	if (p1 === "rock" && p2 === "paper") return "Player Two wins!";
	if (p1 === "rock" && p2 === "scissors") return "Player One wins!";
};
