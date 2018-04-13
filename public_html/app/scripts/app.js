function validateName(name) {
	var regExpression = /^([A-Za-z])/;
	if (regExpression.test(name) == false) {

		return false;
	} else {

		return true;
	}

}

function validateEmail(email) {
	var regExpression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (regExpression.test(email) == false) {

		return false;
	} else {

		return true;
	}

};

function validateAddress(addressString) {
	var regexpression = /^([a-z0-9.|(|)|:|#|/|-])/;
	if (!(regexpression.test(addressString.value))) {

		return false;
	} else {

		return true;
	}
};

function savestudentdata() {

	var vemail = document.getElementById('email').value;
	var vaddress = document.getElementById('saddr').value;
	var vfname = document.getElementById('fname').value;
	var vtelnumber = document.getElementById('telid').value;
	var vcomments = document.getElementById('comments').value;

	var stringbuild = "";

	if (!validateName(vfname)) {

		stringbuild += "First Name text box should contain only Alphabets \n"
	}

	if (!validateEmail(vemail)) {
		stringbuild += "Email ID should be in proper format Example: example@abc.com \n"
	}
	if (!validateAddress(vaddress)) {
		stringbuild += "The Address text boxes should contain only appropriate numeric, alphabet or alphanumeric characters\n"
	}

	if (!stringbuild == "") {
		alert(stringbuild);
	}

	var studentInfo = {
		"firstName" : vfname,
		"email" : vemail,
		"streetAddress" : vaddress,
		"telphoneNumber" : vtelnumber,
		"comments" : vcomments
	};
	var postObj = {
		"action" : "save",
		"studentInfo" : studentInfo
	};
	var postData = JSON.stringify(postObj);
	var url = "/PhpKrasDemo/resources/studentSurveyService.php";
	$.ajax({
		'type' : 'post',
		'url' : url,
		'data' : postData,
		'success' : function(data) {
			alert("SUCCESS");
		}
	});

}
var collectdata;
function fetchstudentsdata() {

	var url = "/PhpKrasDemo/resources/studentSurveyService.php?surveyData=get";
	$.ajax({
		'type' : 'GET',
		'headers' : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		'url' : url,

		'dataType' : 'json',
		'success' : function(data) {
			var body = document.getElementsByTagName("body")[0];

			// creates a <table> element and a <tbody> element
			var tbl = document.createElement("table");
			tbl.id = "data-table";
			tbl.className = "container";
			if (document.getElementById("data-table")) {
				document.getElementById("data-table").remove();
			}
			var tblHead = document.createElement("thead");
			var headRow = document.createElement("tr");
			var thCell = document.createElement("th");
			var fNameText = document.createTextNode("First Name");
			thCell.appendChild(fNameText);
			var stAdText = document.createTextNode("Street Address");
			thCell.appendChild(stAdText);
			var telPhText = document.createTextNode("Telephone Number");
			thCell.appendChild(telPhText);
			var emailText = document.createTextNode("Email");
			thCell.appendChild(emailText);
			var commentsText = document.createTextNode("Comments");
			thCell.appendChild(commentsText);

			var tblBody = document.createElement("tbody");

			// creating all cells
			for (var i = 0; i < data.length; i++) {
				// creates a table row
				var row = document.createElement("tr");
				var rowObj = data[i];

				var cell = document.createElement("td");
				var cellText = rowObj.StudentName ? document
						.createTextNode(rowObj.StudentName) : document
						.createTextNode("N/A");
				cell.appendChild(cellText);
				row.appendChild(cell);

				var cell = document.createElement("td");
				var cellText = rowObj.StudentAddress ? document
						.createTextNode(rowObj.StudentAddress) : document
						.createTextNode("N/A");
				cell.appendChild(cellText);
				row.appendChild(cell);

				var cell = document.createElement("td");
				var cellText = rowObj.StudentTelephone ? document
						.createTextNode(rowObj.StudentTelephone) : document
						.createTextNode("N/A");
				cell.appendChild(cellText);
				row.appendChild(cell);

				var cell = document.createElement("td");
				var cellText = rowObj.StudentEmail ? document
						.createTextNode(rowObj.StudentEmail) : document
						.createTextNode("N/A");
				cell.appendChild(cellText);
				row.appendChild(cell);

				var cell = document.createElement("td");
				var cellText = rowObj.Comments ? document
						.createTextNode(rowObj.Comments) : document
						.createTextNode("N/A");
				cell.appendChild(cellText);
				row.appendChild(cell);

				// add the row to the end of the table body
				tblBody.appendChild(row);
			}

			// put the <tbody> in the <table>
			tbl.appendChild(tblBody);
			// appends <table> into <body>
			body.appendChild(tbl);
			// sets the border attribute of tbl to 2;
			tbl.setAttribute("border", "2");

		}
	});

}

function generate_table(data) {
	// get the reference for the body
	var body = document.getElementsByTagName("body")[0];

	// creates a <table> element and a <tbody> element
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	// creating all cells
	for (var i = 0; i < 2; i++) {
		// creates a table row
		var row = document.createElement("tr");

		for (var j = 0; j < 2; j++) {
			// Create a <td> element and a text node, make the text
			// node the contents of the <td>, and put the <td> at
			// the end of the table row
			var cell = document.createElement("td");
			var cellText = document.createTextNode("cell in row " + i
					+ ", column " + j);
			cell.appendChild(cellText);
			row.appendChild(cell);
		}

		// add the row to the end of the table body
		tblBody.appendChild(row);
	}

	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
}

function logomouseover() {
	document.getElementById('logomessage2').style.visibility = "visible";
	document.getElementById('logo2').style.visibility = "hidden";

};
$("#logo2").tooltip();

console.log("ready!");