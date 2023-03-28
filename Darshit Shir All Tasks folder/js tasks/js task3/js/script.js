idcounter = 1
counter = 0
arrResult = [];
var isDefault;
var table = document.getElementById("table")
var fName = document.getElementById("fname")
var lName = document.getElementById("lName")
var dateOfBirth = document.getElementById("dateOfBirth")
var gradutionYear = document.getElementById("gradutionYear")
var email = document.getElementById("email")
var password = document.getElementById("password")
var address = document.getElementById("address")


for (i = 0; i < 2; i++) {
  addRow(true)
}

// add row function
function addRow(isDefault) {
  counter++;
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
  degree.setAttribute("id", "degree" + idcounter)
  degree.setAttribute("placeholder", "Degree")
  degree.setAttribute("pattern", "[a-zA-Z]+")
  cell1.appendChild(degree)

  let college = document.createElement("input")
  college.setAttribute("type", "text")
  college.classList = "form-control"
  college.setAttribute("id", "college" + idcounter)
  college.setAttribute("placeholder", "College")
  college.setAttribute("pattern", "[a-zA-Z]+")
  cell2.appendChild(college)

  let startDate = document.createElement("input")
  startDate.setAttribute("type", "month")
  startDate.setAttribute("id", "startDate" + idcounter)
  startDate.classList = "form-control"
  cell3.appendChild(startDate)

  let passOutYear = document.createElement("input")
  passOutYear.setAttribute("type", "month")
  passOutYear.setAttribute("id", "passOutYear" + idcounter)
  passOutYear.classList = "form-control"
  cell4.appendChild(passOutYear)

  let percentage = document.createElement("input")
  percentage.setAttribute("type", "text")
  percentage.setAttribute("id", "percentage" + idcounter)
  percentage.setAttribute("placeholder", "Percentage")
  percentage.setAttribute("pattern", "[0-9]|[1-9][0-9]|[1][0][0]")
  percentage.classList = "form-control"
  cell5.appendChild(percentage)

  let backlog = document.createElement("input")
  backlog.setAttribute("type", "text")
  backlog.setAttribute("id", "backlog" + idcounter)
  backlog.setAttribute("placeholder", "Backlog")
  backlog.setAttribute("pattern", "[0-9]")
  backlog.classList = "form-control"
  cell6.appendChild(backlog)

  // remove button
  let btn = document.createElement("button")
  let span = document.createElement("span")
  let i = document.createElement("i")
  btn.setAttribute("onclick", "removeRow(this)")
  btn.classList = "button buttonRemove"

  if (isDefault) {
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
  counter--;
}

// validation function
function validateform() {

  let fName = document.myForm.fName.value
  let lName = document.myForm.lName.value
  let dateOfBirth = document.myForm.dateOfBirth.value
  let gradutionYear = document.myForm.gradutionYear.value
  let email = document.myForm.email.value
  let password = document.myForm.password.value

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var text = /^[A-Za-z]+$/
  var number = /^[0-9]+$/

  // switch case for validate form
  switch (true) {
    case ((!fName.match(text))):
      document.myForm.fName.value = ""
      document.myForm.fName.setAttribute("placeholder", "text only")
      break

    case ((!lName.match(text))):
      document.myForm.lName.value = ""
      document.myForm.lName.setAttribute("placeholder", "text only")
      break

    case (gradutionYear < dateOfBirth):
      document.myForm.gradutionYear.focus()
      alert("gradution year should be greater than date of birth")
      break

    case (!(email.match(mailFormat))):
      document.myForm.email.value = ""
      document.myForm.email.setAttribute("placeholder", "example : abc@gmail.com")
      break

    case (password.length < 8):
      document.myForm.password.value = ""
      document.myForm.password.setAttribute("placeholder", "password should be at least 8 characters")
      break

    default:

      // for loop to get input value of education field
      for (tr of table.rows) {

        shouldBreak = true

        switch (true) {
          case !(tr.childNodes[0].childNodes[0].value.match(text)):
            tr.childNodes[0].childNodes[0].value = ""
            tr.childNodes[0].childNodes[0].setAttribute("placeholder", "text only")
            break

          case !(tr.childNodes[1].childNodes[0].value.match(text)):
            tr.childNodes[1].childNodes[0].value = ""
            tr.childNodes[1].childNodes[0].setAttribute("placeholder", "text only")            
            break

          case (tr.childNodes[3].childNodes[0].value == ""):
            break

          case tr.childNodes[3].childNodes[0].value <= tr.childNodes[2].childNodes[0].value:
            tr.childNodes[3].childNodes[0].focus()
            alert("Pass out year must be greater than start date")
            break

          case !(tr.childNodes[4].childNodes[0].value.match(number)):
            tr.childNodes[4].childNodes[0].value = ""
            tr.childNodes[4].childNodes[0].setAttribute("placeholder", "No. only")
            break

          case !(tr.childNodes[5].childNodes[0].value.match(number)):
            tr.childNodes[5].childNodes[0].value = ""
            tr.childNodes[5].childNodes[0].setAttribute("placeholder", "No. only")
            break

          default:
            shouldBreak = false;
        }
        if (shouldBreak) {
          break
        }
      }
      if (!shouldBreak) {
        return true
      }
  }

}

function onSubmit() {
  arrResult = [];

  let fName = document.myForm.fName.value
  let lName = document.myForm.lName.value
  let dateOfBirth = new Date(document.myForm.dateOfBirth.value)
  let gradutionYear = document.myForm.gradutionYear.value
  let email = document.myForm.email.value
  let password = document.myForm.password.value
  let address = document.myForm.address.value

  document.myForm.fName.setAttribute("required", "true")
  document.myForm.lName.setAttribute("required", "true")
  document.myForm.dateOfBirth.setAttribute("required", "true")
  document.myForm.gradutionYear.setAttribute("required", "true")
  document.myForm.email.setAttribute("required", "true")
  document.myForm.password.setAttribute("required", "true")
  document.myForm.address.setAttribute("required", "true")

  for (tr of table.rows) {
      tr.childNodes[0].childNodes[0].setAttribute("required", "true")
      tr.childNodes[1].childNodes[0].setAttribute("required", "true")
      tr.childNodes[2].childNodes[0].setAttribute("required", "true")
      tr.childNodes[3].childNodes[0].setAttribute("required", "true")
      tr.childNodes[4].childNodes[0].setAttribute("required", "true")
      tr.childNodes[5].childNodes[0].setAttribute("required", "true")
    }

    console.clear()


  let data = {
    "First Name": fName,
    "Last  Name": lName,
    "Date of Birth": dateOfBirth,
    "Gradution Year": gradutionYear,
    "Email": email,
    "Password": password,
    "Address": address,
    "Education" : arrResult
  }

  if (validateform()) {
    console.log(data)

    for (tr of table.rows) {
      rowData = {
        "degree": tr.childNodes[0].childNodes[0].value,
        "college": tr.childNodes[1].childNodes[0].value,
        "Start Date": new Date(tr.childNodes[2].childNodes[0].value),
        "Pass Out Year": new Date(tr.childNodes[3].childNodes[0].value),
        "Percentage (%)": tr.childNodes[4].childNodes[0].value,
        "Backlog": tr.childNodes[5].childNodes[0].value,
      }
      arrResult.push(rowData)
    }
  }

}

// year picker calendar
$('#yearPicker0').calendar({
  type: 'year'
});


