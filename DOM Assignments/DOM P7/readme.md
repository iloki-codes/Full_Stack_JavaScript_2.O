# DOM ASSIGNMENT 7 -

## TASK 1 - Remove the languages that have 2.0 in their name:

![Question 1](./DOM%20P7/ass7.1-before.png)

```javaScript
let lang = document.querySelectorAll("a");              // grabbing the all anchor tags
let langarr = Array.from(lang);                         // convertng nodelist to array form
for (let i = 0; i <= langarr.length; i++) {             // running for loop to go through each element
    if( i % 2 == 1) {                                   // 2.0 is at odd indexes, that's why giving this condition        
        langarr[i].remove();                            // removing languages that contain 2.0 in their names
    }
    else{
        return false;
    }
}
```

![Output of task 1](./DOM%20P7/ass7.1-after.png)


## TASK 2 - Write anything in input box and after submit it should return all languages name written back:

![Question 2](./DOM%20P7/ass7.2-before.png)

```javaScript
let input = document.querySelector(".main__form-input");
input.disabled = false;
input.value = "Loki Of iNeuron";

let submitbtn = document.querySelector("main__form-btn");
submitbtn.disabled = false;

submitbtn.addEventListener("click", () => {
    lang.abort();   
}
)
```

![Output of Task 2](./DOM%20P7/ass7.2-after.png)