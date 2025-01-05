let url="https://honey-natural-gallium.glitch.me/user";
// let div = document.createElement("div")
let newbtn=document.getElementById("newbtn")
let newmain=document.getElementById("newmain")
// newbtn.addEventListener("click",fetchdata)
let arr=[]
function fetchdata(){
    fetch(url)
      .then((res)=>res.json())
      .then((data)=>console.log (data ))
    //   .then((data)=> return data)
      .catch((err)=>console.log(err))
    return data  

}
fetchdata()

// createcard(fetchdata())
function toggleWishlist(element) {
    // Toggle the "active" class
    element.classList.toggle("active");

    // You can perform additional logic here, such as updating a wishlist array or server
    if (element.classList.contains("active")) {
        console.log("Added to wishlist");
    } else {
        console.log("Removed from wishlist");
    }
}