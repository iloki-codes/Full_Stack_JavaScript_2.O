# DOM ASSIGNMENT 9 -

## TASK 9.1 - Change the font style and font color of the heading & also add cart image in the  button:

![Before Output](./DOM%20P9/ass9.1-before.png)

```javaScript
let heading = document.querySelector(".title");                 // grabbing the heading tag
heading.style.fontFamily = "Hezareh bold";                      // changing font family
heading.style.color = "#ff0000";                                // changing the font color

let cart = document.querySelector(".add-to-cart img");          // grabbing the image tag in the button
cart.src = "file:///E:/coding/FullStack%20WebDev_2.0/DOM%20Assignments/DOM%20P9/DOM%20P9/images/icon-cart.svg"; 
```

![After Output](./DOM%20P9/ass9.1-after.png)


## Task 9.2 - Change the color of the add to cart button when it is hovered:

![Before Output](./DOM%20P9/ass9.2-before.png)

```javaScript
let btnclr = document.querySelector(".add-to-cart");                //grabbing the button tag
btnclr.addEventListener("click", hover);                        // adding event listener for hovering effect
    function hover() {
        btnclr.style.backgroundColor = "#ff0000";
    }
```

![After Output](./DOM%20P9/ass9.2-after.png)
