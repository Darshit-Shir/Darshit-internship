document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#table', {
        ajax: function (d, cb) {
            fetch('../data/data.txt')
                .then(response => response.json())
                .then(data => cb(data));
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'DOB' },
            { data: 'graduationYear' },
            { data: 'email' },
            { data: 'address' }
        ],
    });
});

function validation() {
    fName = document.getElementById("fName")
    lName = document.getElementById("lName")
    dateOfBirth = document.getElementById("dateOfBirth")
    graduationYear = document.getElementById("graduationYear")
    email = document.getElementById("email")
    address = document.getElementById("address")
    
    if (fName.value == "" || lName.value == "" || dateOfBirth.value == "" || graduationYear.value == "" || email.value == "" || address.value == "") {
        return false;
    }
    else {
        return true;
    }

}

let id = 101
function submitBtn() {
    validation()

    document.getElementById("fName").setAttribute("required", "true")
    document.getElementById("lName").setAttribute("required", "true")
    document.getElementById("dateOfBirth").setAttribute("required", "true")
    document.getElementById("graduationYear").setAttribute("required", "true")
    document.getElementById("email").setAttribute("required", "true")
    document.getElementById("address").setAttribute("required", "true")

    let array = []
    let fName = document.getElementById("fName").value
    let lName = document.getElementById("lName").value
    let dateOfBirth = document.getElementById("dateOfBirth").value
    let graduationYear = document.getElementById("graduationYear").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value

    let data = {
        "First_Name": fName,
        "Last_Name": lName,
        "Date_Of_Birth": dateOfBirth,
        "Graduation_Year": graduationYear,
        "Email": email,
        "Address": address
    }
    array.push(data)
    if (validation()) {
        $(document).ready(function () {
            var t = $('#table').DataTable();

            t.row.add({
                "id": id,
                "name": data.First_Name + " " + data.Last_Name,
                "DOB": data.Date_Of_Birth,
                "graduationYear": data.Graduation_Year,
                "email": data.Email,
                "address": data.Address
            }).draw(false);
            id++
            $("#myModal").modal("hide");
        });
        document.getElementById("fName").removeAttribute("required", "true")
        document.getElementById("lName").removeAttribute("required", "true")
        document.getElementById("dateOfBirth").removeAttribute("required", "true")
        document.getElementById("graduationYear").removeAttribute("required", "true")
        document.getElementById("email").removeAttribute("required", "true")
        document.getElementById("address").removeAttribute("required", "true")
        form.reset()
    }
}

function closeBtn() {
    form.reset()
}
