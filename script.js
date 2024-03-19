 //    let children = document.querySelectorAll('#form1');
	// let fname=children[0].value;
	// let lname=children[1].value;
function getFormvalue(event) {
    event.preventDefault();
    let form = document.querySelector('#form1');
    let fname = form.querySelector('input[name=fname]').value;
    let lname = form.querySelector('input[name=lname]').value;
    let fullName = fname + ' ' + lname;
    alert(fullName);
}
