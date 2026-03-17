// includes.js - Header aur Footer ko dynamically load karne ke liye
 
// Header HTML

const headerHTML = `
<header>
<div class="top-header">
<div class="top-header-icons">
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-x-twitter"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-tiktok"></i>
<i class="fa-brands fa-youtube"></i>
</div>
<div class="login">
<span class="span1">Login</span>
<span class="span1">Contact Us</span>
<span class="span1">Facilitation Desk</span>
</div>
</div>
<div class="main-header">
<div class="right-section">
<a href="#">
<img class="img1" src="Tech-Desti-New-logo-300x127-1.webp" alt="" width="80px" height="40px">
</a>
</div>
<div class="menu-links">
<a class="menu-link1" href="#">About Us <i class="fa-solid fa-angle-down"></i></a>
<a class="menu-link1" href="#">Why Pakistan</a>
<a class="menu-link1" href="#">Tech Hub</a>
<a class="menu-link1" href="#">Events & Delegations <i class="fa-solid fa-angle-down"></i></a>
<a class="menu-link1" href="#">Membership Benefits</a>
<a class="menu-link1" href="#">Media <i class="fa-solid fa-angle-down"></i></a>
</div>
<div class="button">
<button type="button">
<a class="button1" href="#">Become a Member</a>
</button>
</div>
</div>

`;
 
// Footer HTML

const footerHTML = `
<footer>
<div class="footer-section">
<div class="logos">
<a class="tech-logo" href="#"><img src="./Tech-Destination-logo.png.webp" alt=""></a>
<a class="pseb-logo" href="#"><img src="./Frame-1686559927-1" alt=""></a>
</div>
 
        <div class="quick-links">
<p class="links-heading">Quick Links</p>
<a href="#">About PSEB</a>
<a href="#">Why Pakistan</a>
<a href="#">HR Skills & Capacity</a>
<a href="#">Building</a>
<a href="#">Management Team</a>
<a href="#">Tech Connect</a>
<a href="#">Blog</a>
</div>
 
        <div class="another-links">
<a href="#">Tech Hub</a>
<a href="#">Careers</a>
<a href="#">Tenders</a>
<a href="#">Industry Support</a>
<a href="#">Terms & Conditions</a>
<a href="#">Privacy & Policy</a>
</div>
 
        <div class="desk">
<h4 class="heading2">Facilitation Desk</h4>
<input type="text" placeholder="Name">
<input type="text" placeholder="Email">
<br>
<input class="input1" type="text" placeholder="Phone">
<br>
<input class="input2" type="text" placeholder="message">
<div>
<a href="#">
<button>Message Us</button>
</a>
</div>
</div>
</div>
 
    <hr class="hr1">
 
    <div class="footer-icons">
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-x-twitter"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-tiktok"></i>
<i class="fa-brands fa-youtube"></i>
</div>
 
    <p class="p1">©Copyright 2025 | Techdestination.com</p>
<br>
</footer>

`;
 
// Page load hone par header aur footer inject karein

document.addEventListener('DOMContentLoaded', function() {

    // Header inject karein

    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {

        headerPlaceholder.innerHTML = headerHTML;

    }

    // Footer inject karein

    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {

        footerPlaceholder.innerHTML = footerHTML;

    }

});

 