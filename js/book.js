window.onload = function () {
  fetch("/book/getall")
    .then((response) => response.text())
    .then((data) => displayBook(data));
};

async function displayBook(data) {
  const books = JSON.parse(data);
  const adminName = document.getElementById("adminName");

  books.forEach((book) => {
    var table = document.getElementById("myTable");

    var row = table.insertRow();

    var td = [];

    for (i = 0; i < table.rows[0].cells.length; i++) {
      td[i] = row.insertCell(i);
    }

    td[0].innerHTML = book.ISBN;
    td[1].innerHTML = book.Name;
    td[2].innerHTML = book.PhoneNo;
    td[3].innerHTML =
      '<input type = "button" onclick="DeleteBook(this)" value="Delete" id="buttonDelete">';
  });
}

var selectedRow = null;

const DeleteBook = async (r) => {
  if (confirm("Are You sure you want to DELETE this?")) {
    selectedRow = r.parentElement.parentElement;
    bookName = selectedRow.cells[1].innerHTML;

    fetch("/book/delete/" + bookName, {
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
