var questionarray;
var answerarray;
var cardnum ;

chrome.storage.local.get('questions', function (data){
 questionarray=data.questions || [];
});
chrome.storage.local.get('answers', function (data){
answerarray=data.answers || [];
});

chrome.storage.local.get('num', function(data){
	cardnum = parseInt(data.num) || 0;
	//alert(parseInt(data.num));
	//alert(cardnum);
});


var but = document.getElementById("save-button");
var del = document.getElementById("clear-button");

del.addEventListener("click", function(){
	if (questionarray.length === 0){
		alert("deck empty");
		cardnum =0;
		//alert(cardnum);

		chrome.storage.local.set({'num' : cardnum});
	} else {
	alert("Last card deleted");
	questionarray.pop();
	answerarray.pop();
	cardnum--;
	//alert("length "+questionarray.length);
	chrome.storage.local.set({'questions' : questionarray});
	chrome.storage.local.set({'answers' : answerarray});
	//alert(cardnum);
	chrome.storage.local.set({'num' : cardnum});
	//alert(questionarray[cardnum-1]);
	//alert(answerarray[cardnum-1]);

	}

});

function addfn(){
	if(document.getElementById("questionField").value==="" || document.getElementById("answerField").value===""){
		alert("Fill in both fields please!");
	}else{
	questionarray.push(document.getElementById("questionField").value);
	answerarray.push(document.getElementById("answerField").value);

	chrome.storage.local.set({'questions' : questionarray});
	chrome.storage.local.set({'answers' : answerarray});

	var testarray;
	chrome.storage.local.get('questions', function (data){
		 testarray = data.questions;
		//alert(cardnum);
		//alert(testarray[cardnum]);
	});

	chrome.storage.local.get('answers', function (data){
		//alert(cardnum);
		//alert(data.answers[cardnum]);
		alert("Your question is " +"\"" +testarray[cardnum]+"\".");
		alert("Your answer is "+"\""+data.answers[cardnum]+"\".");
		cardnum++;
		chrome.storage.local.set({'num' : cardnum});
		document.getElementById("questionField").value="";
		document.getElementById("answerField").value="";
		});

	}


};

but.addEventListener("click",addfn);





