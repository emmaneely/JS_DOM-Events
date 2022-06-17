console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent = 'I used the getElementById("node1") method to access this';

// let node1 = document.getElementById("node1");
// node1.textContent = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent = 'I used the getElementByClassName("node2") method to access this';

// let node2 = document.getElementsByClassName("node2")[0];
// node2.textContent = 'I used the getElementByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let allH3s = document.getElementsByTagName("h3");
for (let h3 of allH3s) {
    h3.textContent = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newP = document.createElement("p");
newP.textContent = 'This node was created using the createElement() method';

// TODO: Append the created node to the parent node using the element.appendChild() method

let parentId = document.querySelector("#parent");
parentId.appendChild(newP);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
// BONUS: Add a link href to the <a>
let link = document.createElement("a");
link.textContent = "TrueCoders"
link.href = "https://truecoders.io/";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentId.insertBefore(link, newP);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let child = document.createElement("p");
child.textContent = 'New Child Node';

let exercise3 = document.querySelector("#exercise-container3");
let replaceChild = document.querySelector("#N1");

// TODO: Remove the "New Child Node"
exercise3.replaceChild(child, replaceChild);

/*----------- Exercise #4: ANIMATIONS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let item of list) {
    // TODO: Append the new list items to the unordered list element
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}

// TODO: Append the unordered list to the `div#container` under exercise 4 
let containerId = document.querySelector("#container");
containerId.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function handleEsc(event) {
    if (event.key == "Escape") {
        document.body.removeChild(document.querySelector("#modal"));
        window.removeEventListener("keyup", handleEsc);
    }
}


function show(event) {
    window.addEventListener("keyup", handleEsc);

    let modalContainer = document.createElement("div");
    let modalBody = document.createElement("div");
    let title = document.createElement("h2");
    let content = document.createElement("p");
    let closeButton = document.createElement("button");

    title.textContent = 'Action Required';
    content.textContent = 'You need to...';
    closeButton.textContent = 'Close';
    closeButton.addEventListener("click", (event) => {
        document.body.removeChild(modalContainer);
        window.removeEventListener("keyup", handleEsc);
    })

    modalContainer.id = "modal";
    modalBody.classList.add("modal-card");

    modalContainer.addEventListener("click", (event) => {
        if (event.target == modalContainer) {
        document.body.removeChild(modalContainer);
        window.removeEventListener("keyup", handleEsc);
        }
    });

    modalBody.append(title, content, closeButton);
    modalContainer.appendChild(modalBody);
    document.body.appendChild(modalContainer);
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", show);