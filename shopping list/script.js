var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
var btnDel = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.onclick=underlineParent; 
	var button =document.createElement("button"); 
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	button.onclick=removeParent;  
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 

function underlineParent(event){
	event.target.classList.toggle("done");
}

//mark as done for the existing items 

[].forEach.call(item, el => {
	el.addEventListener('click', btnClick, false)
  })
  
  function btnClick() {
	// use Array function for lexical this
	[].forEach.call(item, el => {
	  // except for the element clicked, remove active class
	  if (el !== this) el.classList.remove('done');
	});
  
	// toggle active on the clicked button
	this.classList.toggle('done');
  }

  [].forEach.call(btnDel, el => {
	el.addEventListener('click', delClick, false)
  })

  function delClick() {
	// use Array function for lexical this
	[].forEach.call(item, el => {
	this.parentNode.remove(); 
	});
  }



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneAfterClick(){
		item.toggle("done"); 
}

function removeItem(){
	item.target.remove(); 
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




