// HOW TO GOOGLE PROPERLY, USE 4 WORDS
// javascript(language you're working with)
// remove (simple)
// bullet (simple)
// points (simple)

// these are the 4 selectors that will give us the power to grab anything from the html page

let firstPTag = document.querySelector(`p`);
firstPTag.innerText = `Hello World`;

// example of putting 2 strings together, the + doesnt do addition(math) because its strings
// let str1 = `Hello`;
// let str2 = `World`;
// let str3 = str1 + str2; 

// to select ALL of __ (ex p tags)
let allPTags = document.querySelectorAll(`p`);
for (let i=0; i<allPTags.length; i++){
    // the i+1 here is how we get the counter to start at 1 instead of 0
    // ex `I am number 0` doesnt really make logical sense
    allPTags[i].innerText = `I am number ${i+1}`;
}

// this is one of the most used selectors, equivalent to the # selector from CSS
// its important it has its own selector function
let bestTag = document.getElementById(`bestTag`);
// instead of replacing the text already there we're going to append the text
// this is the `long` way to write this
// bestTag.innerText = bestTag.innerText + `I am the best`;
// -= works with numbers not with strings, but += works with strings
bestTag.innerText += `. I am the best`;

let specialTags = document.getElementsByClassName(`specialTag`);
for (let i=0; i<specialTags.length; i++){
    specialTags[i].innerText += `. I am also very special.`
}

// -------------------------------------------------------------------------------------------------------------------------------------
// pertains to week 10C slide notes = element manipulation

// innerHTML
// the h1 itself has been preserved but everything inside it has been replaced with what we specified, we could also += append it with something if we wanted
let head = document.getElementById(`head`);
head.innerHTML = `Link Removed`;

// outerHTML
// it replaced `link removed` with the added button that we wrote using VALID html
// outerHTML will overwrite innerHTML
head.outerHTML = `<button>Click Me!</button>`

// Here is a NOTE: using innerText and writing valid HTML will NOT actually process it into HTML, it will just write this as a STRING/text
// head.innerText = `<button>Click Me!</button>`

// -----------------------------------------------------
// adding new HTML tags using insertAdjacentHTML

// beforeBegin - insert before the element 
let shoppingList = document.getElementById(`shoppingList`);
shoppingList.insertAdjacentHTML(`beforebegin`, `<h2>My Shopping List</h2>`);

// afterBegin for first child (ex eggs got added to the top of the shopping list)
shoppingList.insertAdjacentHTML(`afterbegin`, `<li>Eggs</li>`);

// beforeEnd for last child (ex bread got added to the end of the list)
shoppingList.insertAdjacentHTML(`beforeend`, `<li>Bread</li>`)

// afterEnd - insert after the element (ex after the list)
shoppingList.insertAdjacentHTML(`afterend`, `<h3>Happy Shopping!</h3>`);

// -----------------------------------------------------
// lets make a new shopping list ONLY in js (I added the div and ID in html first as per Mark's example)
// lets assume we have an array and are shopping for something
let housewares = [`Pillows`, `Picture Frame`, `Wine Glasses`, `Bath Mat`];
let housewaresList = document.getElementById(`secondList`);
housewaresList.insertAdjacentHTML(`beforebegin`, `<h2>My Housewares List</h2>`)
for (let i=0;i<housewares.length;i++){
    housewaresList.insertAdjacentHTML(`beforeend`, `<li>${housewares[i]}</li>`)
}

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Style

// body is a special element that doesnt need a selector
// because its such a useful element and always exists in an html page, they made it readily available through this selector `body`
let body = document.body;
body.style.backgroundColor = `lavender`;

// lets try removing or changing the style of the LI bullet points
// this is how you should google things you need to find, 4 words only
// javascript(language you're working with)
// remove
// bullet
// points
// (any dashes within - - - attributes (ex: list-style-type) converts to camelcase in JS)
housewaresList.style.listStyleType = `square`;

// Image 
// changing img that was on html page to a new img src
let image = document.getElementById(`myImg`);
// get attribute `src` 
console.log(image.getAttribute(`src`));
// then set attribute `src` to new url 
image.setAttribute(`src`, `https://resizing.flixster.com/vvABu1s70UlolhYFsJ2HAiSDFbA=/300x300/v2/https://flxt.tmsimg.com/assets/p480836_i_v9_ab.jpg`);
// set attribute will overwrite anything you had there before