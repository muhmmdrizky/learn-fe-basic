// membuat elemen HTML
const newElement = document.createElement("p");

// menambahkan teks
// newElement.innerText = "Hello, selamat belajar!";

// menambah elemen HTML di dalam teks
newElement.innerHTML = "<b>Haiii</b>";

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200/300");

console.log(newImg);
