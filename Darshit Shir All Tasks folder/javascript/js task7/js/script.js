document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#table', {
        ajax: function (d, cb) {
            fetch('http://192.168.3.51:1100/api/getAllUser')
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
            { data: 'firstName' },
            { data: 'lastName' },
            {
                data: null,
                mRender: (o) => {
                return (new Date(o.dateOfBirth).getMonth() + 1).toString().padStart(2, "0") + '-' + new Date(o.dateOfBirth).getDate().toString().padStart(2, "0") + '-' + new Date(o.dateOfBirth).getFullYear().toString()
                }
            },
            { data: 'contactNumber' },
            { data: 'email' },
            { data: 'address' },
            {
                "mData": null,
                "bSortable": false,
                "mRender": function (o) { return '<div class="d-flex"><button class="btn btn-secondary" onclick="editBtn(this)" data-bs-toggle="modal" data-bs-target="#myModal" id= edit' + o._id + '>' + '<i class="fa-solid fa-pen-to-square"></i>' + 
                '</button>' + '<button class="btn btn-danger ms-1" onclick="deleteBtn(this)" id= delete' + o._id + '>' + '<i class="fa-sharp fa-solid fa-trash"></i>' + '</button></div>'; }
            }
        ],
    });
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


// show education data on plus button
function format(edu) {
    educationData = [
        '<h4>Education</h4>' +
        '<table class="table table-striped" id="education">' +
        '<tr>' +
        '<th>Degree</th>' +
        '<th>Institute Name</th>' +
        '<th>Start Date</th>' +
        '<th>Pass Out Year</th>' +
        '<th>PR(%)</th>' +
        '<th>Backlogs</th>' +
        '</tr>'
    ]

    for (i = 0; i < edu.Education.length; i++) {
        a = [
            '<tr>' +
            '<td>' +
            edu.Education[i].degree +
            '</td>' +
            '<td>' +
            edu.Education[i].instituteName +
            '</td>' +
            '<td>' +
            (new Date(edu.Education[i].startDate).getMonth() + 1).toString().padStart(2, "0") + '-' + new Date(edu.Education[i].startDate).getDate().toString().padStart(2, "0") + '-' + new Date(edu.Education[i].startDate).getFullYear().toString() +
            '</td>' +
            '<td>' +
            edu.Education[i].passoutYear +
            '</td>' +
            '<td>' +
            edu.Education[i].percentage +
            '</td>' +
            '<td>' +
            edu.Education[i].backlogs +
            '</td>' +
            '</tr>'
        ]
        educationData += a
    }
    return (
        educationData
    );
}

let defaultcount = 0
var isDefault
var btnClick = 'default'
var objID
var mainDiv = document.getElementById("mainDiv")

function addBtnTable() {
    btnClick = "addClick"
}

// for loop for default two rows of education field
for (i = 0; i < 2; i++) {
    addRowEducaion(true)
}

