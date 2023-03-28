let idcounter = 1
let counter = 0
let dataId = 1
let arrResult = []
var isDefault
let mainDiv = document.getElementById("mainDiv")

for (i = 0; i < 2; i++) {
  addRow(true)
}

// add row function
function addRow(isDefault) {
  counter++

  let educationDiv = document.createElement("div")
  educationDiv.classList = "row mt-2 small-screen-border pb-2"
  educationDiv.setAttribute("id", "row" + idcounter)

  let degreeDiv = document.createElement("div")
  degreeDiv.classList = "col-lg-2"
  let degreeLabel = document.createElement("label")
  degreeLabel.innerHTML = "Degree"
  degreeLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
  let degree = document.createElement("input")
  degree.setAttribute("type", "text")
  degree.classList = "form-control mt-2"
  degree.setAttribute("pattern", "[a-zA-Z]+")
  degree.setAttribute("id", "degree" + idcounter)
  degree.setAttribute("placeholder", "Degree")
  degreeDiv.appendChild(degreeLabel)
  degreeDiv.appendChild(degree)

  let collegeDiv = document.createElement("div")
  collegeDiv.classList = "col-lg-2"
  let collegeLabel = document.createElement("label")
  collegeLabel.innerHTML = "College"
  collegeLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
  let college = document.createElement("input")
  college.setAttribute("type", "text")
  college.classList = "form-control mt-2"
  college.setAttribute("pattern", "[a-zA-Z]+")
  college.setAttribute("id", "college" + idcounter)
  college.setAttribute("placeholder", "College")
  collegeDiv.appendChild(collegeLabel)
  collegeDiv.appendChild(college)

  let startDateDiv = document.createElement("div")
  startDateDiv.classList = "col-lg-2"
  let startDateLabel = document.createElement("label")
  startDateLabel.innerHTML = "Start Date"
  startDateLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
  let startDate = document.createElement("input")
  startDate.setAttribute("type", "month")
  startDate.setAttribute("id", "startDate" + idcounter)
  startDate.classList = "form-control mt-2"
  startDateDiv.appendChild(startDateLabel)
  startDateDiv.appendChild(startDate)

  let passOutYearDiv = document.createElement("div")
  passOutYearDiv.classList = "col-lg-2"
  let passOutYearLabel = document.createElement("label")
  passOutYearLabel.innerHTML = "Pass Out Year"
  passOutYearLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
  let passOutYear = document.createElement("input")
  passOutYear.setAttribute("type", "month")
  passOutYear.setAttribute("id", "passOutYear" + idcounter)
  passOutYear.classList = "form-control mt-2"
  passOutYearDiv.appendChild(passOutYearLabel)
  passOutYearDiv.appendChild(passOutYear)

  let percentageDiv = document.createElement("div")
  percentageDiv.classList = "col-lg-1"
  let percentageLabel = document.createElement("label")
  percentageLabel.innerHTML = "Percentage"
  percentageLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
  let percentage = document.createElement("input")
  percentage.setAttribute("pattern", "[0-9]|[1-9][0-9]|[1][0][0]")
  percentage.setAttribute("type", "text")
  percentage.setAttribute("id", "percentage" + idcounter)
  percentage.setAttribute("placeholder", "00")
  percentage.classList = "form-control mt-2"
  percentageDiv.appendChild(percentageLabel)
  percentageDiv.appendChild(percentage)

  let backlogDiv = document.createElement("div")
  backlogDiv.classList = "col-lg-1"
  let backlogLabel = document.createElement("label")
  backlogLabel.innerHTML = "Backlog"
  backlogLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
  let backlog = document.createElement("input")
  backlog.setAttribute("pattern", "[0-9]")
  backlog.setAttribute("type", "text")
  backlog.setAttribute("id", "backlog" + idcounter)
  backlog.setAttribute("placeholder", "0")
  backlog.classList = "form-control mt-2"
  backlogDiv.appendChild(backlogLabel)
  backlogDiv.appendChild(backlog)

  // remove button
  let removeButtonDiv = document.createElement("div")
  removeButtonDiv.classList = "col-lg-1"
  let btn = document.createElement("button")
  let span = document.createElement("span")
  let i = document.createElement("i")
  btn.setAttribute("onclick", "removeRow(this)")
  btn.classList = "button buttonRemove mt-2 small-screen-margin"

  if (isDefault) {
    removeButtonDiv.classList.add("d-none")
    btn.setAttribute("disabled", "true")
    btn.style = "cursor:context-menu"
  }

  btn.setAttribute("style", "--clr:#FF0000")
  span.innerHTML = "REMOVE"
  btn.appendChild(span)
  btn.appendChild(i)
  removeButtonDiv.appendChild(btn)
  idcounter++

  educationDiv.appendChild(degreeDiv)
  educationDiv.appendChild(collegeDiv)
  educationDiv.appendChild(startDateDiv)
  educationDiv.appendChild(passOutYearDiv)
  educationDiv.appendChild(percentageDiv)
  educationDiv.appendChild(backlogDiv)
  educationDiv.appendChild(removeButtonDiv)

  mainDiv.appendChild(educationDiv)
}

