const uploadForm = document.getElementById("uploadForm");
var input = document.getElementById("bookImage");

input.addEventListener("change", handleFiles, false);

function handleFiles(e) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  var img = new Image();

  img.onload = function () {
    var imgWidth = img.width;
    var imgHeight = img.height;
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

    var base64 = canvas.toDataURL();
    document.getElementById("urlholder").value = base64;
  };

  img.src = URL.createObjectURL(e.target.files[0]);
}

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});

async function addBook() {
  console.log(document.getElementById("urlholder").value);
  var _data = {
    isbn: parseInt(document.getElementById("ISBN").value),
    name: document.getElementById("bookTitle").value,
    description: document.getElementById("bookDesc").value,
    amount: parseInt(document.getElementById("amount").value),
    price: parseInt(document.getElementById("price").value),
    image: document.getElementById("urlholder").value,
    phoneno: parseInt(document.getElementById("phoneNo").value),
  };

  console.log(_data);

  fetch("/book/add/", {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset = UTF-8" },
  });

  resetForm();
}

function resetForm() {
  document.getElementById("ISBN").value = "";
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookDesc").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
  document.getElementById("urlholder").value = "";
  document.getElementById("phoneNo").value = "";
}
