var questionarray;
var answerarray;
var cardnum ;
chrome.storage.local.get('questions', function (data){

 questionarray=data.questions || [];
 if (questionarray.length===0) {
 	
 } else {
 	var questionlist = document.getElementById('questionList');
 		 		questionlist.innerHTML= "";
 	for (var i = questionarray.length - 1; i >= 0; i--) {

 		

 		//questionlist.innerHTML=;
 		questionlist.innerHTML += "<li class=\"list-group-item\"> " + questionarray[i] + "</li>";
 	}
 }
});
chrome.storage.local.get('answers', function (data){
	 answerarray=data.answers || [];

 if (answerarray.length===0) {

 } else {
 	var answerlist = document.getElementById('answerList');
 		answerlist.innerHTML= "";
 	for (var i = answerarray.length - 1; i >= 0; i--) {

 		
 		//answerlist.innerHTML=;
 		answerlist.innerHTML += "<li class=\"list-group-item\"> " + answerarray[i] + "</li>";
 	}
 }

});
