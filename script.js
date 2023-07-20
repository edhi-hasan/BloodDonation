// Script for change pic after 5 Second 
var images = ["img/img1.png","img/img2.png","img/img3.png", "img/img6.png","img/img7.png"]; // Add your image URLs here
var currentIndex = 0;
var image = document.getElementById("image");

setInterval(function () {
    // Increment the index to get the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Set the src attribute of the image to the next image URL
    image.src = images[currentIndex];
}, 3000); // Change image every 5 seconds