// remove Row function
function removeRow(remove) {
  remove.parentElement.parentElement.remove();
  counter--;
}

// validation function
function validateform() {

  let dateOfBirth = document.myForm.dateOfBirth.value
  let gradutionYear = document.myForm.gradutionYear.value
  let email = document.myForm.email.value
  let password = document.myForm.password.value
  let address = document.myForm.address.value

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  // switch case for validate form
  switch (true) {
    case (dateOfBirth == ""):
      break

    case (gradutionYear == ""):
      break

    case (gradutionYear <= dateOfBirth):
      alert("Graduation Year should be greater than Start Date")
      break

    case (!(email.match(mailFormat))):
      document.myForm.email.value = ""
      document.myForm.email.setAttribute("placeholder", "example : abc@gmail.com")
      break

    case (password.length < 8):
      document.myForm.password.value = ""
      document.myForm.password.setAttribute("placeholder", "Please enter minimium 8 characters")
      break

    case (address == ""):
      document.myForm.address.focus()
      break

    default:

      // for loop to get input value of education field
      for (rows of mainDiv.childNodes) {

        var isChecked = true
        switch (true) {
          case rows.childNodes[0].childNodes[1].value == "":
            rows.childNodes[0].childNodes[1].focus()
            break

            case rows.childNodes[1].childNodes[1].value == "":
            rows.childNodes[1].childNodes[1].focus()
            break

            case rows.childNodes[2].childNodes[1].value == "":
            rows.childNodes[2].childNodes[1].focus()
            break
            
            case rows.childNodes[3].childNodes[1].value == "":
            rows.childNodes[3].childNodes[1].focus()
            break

          case rows.childNodes[3].childNodes[1].value == "":
            rows.childNodes[3].childNodes[1].focus()
            break

          case rows.childNodes[3].childNodes[1].value < rows.childNodes[2].childNodes[1].value:
            alert("Pass Out Year should be greater than Start Date")
            rows.childNodes[3].childNodes[1].focus()
            break

            case rows.childNodes[4].childNodes[1].value == "":
            rows.childNodes[4].childNodes[1].focus()
            break

            case rows.childNodes[5].childNodes[1].value == "":
            rows.childNodes[5].childNodes[1].focus()
            break

          default:
            isChecked = false;
        }
        if (isChecked) {
          break
        }
      }
      if (!isChecked) {
        return true
      }
  }

}

//  output data table
function output() {
  let table = document.getElementById("table")
  let row = table.insertRow(-1)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)
  let cell6 = row.insertCell(5)
  let cell7 = row.insertCell(6)
  let cell8 = row.insertCell(7)

  cell1.innerHTML = myForm.fName.value
  cell2.innerHTML = myForm.lName.value
  cell3.innerHTML = myForm.dateOfBirth.value
  cell4.innerHTML = myForm.gradutionYear.value
  cell5.innerHTML = myForm.email.value
  cell6.innerHTML = myForm.password.value

  p = document.createElement("p")
  p.innerHTML = myForm.address.value
  cell7.appendChild(p)
  cell8.innerHTML = `<div class="d-flex"><div><button type="button" class="button buttonEdit" style="--clr:#0000FF" onclick="editButton(${dataId},this)"><span>Edit</span><i></i></button></div><div><button type="button" class="button buttonDelete ms-1" style="--clr:#FF0000" onclick="deleteButton(this)"><span>Delete</span><i></i></button></div></div>`

}

