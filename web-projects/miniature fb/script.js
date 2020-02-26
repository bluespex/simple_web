var database = [
	{
		username: "piyush",
		password: "piyush1999"
	},
	{
		username: "prabhsimar"
		password: "prabh1999"
	},
	{
		username: "prajjwal"
		password: "prajj1999"
	},
	{
		username: "priiyabhanu"
		password: "bhanu1999"
	}
 
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "so tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo cool!!"
	}
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signIn(user, pass){

	for(var i=0; i<database.length; i++){
		if (user===database[0].username && pass===database[0].password) {
			if(database[i].username === user && database[i].password === pass) {
				console.log(newsFeed);
			} 
		} else {
				alert("sorry,wrong username and password");
			}
	}	
}

signIn (userNamePrompt, passwordPrompt);