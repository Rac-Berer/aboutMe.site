// Display a message in the console
console.log('Welcome to the JavaScript file!');

// Define the sender's name
const senderName = 'Rachel';

// Insert the sender's name into the HTML element with id "welcomeMessage"
window.onload = function() {
    // Change the content of the h1 element
    document.getElementById('welcomeMessage').textContent = 'Thank you for visiting my web page! - ' + senderName;
};
