
	var quiz = [
		{
			question:"what NFL franchise has the most superbowl wins?",
			option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
			answer: 3,
		},
		{
			question:"what NFL franchise has the most loss in the superbowls?",
			option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
			answer: 2,
		},
		{
			question:"what NFL franchise has the most superbowl appearences?",
			option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
			answer: 0,
		},
	];

	console.log(quiz);

	var correct = 0;
	var incorrect = 0;
	var guess = 0;
	var time;




	//display the clock the page
	function clock(){
		time = setInterval(decrement,1000);
	}
		var timer = 100;
	function decrement(){

		console.log("timer",timer);
		timer--;
		$("#timer").text("remaining time:" + timer);
		//if once timer hits zero
		if (timer === 0){
			clearInterval(time);
			
			setTimeout(function(){
				console.log("times up");
				$("#main-content").empty();
				var gameStats = $("<p>");
				var answer = guessRemaining + "/" + quiz.length;
				gameStats.text(answer);
				var message = $("<h1>");
				message.text("Nice Try");
				$("#main-content").append(message, gameStats);
			},1000);
		};	
	}


	// when the page loads everything on this document.ready function loads.
$(document).ready(function(){

		$("#correct").text("correct: " +correct);
		$("#incorrect").text("incorrect: " +incorrect);
		$("#timer").text("Remaining Time: " + timer);
			//when the user clicks on the start button this will remove the hide and show the question and answer
	$("#startGame").on("click",function(){
		$("#timer, #correct, #incorrect").removeClass("hide");
		$("#main-content").empty();
		clock();
		for(var i=0; i < quiz.length; i++){
			var quizQuestion = $("<h2>");
			quizQuestion.addClass("question");
			quizQuestion.text(quiz[i].question);
			$("#main-content").append(quizQuestion);
			var btnGrp = $("<div>");
			btnGrp.addClass("btn-group");
			btnGrp.attr("role", "group");
			btnGrp.attr("id","bg" + i);
			btnGrp.attr("aria-label","first group");
			$("#main-content").append(btnGrp)
			for (var j = 0; j <quiz[i].option.length; j++){
				var btnOption = $("<button>");
				btnOption.addClass("options btn btn-secondary");
				btnOption.attr("type", "button");
				btnOption.attr("name", i)
				btnOption.attr("id","o"+j);
				btnOption.attr("value", j);
				btnOption.text(quiz[i].option[j]);
				$("#bg"+i).append(btnOption);
			};
		};
	});
	// do this everytime we dynamiclly add things to the page ||
	$("#main-content").on("click", ".options", function(){

		if(guess < quiz.length){
			guess++;
			var buttonName = $(this).attr("name");
			var buttonList = $(".btn[name=" + "'" + buttonName + "'" +"]");

			for(var i = 0; i < buttonList.length;i++) {
				buttonList[i].classList.remove("selected");
				buttonList[i].setAttribute("disabled", true);
			}
			var buttonSelect = parseInt($(this).val());
			var questionIndex = parseInt($(this).attr("name"))

			if(buttonSelect === quiz[questionIndex].answer){
				console.log("correct");
				correct++;
				$("#correct").text("Correct: " + correct);
			}

			else {
				incorrect++;
				$("#incorrect").text("Incorrect: " + incorrect);
				console.log("incorrect");
			}
		console.log(buttonSelect);
		$(this).addClass("selected");
		};
	});
});