// add row function
function addRowEducaion(isDefault) {
    let educationDiv = document.createElement("div")
    educationDiv.classList = "row mt-2 small-screen-border pb-2"

    // degree 
    let degreeDiv = document.createElement("div")
    degreeDiv.classList = "col-lg-2"
    let degreeLabel = document.createElement("label")
    degreeLabel.innerHTML = "Degree"
    degreeLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
    let degree = document.createElement("input")
    degree.setAttribute("type", "text")
    degree.classList = "form-control mt-2"
    degree.setAttribute("placeholder", "Degree")
    degreeDiv.appendChild(degreeLabel)
    degreeDiv.appendChild(degree)

    // institute
    let instituteDiv = document.createElement("div")
    instituteDiv.classList = "col-lg-2"
    let instituteLabel = document.createElement("label")
    instituteLabel.innerHTML = "institute"
    instituteLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
    let institute = document.createElement("input")
    institute.setAttribute("type", "text")
    institute.classList = "form-control mt-2"
    institute.setAttribute("placeholder", "institute")
    instituteDiv.appendChild(instituteLabel)
    instituteDiv.appendChild(institute)

    // start date
    let startDateDiv = document.createElement("div")
    startDateDiv.classList = "col-lg-2"
    let startDateLabel = document.createElement("label")
    startDateLabel.innerHTML = "Start Date"
    startDateLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
    let startDate = document.createElement("input")
    startDate.setAttribute("type", "date")
    startDate.classList = "form-control mt-2"
    startDateDiv.appendChild(startDateLabel)
    startDateDiv.appendChild(startDate)

    // pass out year
    let passOutYearDiv = document.createElement("div")
    passOutYearDiv.classList = "col-lg-2"
    let passOutYearLabel = document.createElement("label")
    passOutYearLabel.innerHTML = "Pass Out Year"
    passOutYearLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
    let passOutYear = document.createElement("input")
    passOutYear.setAttribute("type", "month")
    passOutYear.classList = "form-control mt-2"
    passOutYearDiv.appendChild(passOutYearLabel)
    passOutYearDiv.appendChild(passOutYear)

    // percentage
    let percentageDiv = document.createElement("div")
    percentageDiv.classList = "col-lg-1"
    let percentageLabel = document.createElement("label")
    percentageLabel.innerHTML = "Percentage"
    percentageLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
    let percentage = document.createElement("input")
    percentage.setAttribute("type", "text")
    percentage.setAttribute("placeholder", "00")
    percentage.setAttribute("pattern", "(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)")
    percentage.classList = "form-control mt-2"
    percentageDiv.appendChild(percentageLabel)
    percentageDiv.appendChild(percentage)

    // backlogs
    let backlogDiv = document.createElement("div")
    backlogDiv.classList = "col-lg-1"
    let backlogLabel = document.createElement("label")
    backlogLabel.innerHTML = "Backlog"
    backlogLabel.classList = "form-label fw-bold fs-5 mt-2 d-none small-screen-label"
    let backlog = document.createElement("input")
    backlog.setAttribute("type", "text")
    backlog.setAttribute("placeholder", "0")
    backlog.setAttribute("pattern", "(?:[0-9]|[0-9][1-5]|10)")
    backlog.classList = "form-control mt-2"
    backlogDiv.appendChild(backlogLabel)
    backlogDiv.appendChild(backlog)

    // remove button
    let removeButtonDiv = document.createElement("div")
    removeButtonDiv.classList = "col-lg-1"
    let btn = document.createElement("button")
    btn.setAttribute("onclick", "removeRow(this)")
    btn.classList = "btn btn-danger mt-2 px-4 small-screen-margin"

    // console.log(" sda " +btnClick);

    if (isDefault && btnClick == 'addClick') {
        removeButtonDiv.classList.add("d-none")
        btn.setAttribute("disabled", "true")
        btn.style = "cursor:context-menu"
    }
    btn.innerHTML = "REMOVE"
    removeButtonDiv.appendChild(btn)


    educationDiv.appendChild(degreeDiv)
    educationDiv.appendChild(instituteDiv)
    educationDiv.appendChild(startDateDiv)
    educationDiv.appendChild(passOutYearDiv)
    educationDiv.appendChild(percentageDiv)
    educationDiv.appendChild(backlogDiv)
    educationDiv.appendChild(removeButtonDiv)

    mainDiv.appendChild(educationDiv)

    defaultcount++
    
}

// remove Row function for education feild
function removeRow(remove) {
    if(defaultcount<=2){
        alert("There must be at least two rows")
    }
    else {
        remove.parentElement.parentElement.remove();
        defaultcount--
    }
}

