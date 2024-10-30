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



document.addEventListener("scroll", function () {
    const upNavSearch = document.getElementById("upNavSearch");
    const navMid = document.getElementById("navMid");
    const upNav = document.getElementById('Up-nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 2) {
        // When scrolling down, move upNavSearch to navMid's position and hide navMid
        upNavSearch.style.position = "fixed"; // Make it fixed
        upNavSearch.style.zIndex = "999";
        upNavSearch.style.transform = "translateY(-35px)"; // Move down, adjust as needed
        upNavSearch.style.width = "45%"; // Adjust width for scroll state
        upNavSearch.style.opacity = "1"; // Ensure it's visible
        upNavSearch.style.transition = "transform 0.5s ease, opacity 0.3s ease, width 0.3s ease";
        upNav.style.zIndex = "100";
        upNav.style.paddingBottom = '20px';
        upNavSearch.style.marginRight = "150px";

        navMid.style.opacity = "0"; // Fade out navMid
        navMid.style.transform = "translateY(-100px)"; // Move up out of view
        navMid.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    } else {
        // Reset to original state when scrolling back to the top
        upNavSearch.style.position = "relative";
        upNavSearch.style.transform = "translateY(0)";
        upNavSearch.style.width = "55%"; // Original width
        upNavSearch.style.opacity = "1";
        upNavSearch.style.marginRight = "0";

        navMid.style.opacity = "1";
        navMid.style.transform = "translateY(0)";
    }
});


