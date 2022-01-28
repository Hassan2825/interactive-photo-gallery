    //First try to get the value of the search field whenever a user types in that field, and log
    //that value to the screen with a console.log() statement. Checkout the keyup event
    //listener for this. And be sure to make the value case insensitive by using something like
    //the toLowerCase() method.

    document.getElementById("searchBar").addEventListener("keyup", (myFunction));

    function myFunction() {
    let x = document.getElementById("searchBar");
    x.value = x.value.toLowerCase();

    //Next, start trying to target the entire caption by using the getAttribute() method, then
    //looping and logging the all lowercase version of the captions to the console.

    for ( let i = 1; i <= 12; i++ ) {
        let anchorElements = document.getElementById(`caption${i}`);
        let captionTxt = anchorElements.getAttribute('data-caption');
    


    //Next comes the fun part. Start trying to find ways to check if the current value of the
    //search input is included within any of the captions, and if so, log the associated image
    //to the console.

        let results = captionTxt.includes(x.value);

    //Lastly, use a conditional so that if there's a match, display the container of the image,
    //and if not, hide it. Piece of cake!
        
        if (results == true) {
            document.getElementById(`caption${i}`).style.display = ""; 
        } else {
            document.getElementById(`caption${i}`).style.display = "none"; 
        }
    }   
} 