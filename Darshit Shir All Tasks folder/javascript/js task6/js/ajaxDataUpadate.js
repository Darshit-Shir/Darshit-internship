// import { exists as _exists, readFile, writeFile as _writeFile } from './script/fs';




// let fName = document.getElementById("fName").value
// let lName = document.getElementById("lName").value
// let dateOfBirth = document.getElementById("dateOfBirth").value
// let graduationYear = document.getElementById("graduationYear").value
// let email = document.getElementById("email").value
// let address = document.getElementById("address").value
// let mainDiv = document.getElementById("mainDiv")




// let data = {
//     "First_Name": fName,
//     "Last_Name": lName,
//     "Date_Of_Birth": dateOfBirth,
//     "Graduation_Year": graduationYear,
//     "Email": email,
//     "Address": address
// }

// let obj = {
//     data: []
    
// };

// _exists('data5.json', function (exists) {

//     if (exists) {

//         console.log("yes file exists");

//         readFile('data5.json', function readFileCallback(err, data) {

//             if (err) {
//                 console.log(err);
//             } else {
//                 obj = JSON.parse(data);

//                 for (i = 0; i < data.length; i++) {
//                     obj.data.push({
//                         "id": id,
//                         "name": data.First_Name + " " + data.Last_Name,
//                         "dob": new Date(data.Date_Of_Birth).toDateString(),
//                         "graduationYear": (data.Graduation_Year).slice(0, 4),
//                         "email": data.Email,
//                         "address": data.Address,
//                         "action": "<button class='btn btn-secondary' onclick='editBtn(this)'>Edit</button><button class='btn btn-danger ms-1' onclick='deleteBtn(this)'>Delete</button>"
//                     });
//                 }

//                 let json = JSON.stringify(obj);
//                 _writeFile('data5.json', json);
//             }
//         });
//     } else {

//         console.log("file not exists");

//         for (i = 0; i < data.length; i++) {
//             obj.data.push({
//                 "id": id,
//                 "name": data.First_Name + " " + data.Last_Name,
//                 "dob": new Date(data.Date_Of_Birth).toDateString(),
//                 "graduationYear": (data.Graduation_Year).slice(0, 4),
//                 "email": data.Email,
//                 "address": data.Address,
//                 "action": "<button class='btn btn-secondary' onclick='editBtn(this)'>Edit</button><button class='btn btn-danger ms-1' onclick='deleteBtn(this)'>Delete</button>"
//             });
//         }

//         let json = JSON.stringify(obj);
//         _writeFile('data5.json', json);
//     }
// });