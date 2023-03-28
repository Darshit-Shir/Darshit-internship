idcounter = 1;
let isDefault;

for(i=0 ; i<2 ; i++){
  addRow(true)
}

// add row function
function addRow(isDefault) {
  let table = document.getElementById("table");
  let row = table.insertRow(-1)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)
  let cell6 = row.insertCell(5)
  let cell7 = row.insertCell(6)

  let degree = document.createElement("input")
  degree.setAttribute("type", "text")
  degree.classList = "form-control"
  degree.setAttribute("placeholder", "Degree")
  cell1.appendChild(degree)

  let college = document.createElement("input")
  college.setAttribute("type", "text")
  college.classList = "form-control"
  college.setAttribute("placeholder", "College")
  cell2.appendChild(college)

  let startDate = document.createElement("input")
  startDate.setAttribute("type", "month")
  startDate.classList = "form-control"
  cell3.appendChild(startDate)

  let passOutYear = document.createElement("input")
  passOutYear.setAttribute("type", "month")
  passOutYear.classList = "form-control"
  cell4.appendChild(passOutYear)

  let percentage = document.createElement("input")
  percentage.setAttribute("type", "text")
  percentage.classList = "form-control" 
  percentage.setAttribute("placeholder", "Percentage")
  cell5.appendChild(percentage)

  let backlog = document.createElement("input")
  backlog.setAttribute("type", "text")
  backlog.classList = "form-control"
  backlog.setAttribute("placeholder", "Backlog")
  cell6.appendChild(backlog)

  // remove button
  let btn = document.createElement("button")
  let span = document.createElement("span")
  let i = document.createElement("i")
  btn.setAttribute("onclick", "removeRow(this)")
  btn.classList = "button buttonRemove"

  if(isDefault){
    btn.classList.add("opacity-0")
    btn.setAttribute("disabled", "true")
    btn.style = "cursor:context-menu"
  }

  btn.setAttribute("style", "--clr:#FF0000")
  span.innerHTML = "REMOVE"
  btn.appendChild(span)
  btn.appendChild(i)
  cell7.appendChild(btn)
  idcounter++
}

// remove Row function
function removeRow(remove) {
  remove.parentElement.parentElement.remove();
}

// year picker calender
$('#yearPicker0').calendar({
  type: 'year'
});


