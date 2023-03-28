// /* Formatting function for row details - modify as you need */
// function format(d) {
//     // `d` is the original data object for the row
//     // for ( of )
//     return (
//         '<h4>Education</h4>'+
//         '<table class="table table-striped" id="education">' +
//         '<tr>' +
//         '<th>Education Id</th>'+
//         '<th>Degree</th>' +
//         '<th>College</th>' +
//         '<th>Start Date</th>' +
//         '<th>Pass Out Year</th>' +
//         '<th>Backlog</th>' +
//         '</tr>'+
//         '<tr>' +
//         '<td>'+
//         '<td>'+
//         d.educationId +
//         '</td>' +
//         d.degree +
//         '</td>' +
//         '<td>'+
//         d.college +
//         '</td>' +
//         '<td>'+
//         d.start_date +
//         '</td>' +
//         '<td>'+
//         d.pass_out_year +
//         '</td>' +
//         '<td>'+
//         d.backlog +
//         '</td>' +
//         '</tr>' +
//         '</table>'
//     );
// }
 
// $(document).ready(function () {
//     var education = $('#education').DataTable({
//         ajax: '../data/data5.json',
//         columns: [
            
//             { data: 'educationId' },
//             { data: 'degree' },
//             { data: 'college' },
//             { data: 'startDate' },
//             { data: 'passOutYear' },
//             { data: 'backlog' },
//         ],
//         order: [[1, 'asc']],
//     });
 
//     // Add event listener for opening and closing details
//     $('#table tbody').on('click', 'td.dt-control', function () {
//         var tr = $(this).closest('tr');
//         var row = table.row(tr);
 
//         if (row.child.isShown()) {
//             // This row is already open - close it
//             row.child.hide();
//             tr.removeClass('shown');
//         } else {
//             // Open this row
//             row.child(format(row.data())).show();
//             tr.addClass('shown');
//         }
//     });
// });