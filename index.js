
let homeStoreEl = document.getElementById("score-HOME")
let guestStoreEl = document.getElementById("score-GUEST")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScore = 0
let guestScore = 0

let newGameEl = document.getElementById("new-game-btn")



function addHomePointsOne(){
	
	// console.log(homeScore)
	// console.log(homeScoreBtnOne)
	// console.log(homeStoreEl)
	
	homeScore += 1 
	//console.log(homeScore)
	homeStoreEl.textContent = homeScore 
	checkHighScore()
}

function addHomePointsTwo(){
	homeScore += 2 
	console.log(homeScore)
	homeStoreEl.textContent = homeScore 
	checkHighScore()
}

function addHomePointsThree(){
	homeScore += 3 
	console.log(homeScore)
	homeStoreEl.textContent = homeScore 
	checkHighScore()
}

function addGuestPointsOne(){
	guestScore += 1 
	console.log(guestScore)
	guestStoreEl.textContent = guestScore 
	checkHighScore()
}

function addGuestPointsTwo(){
	guestScore += 2 
	console.log(guestScore)
	guestStoreEl.textContent = guestScore 
	checkHighScore()
}

function addGuestPointsThree(){
	guestScore += 3 
	console.log(guestScore)
	guestStoreEl.textContent = guestScore 
	checkHighScore()
}

function resetScore() {
	homeScore = 0
	guestScore = 0

	homeStoreEl.textContent = homeScore
	guestStoreEl.textContent = guestScore
	document.getElementById("score-HOME").style.border = "none"
	document.getElementById("score-GUEST").style.border = "none"
	
}

function checkHighScore() {
		if (homeScore>guestScore) {
		document.getElementById("score-HOME").style.border = "thick solid #FCD34D"
		document.getElementById("score-GUEST").style.border = "none"
		
	}
	else {
		document.getElementById("score-GUEST").style.border = "thick solid #FCD34D"
		document.getElementById("score-HOME").style.border = "none"
	}
	
	if (homeScore ==guestScore) {
		console.log("both are equal")
		document.getElementById("score-GUEST").style.border = "thick dotted #FCD34D"
		document.getElementById("score-HOME").style.border = "thick dotted #FCD34D"
	}
}