
//First try to get the value of the search field whenever a user types in that field, and log
//that value to the screen with a console.log() statement. Checkout the keyup event
//listener for this. And be sure to make the value case insensitive by using something like
//the toLowerCase() method.

document.getElementById("searchBar").addEventListener("keyup", (myFunction));

function myFunction() {
    let x = document.getElementById("searchBar");
    x.value = x.value.toLowerCase();
    console.log(x.value);
}

//Next, start trying to target the entire caption by using the getAttribute() method, then
//looping and logging the all lowercase version of the captions to the console.

let allCaptions = [];

for ( let i = 1; i <= 12; i++ ) {
    let value = document.getElementById(`caption${i}`).getAttribute("data-caption");
    allCaptions += value;
}

//Next comes the fun part. Start trying to find ways to check if the current value of the
//search input is included within any of the captions, and if so, log the associated image
//to the console.



//let final = searchBar.includes("hello");

//console.log(final);



//Lastly, use a conditional so that if there's a match, display the container of the image,
//and if not, hide it. Piece of cake!


// document.getElementById("gallery").innerHTML = final;