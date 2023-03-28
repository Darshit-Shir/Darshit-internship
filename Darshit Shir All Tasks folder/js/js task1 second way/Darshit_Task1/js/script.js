idcounter = 1;
counter = 0
let isDefault;
arrResult = [];
let table = document.getElementById("table");
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

  let isBreak = true;
  let fName = document.myForm.fName.value
  let lName = document.myForm.lName.value
  let dateOfBirth = document.myForm.dateOfBirth.value
  let gradutionYear = document.myForm.gradutionYear.value
  let email = document.myForm.email.value
  let password = document.myForm.password.value
  let address = document.myForm.address.value
  switch (true) {
    case (fName == null || fName == ""):
      alert("Please enter your first name")
      break

    // case (lName == null || lName == ""):
    //   alert("Please enter your last name")
    //   break

    // case (dateOfBirth == null || dateOfBirth == ""):
    //   alert("Please give your date of birth")
    //   break

    // case (gradutionYear == null || gradutionYear == ""):
    //   alert("Please enter your gradution year")
    //   break

    // case (email == null || email == ""):
    //   alert("Please enter valid Email")
    //   break

    // case (password.length < 8):
    //   alert("Password must be at least 8 characters long.")
    //   break

    // case (address == null || address == ""):
    //   alert("Please enter your address")
    //   break

    default:

       for (i = 0; i < table.rows.length-1; i++) {
       
        switch (true) {
          case table.childNodes[i].childNodes[0].childNodes[0].value == "":
            alert("Please enter your degree")
            break

          // case table.childNodes[i].childNodes[1].childNodes[0].value=="":
          //   alert("Please enter your college")
          //   break

          // case table.childNodes[i].childNodes[2].childNodes[0].value=="":
          //   alert("Please enter your Start Date")
          //   break

          // case table.childNodes[i].childNodes[3].childNodes[0].value=="":
          //   alert("Please enter your Pass Out Year")
          //   break

          // case table.childNodes[i].childNodes[4].childNodes[0].value=="":
          //   alert("Please enter your Percentage")
          //   break

          // case table.childNodes[i].childNodes[5].childNodes[0].value=="":
          //   alert("Please enter your Backlog")
          //   break

          default:
            isBreak = false;
        }
        if (isBreak){
          break
        }
       
      }
  }
  console.log(isBreak);
  if (!isBreak){
    return true
  }
  else {
    return false
  }
}

function onSubmit() {
  console.clear()
  arrResult = [];

  let fName = document.myForm.fName.value
  let lName = document.myForm.lName.value
  let dateOfBirth = document.myForm.dateOfBirth.value
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
    "Address": address
  }

  // console.log('ISvALIDATED' + validateform());
  if (validateform()) {
    console.log(data)
    for (i = 0; i < counter; i++) {
      rowData = {
        "degree": table.childNodes[i].childNodes[0].childNodes[0].value,
        "college": table.childNodes[i].childNodes[1].childNodes[0].value,
        "Start Date": table.childNodes[i].childNodes[2].childNodes[0].value,
        "Pass Out Year": table.childNodes[i].childNodes[3].childNodes[0].value,
        "Percentage (%)": table.childNodes[i].childNodes[4].childNodes[0].value,
        "Backlog": table.childNodes[i].childNodes[5].childNodes[0].value,
      }
      arrResult.push(rowData)
    }

    for (result of arrResult) {
      console.log(result);
    }
  }

}

// year picker calender
$('#yearPicker0').calendar({
  type: 'year'
});


