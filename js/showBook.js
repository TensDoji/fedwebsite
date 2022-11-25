window.onload = function () {
  fetch("/book/getall")
    .then((response) => response.text())
    .then((data) => GetAllBooks(data));
};

async function GetAllBooks(data) {
  const books = JSON.parse(data);
  books.forEach((book) => {
    var megaContainer = document.getElementById("books");

    var container = document.createElement("a");
    container.className = "swiper-slide";
    megaContainer.appendChild(container);

    var imgdiv = document.createElement("div");
    imgdiv.className = "image";
    container.appendChild(imgdiv);

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var image = document.createElement("img");
    image.setAttribute("src", book.Image);
    image.onload = function () {
      var imgWidth = image.width;
      var imgHeight = image.height;
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
    };
    imgdiv.appendChild(image);

    var div1 = document.createElement("div");
    div1.className = "content";
    container.appendChild(div1);

    var h3 = document.createElement("h3");
    h3.innerHTML = book.Name;
    div1.appendChild(h3);

    var div3 = document.createElement("div");
    div3.className = "amount";
    div3.innerHTML = book.Amount + " pcs";
    div1.appendChild(div3);

    var div2 = document.createElement("div");
    div2.className = "price";
    div2.innerHTML = "Nu. " + book.Price;
    div1.appendChild(div2);
  });
}
