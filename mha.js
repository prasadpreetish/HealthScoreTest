questions = [

	{
		question: "Do you show zero interest in physical exercises?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you get some suicidal thoughts?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you face some anxiety and depression related issues?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Are you able to sleep at night?",
		optionA: { text: "always", pointsforopt: 3, correct: true },
		optionB: { text: "mostly", pointsforopt: 2, correct: false },
		optionC: { text: "sometimes", pointsforopt: 1, correct: false },
		optionD: { text: "no", pointsforopt: 0, correct: false },
		correctOption: "optionA"
	},

	{
		question: "Do you overthink face some inferiority complex issues and having difficulties in daily activities ?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you get Overwhelming feelings of helplessness or hopelessness ?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you have migraine issues?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you face impaired consciousness?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you feel laziness and weakness?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	},

	{
		question: "Do you face any discomfort while doing physical exercises?",
		optionA: { text: "always", pointsforopt: 0, correct: false },
		optionB: { text: "mostly", pointsforopt: 1, correct: false },
		optionC: { text: "sometimes", pointsforopt: 2, correct: false },
		optionD: { text: "no", pointsforopt: 3, correct: true },
		correctOption: "optionD"
	}

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
	//function to shuffle and push 10 questions to shuffledQuestions array
	//app would be dealing with 10questions per session
	while (shuffledQuestions.length <= 9) {
		const random = questions[Math.floor(Math.random() * questions.length)]
		if (!shuffledQuestions.includes(random)) {
			shuffledQuestions.push(random)
		}
	}
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
// let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
	handleQuestions()
	const currentQuestion = shuffledQuestions[index]

	document.getElementById("question-number").innerHTML = questionNumber;

	document.getElementById("display-question").innerHTML = currentQuestion.question;

	document.getElementById("option-one-label").innerHTML = currentQuestion.optionA.text;

	document.getElementById("option-two-label").innerHTML = currentQuestion.optionB.text;

	document.getElementById("option-three-label").innerHTML = currentQuestion.optionC.text;

	document.getElementById("option-four-label").innerHTML = currentQuestion.optionD.text;

}


function checkForAnswer() {
	const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
	// const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
	const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)

	let correctOption = null

	let optedAnswer = null;
	let currentQuestionAnswer = null;

	options.forEach((option) => {
		if (option.value === currentQuestionAnswer) {
			//get's correct's radio input with correct answer
			correctOption = option.labels[0].id
		}
	})

	//checking to make sure a radio input has been checked or an option being chosen
	if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
		document.getElementById('option-modal').style.display = "flex"
	}

	// getting the currentQuestion correct answer and also checking the same here;


	if (options[0].checked) {
		currentQuestionAnswer = currentQuestion.optionA.correct;
		// document.getElementById(correctOption).style.backgroundColor = "green"
		playerScore += currentQuestion.optionA.pointsforopt;
		indexNumber++;
		//set to delay question number till when next question loads
		setTimeout(() => {
			questionNumber++
		}, 1000)
	} else if (options[1].checked) {
		currentQuestionAnswer = currentQuestion.optionB.correct;
		// document.getElementById(correctOption).style.backgroundColor = "green"
		playerScore += currentQuestion.optionB.pointsforopt;
		indexNumber++;
		//set to delay question number till when next question loads
		setTimeout(() => {
			questionNumber++
		}, 1000)
	} else if (options[2].checked) {
		currentQuestionAnswer = currentQuestion.optionC.correct;
		// document.getElementById(correctOption).style.backgroundColor = "green"
		playerScore += currentQuestion.optionC.pointsforopt;
		indexNumber++;
		//set to delay question number till when next question loads
		setTimeout(() => {
			questionNumber++
		}, 1000)
	} else if (options[3].checked) {
		currentQuestionAnswer = currentQuestion.optionD.correct;
		// document.getElementById(correctOption).style.backgroundColor = "green"
		playerScore += currentQuestion.optionD.pointsforopt;
		indexNumber++;
		//set to delay question number till when next question loads
		setTimeout(() => {
			questionNumber++
		}, 1000)
	}
	console.log(playerScore)
}



//called when the next button is called
function handleNextQuestion() {
	checkForAnswer() //check if player picked right or wrong option
	unCheckRadioButtons()
	//delays next question displaying for a second just for some effects so questions don't rush in on player
	setTimeout(() => {
		if (indexNumber <= 9) {
			//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
			NextQuestion(indexNumber)
		}
		else {
			handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
		}
		resetOptionBackground()
	}, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
	const options = document.getElementsByName("option");
	options.forEach((option) => {
		document.getElementById(option.labels[0].id).style.backgroundColor = ""
	})
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
	const options = document.getElementsByName("option");
	for (let i = 0; i < options.length; i++) {
		options[i].checked = false;
	}
}

// function for when all questions being answered
function handleEndGame() {
	let remark = "";
	let remarkColor = null

	// condition check for player remark and remark color
	if (playerScore <= 2) {
		remark += "you are dealing with a serious mental health issues <br> Refer to Dr.Sachin Mishra(neurologist) <br> Contact : 8237327653 <br> Refer to Dr. Lakshit Singh(pyschiatrist) <br> Contact:7842672763"
		remarkColor = "red"
	}
	else if (playerScore >= 3 && playerScore < 6) {
		remark += "you are dealing with a mild  mental health issues <br> Refer to Dr.Alok Mishra(psychologist) <br> Contact : 8237327653 <br> Refer to Dr. Lakshit Singh(pyschiatrist) <br> Contact:7842672763"
		remarkColor = "orange"
	}
	else if (playerScore >= 6 && playerScore < 9) {
		remark += "you are dealing with a normal mental health issues <br> Refer to Dr.Mahesh Singh(psychologist) <br> Contact : 8237327653"
		remarkColor = "yellow"
	}
	else if (playerScore >= 9) {
		remark += "your total health score is good <br> Refer to Dr. Arun Gupta(physician)"
		remarkColor = "green"
	}
	const playerGrade = (playerScore / 30) * 100

	//data to display to score board
	document.getElementById('remarks').innerHTML = remark
	document.getElementById('remarks').style.color = remarkColor
	document.getElementById('grade-percentage').innerHTML = playerGrade
	// document.getElementById('wrong-answers').innerHTML = wrongAttempt no need now as there is no wrong answer.
	document.getElementById('right-answers').innerHTML = playerScore
	document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
	questionNumber = 1
	playerScore = 0
	wrongAttempt = 0
	indexNumber = 0
	shuffledQuestions = []
	NextQuestion(indexNumber)
	document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
	document.getElementById('option-modal').style.display = "none"
}