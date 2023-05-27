# DOM ASSIGNMENT 6 -

## Task 1 - Replace main logo image with another:

![Output of task 1](./06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

```javaScript
let newimg = document.querySelector(".logo");
newimg.src = "./06_DOM Project/assets/ineuron-logo.png";
```

## Task 2 - Change Price in the app info section and linkedin button in the footer:

![Output Of task 2](./06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

```javaScript
let price = document.querySelector(".app_price span");
price.innerText = "$10";

let linkdin = document.querySelector(".footer_social");
let newdiv = document.createElement("div");
newdiv.className = "footer_social_ico";
let newicon = document.createElement("i");
newicon.className = "fa-brands fa-linkedin";
newdiv.appendChild(newicon);
linkdin.appendChild(newdiv);
```