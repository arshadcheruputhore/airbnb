const searchWhere = document.querySelector('.search-where');
const searchCheckin = document.querySelector('.search-checkin');
const searchCheckout = document.querySelector('.search-checkout');
const searchWho = document.querySelector('.search-who');

searchWhere.addEventListener('mouseenter', ()=> {
    searchWhere.querySelector('.search-set').style.borderRight = "none";
});
searchWhere.addEventListener('mouseleave', ()=> {
    searchWhere.querySelector('.search-set').style.border = '';
});

searchCheckin.addEventListener('mouseenter', ()=> {
    searchWhere.querySelector('.search-set').style.border = "none";
    searchCheckin.querySelector('.search-set').style.border = "none";
});
searchCheckin.addEventListener('mouseleave', ()=> {
    searchWhere.querySelector('.search-set').style.border = '';
    searchCheckin.querySelector('.search-set').style.border = '';
});

searchCheckout.addEventListener('mouseenter', ()=> {
    searchCheckout.querySelector('.search-set').style.border = "none";
    searchCheckin.querySelector('.search-set').style.border = "none";
});
searchCheckout.addEventListener('mouseleave', ()=> {
    searchCheckout.querySelector('.search-set').style.border = '';
    searchCheckin.querySelector('.search-set').style.border = '';
});

searchWho.addEventListener('mouseenter', ()=> {
    searchCheckout.querySelector('.search-set').style.borderRight = "none";
});
searchWho.addEventListener('mouseleave', ()=> {
    searchCheckout.querySelector('.search-set').style.border = '';
});



// document.addEventListener("scroll", function () {
//     const upNavSearch = document.getElementById("upNavSearch");
//     const navMid = document.getElementById("navMid");
//     const Upnav = document.getElementById('Up-nav');
    
//     // Get the scroll position from the top of the page
//     const scrollPosition = window.scrollY;

//     // When scrolling down more than 100 pixels
//     if (scrollPosition > 2) {
//         // Move upNavSearch to the position of navMid
//         upNavSearch.style.position = "fixed"; // Make it fixed
//         upNavSearch.style.top = "15px"; // Set to below the header (adjust as needed)
//         upNavSearch.style.width = "90%"; // Make it full width
//         navMid.style.display = "none";   // Hide navMid
//         Upnav.style.zIndex = "100";
//         upNavSearch.style.zIndex = "1000"
//         upNavSearch.style.display = "200px";
//         Upnav.style.paddingBottom = '15px';
//         upNavSearch.style.transition = 
//     } else {
//         // Reset changes when scrolling back to the top
//         upNavSearch.style.position = "relative"; // Reset to original position
//         upNavSearch.style.top = "auto"; // Reset top
//         upNavSearch.style.width = "100%"; // Reset to original width
//         navMid.style.display = "flex"; // Show navMid
//     }
// });


document.addEventListener("scroll", function () {
    const upNavSearch = document.getElementById("upNavSearch");
    const navMid = document.getElementById("navMid");
    const upNav = document.getElementById('Up-nav');
    
    // Get the scroll position from the top of the page
    const scrollPosition = window.scrollY;

    // When scrolling down more than 2 pixels
    if (scrollPosition > 2) {
        // Move upNavSearch to the position of navMid
        upNavSearch.style.position = "fixed"; // Make it fixed
        upNavSearch.style.top = "15px"; // Set to below the header (adjust as needed)
        upNavSearch.style.width = "45%";
        navMid.classList.add("hidden");   // Hide navMid with transition effect
        upNav.style.zIndex = "100";
        upNavSearch.style.zIndex = "1000"; // Ensure upNavSearch is on top
        upNav.style.paddingBottom = '10px';
    } else {
        // Reset changes when scrolling back to the top
        upNavSearch.style.position = "relative"; // Reset to original position
        upNavSearch.style.top = "auto"; // Reset top
        navMid.classList.remove("hidden"); // Show navMid with transition effect
    }
});
