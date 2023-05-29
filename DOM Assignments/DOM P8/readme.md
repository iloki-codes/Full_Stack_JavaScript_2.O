# DOM ASSIGNMENT 8 -

## TASK 8.1 - Add one more item in the right div and a scroll bar:

![Before Output](./DOM%20P8/ass8.1-before.png)

```javaScript
let item = document.querySelector("aside");

let heading = item.createElement("h2");
heading.className = "new-head";
heading.textContent = "This is my custom heading";

let para = item.createElement("p");
para.className = "new-p";
para.textContent = "This is my custom description.";

item.appendChild(heading);
item.appendChild(para);

item.overflowX = "hidden";
item.overflowY = "auto"; 
```

![After Output](./DOM%20P8/ass8.1-after.png)


## TASK 8.2 - Change background of body or removing background-Image of body:

![Before Output](./DOM%20P8/ass8.2-before.png)

```javaScript
document.body.style.backgroundImage = "none";
```

![After Output](./DOM%20P8/ass8.2-after.png)


## TASK 8.3 - from @media query 991 px shift the navigation bar in the hamburger menu:

![Before Output](./DOM%20P8/ass8.3-before.png)

```javaScript
let burger = document.getElementById("navbarTogglerDemo01");
burger.addEventListener("click", screen);
    function screen() {
        if("screen and (max-width: 991px)") {
            if(burger.style.display === "block") {
                burger.style.display = "none";
            }
            else {
                burger.style.display = "block";
            }
        }
        else {
            burger.abort();
        }
    }
```

![After Output](./DOM%20P8/ass8.3-after.png)
