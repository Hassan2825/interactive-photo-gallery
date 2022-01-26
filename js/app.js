
//First try to get the value of the search field whenever a user types in that field, and log
//that value to the screen with a console.log() statement. Checkout the keyup event
//listener for this. And be sure to make the value case insensitive by using something like
//the toLowerCase() method.

document.getElementById("searchBar").addEventListener("keyup", (myFunction));
let allCaptions = [];

function myFunction() {
    let x = document.getElementById("searchBar");
    x.value = x.value.toLowerCase();

    for ( let i = 1; i <= 12; i++ ) {
        let value = document.getElementById(`caption${i}`).getAttribute("data-caption");
        allCaptions += value;
        if (value.includes("Hello") {
            console.log(allCaptions);
        } else {
            break
        }
    }
}





//Next comes the fun part. Start trying to find ways to check if the current value of the
//search input is included within any of the captions, and if so, log the associated image
//to the console.


//Lastly, use a conditional so that if there's a match, display the container of the image,
//and if not, hide it. Piece of cake!


// document.getElementById("gallery").innerHTML = final;









// the users input includes captions - log associated image to the console





//let final = searchBar.includes("hello");

//console.log(final);
