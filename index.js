import "./index.css";
import MY_IMAGE from "./assets/image.png";

console.log("Hello World!");

const h1 = document.createElement("h1");
h1.innerText = "I love JavaScript";
document.body.append(h1);

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);
