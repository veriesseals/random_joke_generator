// Jokes Array

let jokes = [
    "A woman gets on a bus with her baby. The bus driver says: “Ugh, that’s the ugliest baby I’ve ever seen!” The woman walks to the rear of the bus and sits down, fuming. She says to a man next to her: “The driver just insulted me!” The man says: “You go up there and tell him off. Go on, I’ll hold your monkey for you.",
    "I said to the Gym instructor “Can you teach me to do the splits?” He said, “How flexible are you?” I said, “I can’t make Tuesdays.",
    "Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one – and let the other one off.",
    "Doc, I can’t stop singing the ‘Green Green Grass of Home’. He said: “That sounds like Tom Jones syndrome.” “Is it common?” I asked.  “It’s not unusual” he replied.",
    "I’m on a whiskey diet. I’ve lost three days already.",
    "My therapist says I have a preoccupation with vengeance. We’ll see about that.",
    "A priest, a rabbi and a vicar walk into a bar. The barman says, “Is this some kind of joke?",
    "A group of chess enthusiasts checked into a hotel and were standing in the lobby discussing their recent tournament victories. After about an hour, the manager came out of the office and asked them to disperse. “But why?” they asked, as they moved off. “because,” he said “I can’t stand chess nuts boasting in an open foyer.",
    "I was in Tesco’s and I saw this man and woman wrapped in a barcode. I said, “Are you two an item?",
    "I was having dinner with Garry Kasporov (world chess champion) and there was a check tablecloth. It took him two hours to pass me the salt."
]

// Experiment

// testJokeBeg = [
//     "Yo Mamma",
//     "Yo Daddy",
//     "Yo Sister",
//     "Yo Brother"

// ]

// testJokeMid = [
//     "so short",
//     "so tall",
//     "so dumb",
//     "so slow"

// ]

// testJokeEnd = [
//     "they tripped over the cat!",
//     "they kiss the dog!",
//     "they burned the food!",
//     "failed pre-school!"

// ]


// ----------------------------------------------------------
// First, we call the Math.floor() function. The Math.floor() function takes in a parameter and rounds the number downward to the nearest integer. For example, if we call Math.floor(5.7) it will return 5.

// let randomJoke = Math.floor(Math.random() * (jokes.length));

// ----------------------------------------------------------
//  Create newJoke function

function newJoke () {
    let randomJoke = Math.floor(Math.random() * (jokes.length));
    document.getElementById('jokeDisplay').innerHTML = jokes[randomJoke];
    
}

// Experiment
// function begJoke (){
//     let begJoke = Math.floor(Math.random() * (testJokeBeg.length));
//     document.getElementById('jokeDisplay').innerHTML = testJokeBeg[begJoke];
//     return begJoke;
// }

// function midJoke (){
//     let midJoke = Math.floor(Math.random() * (testJokeMid.length));
//     document.getElementById('jokeDisplay').innerHTML = testJokeMid[midJoke];
//     return midJoke;
// }

// function endJoke (){
//     let endJoke = Math.floor(Math.random() * (testJokeEnd.length));
//     document.getElementById('jokeDisplay').innerHTML = testJokeMid[endJoke];
//     return endJoke;
// }


// Now we need a way to use the value of randomNumber to randomly retrieve a quote from the joke array and place the joke into our HTML document and display it to our users.

// document.getElementById('jokeDisplay').innerHTML = jokes[randomJoke];


newJoke();
console.log(newJoke);
