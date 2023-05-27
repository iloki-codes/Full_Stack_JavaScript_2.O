# DOM Assignments 1,2,3 -

## DOM Assignment 1 -

### task1 - Adding one list item 'Hire Me' in navigation tab:

```javaScript
let ul = document.querySelector("ul");
let list = document.createElement("li");
list.innerHTML = "<a>Hire Me</a>";
ul.appendChild(list);
```

![OutPut Of Task One](./firstAssignmentImage/task1Output.png)

### task2 - Changing placeholder's text in input tag:

```javaScript
let text = document.querySelector("input");
text.placeholder = "Search My Project";
```

![OutPut Of Task Two](./firstAssignmentImage/task2Output.png)


### task3 - Editing text in paragrag tag:

```javaScript
let edit = document.querySelector("p");
edit.innerHTML = "<p>I am an aspiring <span>Full Stack JavaScript Developer</span>,<br />who is currently working as <span>an Employee</span> for <br /><span>iNeuron Intelligence Pvt Ltd</span>.</p>";
```

![OutPut Of Task Three](./firstAssignmentImage/task3Output.png)

### task4 - Replacing Image with Other:

```javaScript
let newimg = document.querySelector("img");
newimg.src = "./hiteshsiravatar.png";
```

![OutPut Of Task Four](./firstAssignmentImage/task4Output.png)

### task5 - Adding a 'Support me' Button under the new image:

```javaScript
let button = document.querySelector(".hero-right-section-btns");
let btn = document.createElement("button");
btn.textContent= "Support Me";
button.appendChild(btn);
```

![OutPut Of Task Five](./firstAssignmentImage/task5Output.png)


~~_______________________________________________________________________________________________________________________________________________~~

## DOM Assignment 2 -


### task1 - Change the background color of all the headings:

```javaScript
let allh3 = document.querySelectorAll("h3");
let myarray = Array.from(allh3);
for(let i=0; i<=myarray.length; i++){
  myarray[i].style.backgroundColor = "#CAD5E2";
}
```

![Output of task one](./secondAssignmentImage/task1Output.png)

### task2 - a). Replace one list item Contact with Projects in the navbar:

```javaScript
let ul = document.querySelector("ul");
ul.removeChild(ul.children[2]);
let element = document.createElement("li");
element.innerHTML = "<a href="#">Projects</a>";
ul.appendChild(element);
```
### 2.2 - b). Add 'Skills' accordian tab below 'Hobbies':

```javaScript
let main = document.querySelector(".accordian-wrapper");  // grabbing the main class
let div = document.createElement("div");                  // creating div for Skill tab
div.className = "accordian";                              // giving class name to it
let h3 = document.createElement("h3");                    // creating Skills
h3.innerText = "Skills";
div.appendChild(h3);

let content = document.createElement("p");                 // giving content to the Skill heading
content.textContent = "I posses a very good command over the Full Stack Development Technologies like MERN which can be seen in my work over the Github.";
div.appendChild(content);
main.appendChild(div);                                      // adding the whole element to the document.
```

![Output of Task  two](./secondAssignmentImage/task2Output.png)


~~_______________________________________________________________________________________________________________________________________________~~


## DOM Assignment 3 -

### task - Change text content in all input tags in the form:

```javaScript
document.querySelector(".enterName").placeholder = "FSJS 2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";
document.querySelector(".userName").placeholder = "FSJS 2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";
```

![Output of task](./thirdAssignmentImage/task1Output.png)
