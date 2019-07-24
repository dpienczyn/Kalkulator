function insert(num){
	document.form.textview.value = document.form.textview.value+num;
}
function equal(){
	var exp = document.form.textview.value;
	if(exp){
	document.form.textview.value = eval(exp)
}
}

function c(){
	document.form.textview.value = "";
}
function add(){
	var e = document.form.textview.value+num;
	e+=document.form.textview.value;
}