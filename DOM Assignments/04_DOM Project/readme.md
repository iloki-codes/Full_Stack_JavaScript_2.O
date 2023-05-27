# DOM Assignment 4 -


## Task 1st - Giving background color to Barbarian tab -

```javaScript
let barb = document.querySelector(".clash-card__unit-stats--barbarian");
barb.style.backgroundColor = "#ec9b3b";
```

## Task 2nd - Giving background color to Archer -

```javaScript
let arch = document.querySelector(".clash-card__unit-stats--archer");
arch.style.backgroundColor = "#ee5487";
```

## Task 3rd - Giving background color to Giant -

```javaScript
let gia = document.querySelector(".clash-card__unit-stats--giant");
gia.style.backgroundColor = "#f6901a";
```

## Task 4th - Giving background color to Goblin -

```javaScript
let gob = document.querySelector(".clash-card__unit-stats--goblin");
gob.style.backgroundColor = "#82bb30";
```

## Task 5th - Giving background color to Wizard -

```javaScript
let wiz = document.querySelector(".clash-card__unit-stats--wizard");
wiz.style.backgroundColor = "#4facff";
```

## Task 6th - Changing font color white of all sub div elements of all coc charaters -

```javaScript
let white = document.querySelectorAll(".one-third");    // grabbing all elements by same class name
let whtarr = Array.from(white);                         // converting NODELIST TO ARRAY form.
for(let i =0; i<= whtarr.length; i++){
    whtarr[i].style.color = "#ffffff";                    // giving css property through for loop
}
```

![Output Result Of All The Above Tasks](./04_DOM%20Project/Output/DOM%20P1%20SS.png)