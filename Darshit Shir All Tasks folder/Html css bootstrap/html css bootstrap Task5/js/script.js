function toggle() {
  var sidebar = document.getElementById("Side_bar");
  if (sidebar.classList.contains('desktop')) {
    sidebar.classList.add("mobile");
    sidebar.classList.remove("desktop");
  }
  else {
    sidebar.classList.remove("mobile");
    sidebar.classList.add("desktop");
  }
}



function toggleTextShow(str, show) {
  let tblRow;

  if (str === "tbl1") {
    tblRow = document.getElementsByClassName("tbl1-hide");

    if(show==='show'){
      document.getElementById("tbl1-show").classList.add("d-none");
      document.getElementById("tbl1-hide").classList.remove("d-none");
    }
    else{
      document.getElementById("tbl1-hide").classList.add("d-none");
      document.getElementById("tbl1-show").classList.remove("d-none");
    }
  
  }
  else if (str === "tbl2") {
    tblRow = document.getElementsByClassName("tbl2-hide");

    if(show==='show'){
      document.getElementById("tbl2-show").classList.add("d-none");
      document.getElementById("tbl2-hide").classList.remove("d-none");
    }
    else{
      document.getElementById("tbl2-hide").classList.add("d-none");
      document.getElementById("tbl2-show").classList.remove("d-none");
    }
  }

  if (show === 'show') {
    for (const x of tblRow) {
      x.classList.remove("d-none");
    }
  }
  else {
    for (const x of tblRow) {
      x.classList.add("d-none");
    }
  }
}