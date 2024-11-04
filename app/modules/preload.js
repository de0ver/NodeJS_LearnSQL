/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$	Author: Kiselev Denis (@de0ver)	  $
	$	Create Date: 03.11.2024 15:24	  $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/
const connection = require('./connection');
const globals = require('./globals');

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

function createTable(table, element) {
	element.innerHTML = '';

	if (table == null || table == undefined)
		return 0;

	let tr = element.insertRow();
	for (let i = 0; i < Object.keys(table.table).length; i++)
	{
		if (Object.keys(table.table[i])[i] != null || Object.keys(table.table[i])[i] != undefined)
		{
			let td = tr.insertCell();
			td.appendChild(document.createTextNode(Object.keys(table.table[i])[i]));
		}
	}

	for (let i = 0; i < table.table.length; i++)
	{
		tr = element.insertRow();
		for (let j = 0; j < Object.keys(table.table[i]).length; j++)
		{
			let td = tr.insertCell();
			td.appendChild(document.createTextNode(Object.values(table.table[i])[j]));
		}
	}
}

window.addEventListener('DOMContentLoaded', async () => {
	let selectedPart = window.document.getElementById('selectPart');
	let selectedTask = window.document.getElementById('selectTask');
	let taskResult = window.document.getElementById('taskResult');

	selectedPart.selectedIndex = 0;
	selectedTask.selectedIndex = 0;
	changePDFLink(selectedPart.value);
	changeTasks(selectedPart.value, selectedTask);
	createTable({ table: await connection(SQLLIST[selectedPart.value][selectedTask.value]) }, taskResult);

	selectedPart.onchange = async function () { changeTasks(selectedPart.value, selectedTask); changePDFLink(selectedPart.value); return createTable({ table: await connection(SQLLIST[selectedPart.value][selectedTask.value]) }, taskResult); }
	selectedTask.onchange = async function () { return createTable({ table: await connection(SQLLIST[selectedPart.value][selectedTask.value]) }, taskResult); }
});