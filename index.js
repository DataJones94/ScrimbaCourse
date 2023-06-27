// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is cliced (log it out)
// change the count-el in he HTML to reflect the new count

let countEl = document.getElementById("count-el") // pass in arguments
console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}

/////////////////////

// change the count-el in the HTML to reflect the new count
//DOM aka Document Objec Model- how you use JavaScript to modify a website

//1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
}
save()

////////////////////
// Create a variable, message, that stores the string: "You have three new notifications"
let username = "per"
let message = "You have three new notifications"
console.log(message + "," + username)
//console: You have three new notifications, per

//create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + "," + username + "!"
console.log(messageToUser) //console: You have three new notifications, per!

/////////////////////

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let name= "Slim Shady"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)

let points = 4
let bonusPoints = "10"
let totalPoints = points + bonusPoints
console.log(totalPoints) //console: 410

console.log(4 + 5) //console: 9
console.log("2" + "4") // console: 24
console.log("5" + 1) // console: 51
console.log(100 + "100") // console: 100100

///////////////////

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let namee = "keyonna"
let greetings = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greetings + namee
//console: Welcome back keyonna

//////////////////

//Add an emoji to the end
// hint: count = count + 1
welcomeEl.innerText += "emoji"
///////////////

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEls = document.getElementById("count-el")
let counts = 0
let saveEl = document.getElementById("save-el")
console.log(save-El)
function increment() {
    counts += 1
    countEls.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = counts + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
// let countEls = document.getElementById("count-el")
// let counts = 0
// let saveEl = document.getElementById("save-el")
// console.log(save-El)
// function increment() {
//     counts += 1
    countEls.textContent = count // we changed innerText to .textContent
// }

// function save() {
//     let countStr = counts + " - "
    saveEl.textContent += countStr //.textContent helps with the spacing so that the numbers read better
//     console.log(count)
// }

