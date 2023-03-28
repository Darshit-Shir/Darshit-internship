
// function JSalert() {
    // swal({
    //     title: "Your account will be deleted permanently!",
    //     text: "Are you sure to proceed?",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Remove My Account!",
    //     cancelButtonText: "I am not sure!",
    //     closeOnConfirm: false,
    //     closeOnCancel: false
    // },
    //     function (isConfirm) {
    //         if (isConfirm) {
    //             swal("Row Deleted Successfully!", "success");
    //         }
    //         else {
    //             swal("Hurray", "Row is not Deleted", "error");
    //         }
    //     });
// }



// delete row function
// $(document).ready(function () {
//     var table = $('#table').DataTable();

//     $('#table tbody').on('click', '#deleteRow', function () {

//         swal({
//             title: "Your account will be deleted permanently!",
//             text: "Are you sure to proceed?",
//             type: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#DD6B55",
//             confirmButtonText: "Remove My Account!",
//             cancelButtonText: "I am not sure!",
//             closeOnConfirm: false,
//             closeOnCancel: false
//         },
//             function (isConfirm) {
//                 if (isConfirm) {
//                     // swal("Row Deleted Successfully!", "success");
//                 }
//                 else {
//                     swal("Hurray", "Row is not Deleted", "error");
//                 }
//             });


//         table
//             .row($(this).parents('tr'))
//             .remove()
//             .draw();
//     });
// });



// swal({
//     title: "Are you sure?",
//     text: "You will not be able to recover this imaginary file!",
//     type: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#DD6B55",
//     confirmButtonText: "Yes, delete it!",
//     closeOnConfirm: false
// },
//     function () {
//         swal("Deleted!", "Your imaginary file has been deleted.", "success");
//     });