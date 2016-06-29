var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList',function(req, res) {
	console.log('I ve get get request')
	
	person1 = {
		name:'Time',
		email: 'Time@mail.ru',
		number : '(111) 111-1111'
	};

	person2 = {
		name:'Timer',
		email: 'Timer@mail.ru',
		number : '(222) 222-2222'
	};

	person3 = {
		name:'Timers',
		email: 'Timers@mail.ru',
		number: '(333) 333-3333'
	};

	var contactList = [person1,person2,person3];

	res.json(contactList)
})

app.listen(3000);
console.log("Server running on port 3000")