// submit function
function onSubmit() {

  document.myForm.fName.setAttribute("required", "true")
  document.myForm.lName.setAttribute("required", "true")
  document.myForm.dateOfBirth.setAttribute("required", "true")
  document.myForm.gradutionYear.setAttribute("required", "true")
  document.myForm.email.setAttribute("required", "true")
  document.myForm.password.setAttribute("required", "true")
  document.myForm.address.setAttribute("required", "true")

  for (rows of mainDiv.childNodes) {
    rows.childNodes[0].childNodes[1].setAttribute("required", "true")
    rows.childNodes[1].childNodes[1].setAttribute("required", "true")
    rows.childNodes[2].childNodes[1].setAttribute("required", "true")
    rows.childNodes[3].childNodes[1].setAttribute("required", "true")
    rows.childNodes[4].childNodes[1].setAttribute("required", "true")
    rows.childNodes[5].childNodes[1].setAttribute("required", "true")
  }

  arrResult = [];

  // if (validateform()) {

    let fName = document.myForm.fName.value
    let lName = document.myForm.lName.value
    let dateOfBirth = new Date(document.myForm.dateOfBirth.value)
    let gradutionYear = document.myForm.gradutionYear.value
    let email = document.myForm.email.value
    let password = document.myForm.password.value
    let address = document.myForm.address.value

    let data = {
      "First Name": fName,
      "Last  Name": lName,
      "Date of Birth": dateOfBirth.toDateString(),
      "Gradution Year": gradutionYear,
      "Email": email,
      "Password": password,
      "Address": address,
      "Education": arrResult,
      "id": dataId
    }

    let dBlock = document.getElementById("tableShow")
    dBlock.removeAttribute("class", "d-none")
    output(data.id)

    // document.getElementById("formReset").reset()


    document.myForm.fName.removeAttribute("required", "true")
    document.myForm.lName.removeAttribute("required", "true")
    document.myForm.dateOfBirth.removeAttribute("required", "true")
    document.myForm.gradutionYear.removeAttribute("required", "true")
    document.myForm.email.removeAttribute("required", "true")
    document.myForm.password.removeAttribute("required", "true")
    document.myForm.address.removeAttribute("required", "true")

    for (rows of mainDiv.childNodes) {
      rows.childNodes[0].childNodes[1].removeAttribute("required", "true")
      rows.childNodes[1].childNodes[1].removeAttribute("required", "true")
      rows.childNodes[2].childNodes[1].removeAttribute("required", "true")
      rows.childNodes[3].childNodes[1].removeAttribute("required", "true")
      rows.childNodes[4].childNodes[1].removeAttribute("required", "true")
      rows.childNodes[5].childNodes[1].removeAttribute("required", "true")
    }


    dataId++

    for (rows of mainDiv.childNodes) {
      rowData = {
        "degree": rows.childNodes[0].childNodes[1].value,
        "college": rows.childNodes[1].childNodes[1].value,
        "Start Date": (new Date(rows.childNodes[2].childNodes[1].value)).toDateString(),
        "Pass Out Year": (new Date(rows.childNodes[3].childNodes[1].value)).toDateString(),
        "Percentage (%)": rows.childNodes[4].childNodes[1].value,
        "Backlog": rows.childNodes[5].childNodes[1].value,
      }
      arrResult.push(rowData)
    }
  // }
}

// year picker calendar
$('#yearPicker0').calendar({
  type: 'year'
});


// edit button
function editButton(dataId, edit) {
  // alert("id" + dataId)
  edit.paren.setAttribute("class", "d-none")
  edit.parentElement.parentElement.children[1].setAttribute("class", "d-none")
  edit.parentElement.parentElement.innerHTML += `<div><button type="button" class="button buttonEdit" style="--clr:#0000FF" onclick="saveButton(this)"><span>Save</span><i></i></button></div>`

}

// delete button
// function deleteButton(deleteROw) {
  // deleteROw.parentElement.parentElement.parentElement.parentElement.remove()
// }

function saveButton(save) {
  save.parentElement.parentElement.childNodes[0].removeAttribute("class", "d-none")
  save.parentElement.parentElement.childNodes[1].removeAttribute("class", "d-none")
  save.parentElement.remove()

}
