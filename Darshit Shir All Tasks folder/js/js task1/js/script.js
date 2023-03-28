// add row function
function addRow() {
  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  cell1.innerHTML = `<input type="text" class="form-control" placeholder="Degree">`;
  cell2.innerHTML = `<input type="text" class="form-control" placeholder="College">`;
  cell3.innerHTML = `<input type="month" class="form-control">`
  cell4.innerHTML = `<input type="month" class="form-control">`
  cell5.innerHTML = `<input type="number" class="form-control" placeholder="Percentage">`
  cell6.innerHTML = `<input type="number" class="form-control" placeholder="Backlog">`
  cell7.innerHTML = `<button class="text-danger border-0 rounded px-2 py-2" onclick = "removeRow(this)"><i class="fa-sharp fa-solid fa-trash"></i></button>`
}

// remove Row function
function removeRow(remove) {
  remove.parentElement.parentElement.remove();
}

// year picker calender
$('#yearPicker').calendar({
  type: 'year'
});


// <div>
//                 <button class="btn-outline-success border-0 rounded px-4 py-2" onclick="addRow()">Add</button>
//             </div>