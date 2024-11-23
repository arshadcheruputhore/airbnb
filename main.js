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



const upNavSearch = document.getElementById("upNavSearch");
const scrollPosition = window.scrollY;

document.addEventListener("scroll", function () {
    const navMid = document.getElementById("navMid");
    const upNav = document.getElementById('Up-nav');
    const navBarImg = document.getElementById("navBar-img");

    if (scrollPosition > 2) {

        upNavSearch.classList.add(
            "fixed", 
            "z-[999]", 
            "opacity-100", 
            "transition-transform", 
            "ease-out", 
            "duration-500", 
            "w-[25%]", 
            "md:mr-[150px]",
            "lg:mr-[150px]", 
            "lg:-translate-y-[35px]",
            "md:max-lg:w-[35%]",
            "md:max-lg:-translate-y-[30px]"
        );
        upNavSearch.classList.remove("relative", "lg:w-[55%]", "mr-0", "translate-y-0", "md:max-lg:mt-20");

        navMid.classList.add("opacity-0", "-translate-y-[200px]", "transition-all", "duration-300", "ease-out");
        navMid.classList.remove("opacity-100", "translate-y-0", "md:max-lg:relative", "md:max-lg:left-24");

        upNav.classList.remove("md:max-lg:h-40");
        upNav.classList.add("pb-[20px]", "z-[100]");
    
        navBarImg.classList.add("pt-4", "shadow");
        navBarImg.classList.remove("pt-6");
    } 
    else {
        upNavSearch.classList.add(
            "relative", 
            "lg:w-[55%]", 
            "mr-0", 
            "translate-y-0", 
            "opacity-100", 
            "transition-transform", 
            "ease-out", 
            "duration-500",
            "md:max-lg:mt-20"
        );
        upNavSearch.classList.remove("fixed", "z-[999]", "-translate-y-[35px]", "w-[25%]", "md:mr-[150px]", "lg:mr-[150px]", "lg:-translate-y-[35px]", "md:max-lg:w-[35%]", "md:max-lg:-translate-y-[30px]");

        navMid.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-300", "ease-out", "md:max-lg:relative", "md:max-lg:left-24");
        navMid.classList.remove("opacity-0", "-translate-y-[200px]");

        upNav.classList.add("md:max-lg:h-40");
        upNav.classList.remove("pb-[20px]", "z-[100]");
    
        navBarImg.classList.add("pt-6");
        navBarImg.classList.remove("pt-4", "shadow");
    }
});



document.addEventListener("scroll", function () {
    if (scrollPosition > 2) {
        // Modify anchor tags on scroll
        const anchorTags = upNavSearch.querySelectorAll("a");
        const labels = ["Anywhere", "Any week", "Add guests"];

        // Ensure only 3 anchor tags remain
        while (anchorTags.length > 3) {
            anchorTags[anchorTags.length - 1].remove();
        }

        // Update content of the remaining anchor tags
        anchorTags.forEach((anchor, index) => {
            const label = anchor.querySelector("label");
            if (label) {
                label.textContent = labels[index]; // Set new label text
            }

            // Remove input field inside anchor tag
            const input = anchor.querySelector("input");
            if (input) {
                input.remove();
            }

            // Remove any existing width-related classes
            anchor.classList.remove(...Array.from(anchor.classList).filter(cls => cls.startsWith("w-")));

            // Set equal width for all anchor tags
            anchor.classList.add("w-1/3", "text-center");
        });
    } 
    else {
        // Reset to original state on scroll up
        const originalHTML = `
            <a href="#where" class="search-where w-[35%] pl-7 py-3 rounded-[30px] hover:bg-gray-100">
                <div class="search-set flex flex-col border-r border-r-gray-300">
                    <label for="where" class="pointer-events-none text-xs tracking-tight font-medium">Where</label>
                    <input type="text" placeholder="Search destinations" name="" id="where" class="w-full outline-none border-none bg-transparent placeholder:text-sm placeholder:text-gray-500">
                </div>
            </a>
            <a href="#checkin" class="search-checkin w-[15%] pl-5 py-3 rounded-[30px] hover:bg-gray-100">
                <div class="search-set flex flex-col border-r border-r-gray-300">
                    <label for="checkin" class="pointer-events-none text-xs tracking-tight font-medium">Check in</label>
                    <input type="text" placeholder="Add dates" name="" id="checkin" class="w-full outline-none border-none bg-transparent placeholder:text-sm placeholder:text-gray-500">
                </div>
            </a>
            <a href="#checkout" class="search-checkout w-[15%] pl-5 py-3 rounded-[30px] hover:bg-gray-100">
                <div class="search-set flex flex-col border-r border-r-gray-300">
                    <label for="checkout" class="pointer-events-none text-xs tracking-tight font-medium">Check out</label>
                    <input type="text" placeholder="Add dates" name="" id="checkout" class="w-full outline-none border-none bg-transparent placeholder:text-sm placeholder:text-gray-500">
                </div>
            </a>
            <a href="#who" class="search-who w-[35%] pl-5 py-3 rounded-[30px] hover:bg-gray-100">
                <div class="search-set flex flex-col">
                    <label for="who" class="pointer-events-none text-xs tracking-tight font-medium">Who</label>
                    <input type="text" placeholder="Add guests" name="" id="who" class="w-full outline-none border-none bg-transparent placeholder:text-sm placeholder:text-gray-500">
                </div>
            </a>
        `;
        upNavSearch.innerHTML = originalHTML; // Reset the content
    }
});
