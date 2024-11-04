/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$	Author: Kiselev Denis (@de0ver)	  $
	$	Create Date: 03.11.2024 15:24	  $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/
const main = require('./main');

function changeTasks(part, element) {
	element.innerHTML = '';

	for (let i = 0; i < SQLLIST[part].length; i++)
	{
		let opt = window.document.createElement('option');
		opt.value = i;
		opt.innerHTML = 'Задача ' + (i + 1);
		element.appendChild(opt);
	}

	return 0;
}

function changePDFLink(part) {
	window.document.getElementById('getPDF').href = 'file:///' + PATH.join(__dirname, './pdf/', PART[part]);
	return 0;
}

window.addEventListener('DOMContentLoaded', () => {
	let selectedPart = window.document.getElementById('selectPart');
	let selectedTask = window.document.getElementById('selectTask');

	selectedPart.selectedIndex = 0;
	changePDFLink(selectedPart.value);
	changeTasks(selectedPart.value, selectedTask);

	selectedPart.onchange = function () { changeTasks(selectedPart.value, selectedTask); changePDFLink(selectedPart.value); return main(selectedPart.value, 0); }
	selectedTask.onchange = function () { return main(selectedPart.value, selectedTask.value); }

	main(selectedPart.value, 0); //first time app open
});