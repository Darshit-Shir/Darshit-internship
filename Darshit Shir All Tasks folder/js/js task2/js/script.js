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
  cell1.appendChild(degree)

  let college = document.createElement("input")
  college.setAttribute("type", "text")
  college.classList = "form-control"
  college.setAttribute("id", "college" + idcounter)

  college.setAttribute("placeholder", "College")
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
  percentage.classList = "form-control"
  cell5.appendChild(percentage)

  let backlog = document.createElement("input")
  backlog.setAttribute("type", "text")
  backlog.setAttribute("id", "backlog" + idcounter)
  backlog.setAttribute("placeholder", "Backlog")
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
  let address = document.myForm.address.value

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var text = /^[A-Za-z]+$/
  var number = /^[0-9]+$/

  // switch case for validate form
  switch (true) {
    case ((!fName.match(text))):
      document.myForm.fName.focus()
      alert("Please enter valid first name (Text only)")
      break

    case ((!lName.match(text))):
      document.myForm.lName.focus()
      alert("Please enter valid last name(Text only)")
      break

    case (dateOfBirth == ""):
      document.myForm.dateOfBirth.focus()
      alert("Please give your date of birth")
      break

    case (gradutionYear == ""):
      document.myForm.gradutionYear.focus()
      alert("Please give your gradution year")
      break

    case (!(email.match(mailFormat))):
      document.myForm.email.focus()
      alert("Please enter valid email id")
      break

    case (password.length < 8):
      document.myForm.password.focus()
      alert("Password must be at least 8 characters long.")
      break

    case (address == ""):
      document.myForm.address.focus()
      alert("Please enter your address")
      break

    default:

      // for loop to get input value of education field
      for (tr of table.rows) {

        shouldBreak = true

        switch (true) {
          case !(tr.childNodes[0].childNodes[0].value.match(text)):
            tr.childNodes[0].childNodes[0].focus()
            alert("Please enter valid degree(Text only)")
            break

          case !(tr.childNodes[1].childNodes[0].value.match(text)):
            tr.childNodes[1].childNodes[0].focus()
            alert("Please enter valid college(Text only)")
            break

          case tr.childNodes[2].childNodes[0].value == "":
            tr.childNodes[2].childNodes[0].focus()
            alert("Please enter your start date")
            break

          case tr.childNodes[3].childNodes[0].value == "":
            tr.childNodes[3].childNodes[0].focus()
            alert("Please enter your pass out year")
            break

          case tr.childNodes[3].childNodes[0].value <= tr.childNodes[2].childNodes[0].value:
            tr.childNodes[3].childNodes[0].focus()
            alert("Pass out year must be greater than start date")
            break

          case !(tr.childNodes[4].childNodes[0].value.match(number)):
            tr.childNodes[4].childNodes[0].focus()
            alert("Please enter valid percentage(In number only)")
            break

          case !(tr.childNodes[5].childNodes[0].value.match(number)):
            tr.childNodes[5].childNodes[0].focus()
            alert("Please enter valid backlog(In number only)")
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
  console.clear()
  arrResult = [];

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