// validation function
function validation() {
    let fName = document.getElementById("fName")
    let lName = document.getElementById("lName")
    let dateOfBirth = document.getElementById("dateOfBirth")
    let contactNo = document.getElementById("contactNo")
    let email = document.getElementById("email")
    let address = document.getElementById("address")
    const text = /^[A-Za-z]+$/
    const contact = /^[1-9]{1}[0-9]{9}$/
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const percentageFormat = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/
    const backlogFormat = /^(?:[0-9]|[0-9][1-5]|10)$/

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

        case (contactNo.value == ""):
            contactNo.focus()
            break

        case !((contactNo.value).match(contact)):
            contactNo.focus()
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

                    case rows.childNodes[4].childNodes[1].value == "":
                        rows.childNodes[4].childNodes[1].focus()
                        break

                    case !((rows.childNodes[4].childNodes[1].value).match(percentageFormat)):
                        rows.childNodes[4].childNodes[1].value = ""
                        rows.childNodes[4].childNodes[1].focus()
                        break

                    case rows.childNodes[5].childNodes[1].value == "":
                        rows.childNodes[5].childNodes[1].focus()
                        break

                    case !((rows.childNodes[5].childNodes[1].value).match(backlogFormat)):
                        rows.childNodes[5].childNodes[1].value = ""
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
    $("#fName").attr("required", "true")
    $("#lName").attr("required", "true")
    $("#dateOfBirth").attr("required", "true")
    $("#contactNo").attr("required", "true")
    $("#email").attr("required", "true")
    $("#address").attr("required", "true")

    for (rows of mainDiv.childNodes) {
        rows.childNodes[0].childNodes[1].setAttribute("required", "true")
        rows.childNodes[1].childNodes[1].setAttribute("required", "true")
        rows.childNodes[2].childNodes[1].setAttribute("required", "true")
        rows.childNodes[3].childNodes[1].setAttribute("required", "true")
        rows.childNodes[4].childNodes[1].setAttribute("required", "true")
        rows.childNodes[5].childNodes[1].setAttribute("required", "true")
    }

    // validation call
    if (validation()) {
        let eduArr = []
        if (btnClick == "addClick") {
            let fName = document.getElementById("fName").value
            let lName = document.getElementById("lName").value
            let dateOfBirth = document.getElementById("dateOfBirth").value
            let contactNo = document.getElementById("contactNo").value
            let email = document.getElementById("email").value
            let address = document.getElementById("address").value
            let data = {
                "firstName": fName,
                "lastName": lName,
                "dateOfBirth": ((new Date(dateOfBirth).getMonth() + 1).toString().padStart(2, "0") + '-' + new Date(dateOfBirth).getDate().toString().padStart(2, "0") + '-' + new Date(dateOfBirth).getFullYear().toString()),
                "contactNumber": Number(contactNo),
                "email": email,
                "address": address,
                "Education": eduArr
            }
            for (rows of mainDiv.childNodes) {
                rowData = {
                    "degree": rows.childNodes[0].childNodes[1].value,
                    "instituteName": rows.childNodes[1].childNodes[1].value,
                    "startDate": ((new Date(rows.childNodes[2].childNodes[1].value).getMonth() + 1).toString().padStart(2, "0") + '-' + new Date(rows.childNodes[2].childNodes[1].value).getDate().toString().padStart(2, "0") + '-' + new Date(rows.childNodes[2].childNodes[1].value).getFullYear().toString()),
                    "passoutYear": Number(new Date(rows.childNodes[3].childNodes[1].value).getFullYear().toString()),
                    "percentage": Number(rows.childNodes[4].childNodes[1].value),
                    "backlogs": Number(rows.childNodes[5].childNodes[1].value),
                }
                eduArr.push(rowData)
            }

            // post method
            fetch('http://192.168.3.51:1100/api/addUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            $("#myModal").modal("hide");
            $('#table').DataTable().ajax.reload()
        }

        else {
            let edu = []
            let fName = document.getElementById("fName").value
            let lName = document.getElementById("lName").value
            let dateOfBirth = document.getElementById("dateOfBirth").value
            let contactNo = document.getElementById("contactNo").value
            let email = document.getElementById("email").value
            let address = document.getElementById("address").value
            let editData = {
                "firstName": fName,
                "lastName": lName,
                "dateOfBirth": (dateOfBirth).toString(),
                "contactNumber": Number(contactNo),
                "email": email,
                "address": address,
                "Education": edu
            }
            for (rows of mainDiv.childNodes) {

                rowData = {
                    "degree": rows.childNodes[0].childNodes[1].value,
                    "instituteName": rows.childNodes[1].childNodes[1].value,
                    "startDate": rows.childNodes[2].childNodes[1].value,
                    "passoutYear": Number(new Date(rows.childNodes[3].childNodes[1].value).getFullYear().toString()),
                    "percentage": Number(rows.childNodes[4].childNodes[1].value),
                    "backlogs": Number(rows.childNodes[5].childNodes[1].value),
                }
                edu.push(rowData)
            }

            // put method
            fetch("http://192.168.3.51:1100/api/updateUser/" + objID, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
                
            })

            $("#myModal").modal("hide");
            setTimeout(() => {
                $('#table').DataTable().ajax.reload()
            }, 200);
        }

        $("#fName").removeAttr("required", "true")
        $("#lName").removeAttr("required", "true")
        $("#dateOfBirth").removeAttr("required", "true")
        $("#contactNo").removeAttr("required", "true")
        $("#email").removeAttr("required", "true")
        $("#address").removeAttr("required", "true")

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
}

// form close button
function closeBtn() {
    $("#fName").removeAttr("required", "true")
    $("#lName").removeAttr("required", "true")
    $("#dateOfBirth").removeAttr("required", "true")
    $("#contactNo").removeAttr("required", "true")
    $("#email").removeAttr("required", "true")
    $("#address").removeAttr("required", "true")

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
function deleteBtn(del) {
    if (confirm("Are you sure you want to delete?")) {
        // delete method
        fetch('http://192.168.3.51:1100/api/deleteUserbyId/' + del.id.slice(6), {

            method: 'DELETE',
        })
        setTimeout(() => {
            $('#table').DataTable().ajax.reload()
        }, 200);
    }
}

function editBtn(e) {
    defaultcount = 2
    objID = (e.id).slice(4)
    btnClick = "editClick";

    let p = fetch("http://192.168.3.51:1100/api/getUserById/" + objID)

    p.then((val) => {
        return val.json()
    }).then((objData) => {
        let object = objData.data[0];
        $("#fName").val(object.firstName)
        $("#lName").val(object.lastName)
        let dob = (new Date(object.dateOfBirth).getFullYear().toString() + '-' + (new Date(object.dateOfBirth).getMonth() + 1).toString().padStart(2, "0") + '-' + new Date(object.dateOfBirth).getDate().toString().padStart(2, "0"))
        $("#dateOfBirth").val(dob)
        $("#contactNo").val(object.contactNumber)
        $("#email").val(object.email)
        $("#address").val(object.address)

        // for loop for education fields default row
        for (k = 0; k < object.Education.length - 2; k++) {
            addRowEducaion(true)
        }

        for (i = 0; i < mainDiv.childNodes.length; i++) {
            let eduField = object.Education[i]
            let degree = eduField.degree
            let institute = eduField.instituteName
            let startDate = (new Date(eduField.startDate).getFullYear().toString() + '-' + (new Date(eduField.startDate).getMonth() + 1).toString().padStart(2, "0") + '-' + new Date(eduField.startDate).getDate().toString().padStart(2, "0"))
            let passOutYear = (eduField.passoutYear).toString() + '-' + (new Date(eduField.passoutYear).getMonth() + 1).toString().padStart(2, "0")
            let percentage = eduField.percentage
            let backlog = eduField.backlogs

            rowData = {
                "degree": mainDiv.childNodes[i].childNodes[0].childNodes[1].value = degree,
                "instituteName": mainDiv.childNodes[i].childNodes[1].childNodes[1].value = institute,
                "startDate": mainDiv.childNodes[i].childNodes[2].childNodes[1].value = startDate,
                "passoutYear": mainDiv.childNodes[i].childNodes[3].childNodes[1].value = passOutYear,
                "percentage": mainDiv.childNodes[i].childNodes[4].childNodes[1].value = percentage,
                "backlogs": mainDiv.childNodes[i].childNodes[5].childNodes[1].value = backlog,
            }
        }

    })
}