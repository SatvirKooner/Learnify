var questionarray;
var answerarray;

var reveal= document.getElementById('reveal');
var rand;
chrome.storage.local.get('questions', function (data){


 questionarray=data.questions || [];
rand = Math.floor(Math.random() * questionarray.length);

 var myquestion = document.getElementById('question-head');

 if (questionarray.length===0) {
 	
 } else {
 	myquestion.innerHTML= questionarray[rand];
 	}
 
});

reveal.addEventListener("click", function(){
chrome.storage.local.get('answers', function (data){
	 answerarray=data.answers || [];
	 var myanswer = document.getElementById('answer-para');
 if (answerarray.length===0) {

 } else {
 	myanswer.innerHTML= answerarray[rand];
 	}
 

});
});
