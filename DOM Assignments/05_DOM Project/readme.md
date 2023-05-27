# DOM Assignment 5 -

![Output Result Of All The Tasks](./05_DOM%20Project/Output/DOM%20P2%20SS.png)

## Task 1 - Add new button with text content in the navbar -

```javaScript
let newbtn = document.querySelector(".nav-center");         // grabbing the tag by class name.
let newdiv = document.createElement("div");
let newlink = document.createElement("a");
newlink.className = "btn";                            // giving same class name as other element so that CSS can be applied on this new element too.
newlink.href = "./05_DOM Project/index.html";           // giving navigation 
newlink.innerText = "Pro Subscription";                          // giving text content
newdiv.appendChild(newlink);
newbtn.appendChild(newdiv);                           // Creating a whole new button inside alreday existed div tag.
```

## Task 2 - Change font color of Dish Names with their description -

```javaScript

let recipename = document.querySelectorAll(".recipe-name");
const namearr = [...recipename];                                        // converting nodeist form to array
for(let i=0; i<=namearr.length; i++){
    namearr[i].style.color = "blueviolet";                              // giving color to all text together.
}


let recipedish = document.querySelectorAll(".recipe-disp");
const disharr = [...recipedish];
for(let i=0; i<=disharr.length; i++){
    disharr[i].style.color = "blueviolet";
}
```

## Task 3 - Add a new 6th recipe card at the last -

```javaScript
let grab = document.querySelector(".recipe-gallery");            // grabbing element in which div will be created using class name of main section.

let card = document.createElement("div");                       // creating div element
card.className = "card";

let tag = document.createElement("a");                          // creating anchor tag which contains image tag, h5 tage, and p tag.
tag.className = "recipe-text";
tag.href = "#";

let image = document.createElement("img");
image.className = "recipe-img ";
image.src = "./05_DOM Project/img/th.jpeg";

let heading = document.createElement("h5");
heading.className = "recipe-name";
heading.innerText = "Virgin Mojito";

let para = document.createElement("p");
para.className = "recipe-disp";
para.innerText = "Prep : 7min | Freeze : 5min";

card.appendChild(tag);                                          // adding anchor tag inside div 
tag.appendChild(image);                                         // adding image tag inside anchor
tag.appendChild(heading);                                       // adding h5 tag inside anchor tag
tag.appendChild(para);                                          // adding paragraph tag inside <a>
grab.appendChild(card);                                         // adding main div inside main recipe gallery

```

![Output Result Of All The Tasks](./05_DOM%20Project/Output/sixth%20card.png)