document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#table', {
        ajax: function (d, cb) {
            fetch('../data/data5.json')
                .then(response => response.json())
                .then(data => cb(data));
        },
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'id' },
            { data: 'name' },
            { data: 'dob' },
            { data: 'graduationYear' },
            { data: 'email' },
            { data: 'address' },
            { data: 'action' }
        ],
    });
    // Add event listener for opening and closing details
    $('#table tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});

// adding education data on plus button
function format(edu) {
    educationData = [
        '<h4>Education</h4>' +
        '<table class="table table-striped" id="education">' +
        '<tr>' +
        '<th>Degree</th>' +
        '<th>College</th>' +
        '<th>Start Date</th>' +
        '<th>Pass Out Year</th>' +
        '<th>PR(%)</th>' +
        '<th>Backlog</th>' +
        '</tr>'
    ]

    for (i = 0; i < edu.education.length; i++) {

        a = [
            '<tr>' +
            '<td>' +
            edu.education[i].degree +
            '</td>' +
            '<td>' +
            edu.education[i].college +
            '</td>' +
            '<td>' +
            edu.education[i].startDate +
            '</td>' +
            '<td>' +
            edu.education[i].passOutYear +
            '</td>' +
            '<td>' +
            edu.education[i].percentage +
            '</td>' +
            '<td>' +
            edu.education[i].backlog +
            '</td>' +
            '</tr>'
        ]
        educationData += a
    }

    return (
        educationData
    );
}

// json education data
$(document).ready(function () {
    var education = $('#education').DataTable({
        ajax: '../data/data5.json',
        columns: [

            { data: 'education' },
            { data: 'degree' },
            { data: 'college' },
            { data: 'startDate' },
            { data: 'passOutYear' },
            { data: 'backlog' },
        ],
        order: [[1, 'asc']],
    });
});
let arrayOfJson = []
let id = 6
let idcounter = 1
let counter = 0
let arrResult = []
var isDefault
let mainDiv = document.getElementById("mainDiv")
let editcounter = 1
let addcounter = 0

for (i = 0; i < 2; i++) {
    addRowEducaion(true)
}

// add row function
function addRowEducaion(isDefault) {

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
    btn.setAttribute("onclick", "removeRow(this)")
    btn.classList = "btn btn-danger mt-2 px-4 small-screen-margin"

    if (isDefault) {
        removeButtonDiv.classList.add("d-none")
        btn.setAttribute("disabled", "true")
        btn.style = "cursor:context-menu"
    }

    btn.innerHTML = "REMOVE"
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
function validation() {
    fName = document.getElementById("fName")
    lName = document.getElementById("lName")
    dateOfBirth = document.getElementById("dateOfBirth")
    graduationYear = document.getElementById("graduationYear")
    email = document.getElementById("email")
    address = document.getElementById("address")

    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var text = /^[A-Za-z]+$/
    var percentage = /^[0-9]|[1-9][0-9]|[1][0][0]+$/
    backlog = /^[0-9]+$/

    switch (true) {
        case (fName.value == ""):
            fName.focus()
            break

        case !((fName.value).match(text)):
            fName.focus()
            break

        case !((lName.value).match(text)):
            lName.focus()
            break

        case (lName.value == ""):
            lName.focus()
            break

        case (dateOfBirth.value == ""):
            dateOfBirth.focus()
            break

        case (graduationYear.value == ""):
            graduationYear.focus()
            break

        case (email.value == ""):
            email.focus()
            break

        case (!((email.value).match(mailFormat))):
            email.value = ""
            email.focus()
            email.setAttribute("placeholder", "example : abc@gmail.com")
            break

        case (address.value == ""):
            address.focus()
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

                    case rows.childNodes[3].childNodes[1].value < rows.childNodes[2].childNodes[1].value:
                        alert("Pass Out Year should be greater than Start Date")
                        rows.childNodes[3].childNodes[1].focus()
                        break

                    case rows.childNodes[4].childNodes[1].value == "":
                        rows.childNodes[4].childNodes[1].focus()
                        break

                    case !((rows.childNodes[4].childNodes[1].value).match(percentage)):
                        rows.childNodes[4].childNodes[1].focus()
                        break

                    case rows.childNodes[5].childNodes[1].value == "":
                        rows.childNodes[5].childNodes[1].focus()
                        break

                    case !((rows.childNodes[5].childNodes[1].value).match(backlog)):
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

// submit button
function submitBtn() {
    eduArr = []
    document.getElementById("fName").setAttribute("required", "true")
    document.getElementById("lName").setAttribute("required", "true")
    document.getElementById("dateOfBirth").setAttribute("required", "true")
    document.getElementById("graduationYear").setAttribute("required", "true")
    document.getElementById("email").setAttribute("required", "true")
    document.getElementById("address").setAttribute("required", "true")

    for (rows of mainDiv.childNodes) {
        rows.childNodes[0].childNodes[1].setAttribute("required", "true")
        rows.childNodes[1].childNodes[1].setAttribute("required", "true")
        rows.childNodes[2].childNodes[1].setAttribute("required", "true")
        rows.childNodes[3].childNodes[1].setAttribute("required", "true")
        rows.childNodes[4].childNodes[1].setAttribute("required", "true")
        rows.childNodes[5].childNodes[1].setAttribute("required", "true")
    }

    let array = []
    let fName = document.getElementById("fName").value
    let lName = document.getElementById("lName").value
    let dateOfBirth = document.getElementById("dateOfBirth").value
    let graduationYear = document.getElementById("graduationYear").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let action = `<button class='btn btn-secondary' data-bs-toggle='modal' data-bs-target='#myModal' id = '${id}' onclick='editBtn(this)'>Edit</button><button class='btn btn-danger ms-1' id='deleteRow' onclick='JSalert()'>Delete</button>`
    let data = {
        "id": id,
        "name": fName + " " + lName,
        "dob": dateOfBirth,
        "graduationYear": graduationYear,
        "email": email,
        "address": address,
        "education": eduArr
    }
    arrayOfJson.push(data)


    array.push(data)
    // if (validation()) {
    $(document).ready(function () {
        var t = $('#table').DataTable();

        t.row.add({
            "id": id,
            "name": fName + " " + lName,
            "dob": new Date(dateOfBirth).toDateString(),
            "graduationYear": (graduationYear).slice(0, 4),
            "email": data.email,
            "address": data.address,
            "education": data.education,
            "action": action
        }).draw(false);
        id++
        $("#myModal").modal("hide");
    });



    for (rows of mainDiv.childNodes) {

        rowData = {
            "degree": rows.childNodes[0].childNodes[1].value,
            "college": rows.childNodes[1].childNodes[1].value,
            "startDate": (new Date(rows.childNodes[2].childNodes[1].value)).toDateString(),
            "passOutYear": (new Date(rows.childNodes[3].childNodes[1].value)).toDateString(),
            "percentage": rows.childNodes[4].childNodes[1].value,
            "backlog": rows.childNodes[5].childNodes[1].value,
        }
        eduArr.push(rowData)
    }

    document.getElementById("fName").removeAttribute("required", "true")
    document.getElementById("lName").removeAttribute("required", "true")
    document.getElementById("dateOfBirth").removeAttribute("required", "true")
    document.getElementById("graduationYear").removeAttribute("required", "true")
    document.getElementById("email").removeAttribute("required", "true")
    document.getElementById("address").removeAttribute("required", "true")

    for (rows of mainDiv.childNodes) {
        rows.childNodes[0].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[1].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[2].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[3].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[4].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[5].childNodes[1].removeAttribute("required", "true")
    }
    console.log(arrayOfJson);
    form.reset()
    // }
}

// form close button
function closeBtn() {
    document.getElementById("fName").removeAttribute("required", "true")
    document.getElementById("lName").removeAttribute("required", "true")
    document.getElementById("dateOfBirth").removeAttribute("required", "true")
    document.getElementById("graduationYear").removeAttribute("required", "true")
    document.getElementById("email").removeAttribute("required", "true")
    document.getElementById("address").removeAttribute("required", "true")

    for (rows of mainDiv.childNodes) {
        rows.childNodes[0].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[1].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[2].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[3].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[4].childNodes[1].removeAttribute("required", "true")
        rows.childNodes[5].childNodes[1].removeAttribute("required", "true")
    }
    form.reset()
    mainDiv.innerHTML = ""
    for (i = 0; i < 2; i++) {
        addRowEducaion(true)
    }
}

// delete row function
// $(document).ready(function () {
//     var table = $('#table').DataTable();

//     $('#table tbody').on('click', '#deleteRow', function () {
//         table
//             .row($(this).parents('tr'))
//             .remove()
//             .draw();
//     });
// });



// eduArr = []

function editBtn(e, isDefault) {
    let eId = Number(e.id) - 1
    // console.log(arrayOfJson[Number(e.id) - 1].education.length);
    // console.log(arrayOfJson.length);

    var name = arrayOfJson[eId].name
    var fullName = name.split(' ')
    firstName = fullName[0]
    lastName = fullName[1]
    dob = arrayOfJson[eId].dob
    gYear = arrayOfJson[eId].graduationYear
    emailid = arrayOfJson[eId].email
    adr = arrayOfJson[eId].address
    education = []
    // education.push(arrayOfJson[eId].education)
    let data = {
        "id": e.id,
        "First_Name": (fName.value = firstName),
        "Last_Name": (lName.value = lastName),
        "dob": dateOfBirth.value = dob.toLocaleString(),
        "graduationYear": graduationYear.value = gYear,
        "email": email.value = emailid,
        "address": address.value = adr,
        "education": education
    }
    
    let x = arrayOfJson[Number(e.id) - 1].education.length
    for (k = 0; k < x - 2; k++) {
        addRowEducaion(true)
    }

    // console.log(arrayOfJson[eId].education.length);
    // for (rows of mainDiv.childNodes) {
        // console.log(mainDiv.childNodes);
        // console.log(mainDiv.children);
        for (i = 0; i < mainDiv.childNodes.length; i++) {
            z = arrayOfJson[eId].education[i]
            degree = z.degree
            college = z.college
            startDate = z.startDate
            passOutYear = z.passOutYear
            percentage = z.percentage
            backlog = z.backlog
            rowData = {
                "degree":  mainDiv.childNodes[i].childNodes[0].childNodes[1].value = degree,
                "college":  mainDiv.childNodes[i].childNodes[1].childNodes[1].value = college,
                "startDate":  mainDiv.childNodes[i].childNodes[2].childNodes[1].value = startDate,
                "passOutYear":  mainDiv.childNodes[i].childNodes[3].childNodes[1].value = passOutYear,
                "percentage":  mainDiv.childNodes[i].childNodes[4].childNodes[1].value = percentage,
                "backlog":  mainDiv.childNodes[i].childNodes[5].childNodes[1].value = backlog,
            }
        console.log(rowData);
    }
}



