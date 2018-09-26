var questionarray;
var answerarray;
var cardnum ;
var newDeck;
var delDeck;
var renameDeck;
var questionDeck;
var answerDeck;
var curDeck;
var decknames;

delDeck = document.getElementById('delDeck');
renameDeck = document.getElementById('renameDeck');
newDeck = document.getElementById('newDeck');


chrome.storage.local.get('questionDeck', function (data){
 questionDeck=data.questionDeck || [];
});

chrome.storage.local.get('answerDeck', function (data){
answerDeck=data.answerDeck || [];
});

chrome.storage.local.get('decknames', function (data){
decknames= data.decknames || [];
});

chrome.storage.local.get('curdeck', function(data){
	curDeck = parseInt(data.curdeck) || 0;
});



chrome.storage.local.get('questions', function (data){

 questionDeck=data.questionDeck || [];
 questionarray=data.questions || [];
 if (questionarray.length===0) {
 	
 } else {
 	var questionlist = document.getElementById('questionList');
 		 		questionlist.innerHTML= "";
 	for (var i = questionarray.length - 1; i >= 0; i--) {

 		

 		//questionlist.innerHTML=;
 		questionlist.innerHTML += "<li id= q"+i+" class=\"list-group-item list-group-item-action\"> " + questionarray[i] + "</li>";
 	}
 }
});


chrome.storage.local.get('answers', function (data){
 answerDeck=data.answerDeck || [];
 answerarray=data.answers || [];

 if (answerarray.length===0) {

 } else {
 	var answerlist = document.getElementById('answerList');
 		answerlist.innerHTML= "";
 	for (var i = answerarray.length - 1; i >= 0; i--) {

 		
 		//answerlist.innerHTML=;
 		answerlist.innerHTML += "<li id= a"+i+" class=\"list-group-item list-group-item-action\"> <button id= "+i+" type=\"button\" class=\"btn  btn-danger alright \" >Delete</button>" + answerarray[i] + " </li>";
 		
 		if($("#a"+i).height()>$("#q"+i).height()){
 			$("#q"+i).height($("#a"+i).height());
 		} else {
 			$("#a"+i).height($("#q"+i).height());
 		}
 	}	
 }

});

chrome.storage.local.get('decknames',function(data){
	for (var i = decknames.length-1; i>=0;i--){
		$('.dropdown-menu').append("<button class='dropdown-item' type='button'>"+decknames[i]+"</button>");
	}
		$(".viewing").html("Currently Viewing Deck: <strong> "+(decknames[curDeck-1] || 'Default')+" </strong>");

});

function loadDeck(){
	for (var i = decknames.length-1; i>=0;i--){
		$('.dropdown-menu').append("<button class='dropdown-item' type='button'>"+decknames[i]+"</button>");
	}

}

$("#answerList").on("click", "button",function(data){
	if(!answerarray.length==0){		
	$(this).parent().remove();
	$("#q"+this.id).remove();
	answerarray.splice(this.id,1);
	questionarray.splice(this.id,1);
	chrome.storage.local.set({'answers' : answerarray});
	chrome.storage.local.set({'questions' : questionarray});
	cardnum--;
	chrome.storage.local.set({'num' : answerarray.length});
	if(answerarray.length==0)
		location.reload();


}


});
var deckname;

$("#newDeck").click(function (data) {

	deckname = prompt("Please enter a name for your new deck!", "Science101");
	while (deckname.trim()==="" ){
	deckname = prompt("Please enter a VALID name for your deck!", "Science101");
	}
	curDeck++;
	questionDeck.push([]);
	answerDeck.push([]);
	chrome.storage.local.set({'curdeck' : curDeck});
	decknames.push(deckname);

	chrome.storage.local.set({'decknames' : decknames});
	location.reload();	


});

$("#delDeck").click(function (data){
	
	if(curDeck!=0){
		if(confirm("Are you sure you want to delete your \""+decknames[curDeck-1]+"\"")){
	questionDeck.splice(curDeck,1);
	answerDeck.splice(curDeck,1);
	decknames.splice(curDeck-1,1);
	curDeck--;
	chrome.storage.local.set({'answers' : answerarray});
	chrome.storage.local.set({'curdeck' : curDeck});
	chrome.storage.local.set({'decknames' : decknames});
	location.reload();

	}
}
});

