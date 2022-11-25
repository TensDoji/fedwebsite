window.onload = function () {
  fetch("/user/getall")
    .then((response) => response.text())
    .then((data) => displayUser(data));
};

async function displayUser(data) {
  const users = JSON.parse(data);
  const adminName = document.getElementById("adminName");
  adminName.innerHTML = users[0].Name;

  users.forEach((user) => {
    var table = document.getElementById("myTable");

    var row = table.insertRow();

    var td = [];

    for (i = 0; i < table.rows[0].cells.length; i++) {
      td[i] = row.insertCell(i);
    }

    td[0].innerHTML = user.Name;
    td[1].innerHTML = user.Email;
    td[2].innerHTML = user.Password;
    td[3].innerHTML =
      '<input type = "button" onclick="DeleteUser(this)" value="Delete" id="buttonDelete">';
  });
}

var selectedRow = null;

const DeleteUser = async (r) => {
  if (confirm("Are You sure you want to DELETE this?")) {
    selectedRow = r.parentElement.parentElement;
    email = selectedRow.cells[1].innerHTML;

    fetch("/user/delete/" + email, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    var rowIndex = selectedRow.rowIndex;
    if (rowIndex > 0) {
      document.getElementById("myTable").deleteRow(rowIndex);
    }
    selectedRow = null;
  }
};
