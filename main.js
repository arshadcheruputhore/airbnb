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



const navMid = document.getElementById("navMid");
const upNav = document.getElementById('Up-nav');
const navBarImg = document.getElementById("navBar-img");
const upNavSearch = document.getElementById("upNavSearch");
const searchBtn = document.getElementById("searchBar-btn");

const initialClasses = [
    "relative",
    "lg:w-[55%]",
    "mr-0",
    "translate-y-0",
    "opacity-100",
    "md:max-lg:mt-20",
];
const scrolledClasses = [
    "fixed",
    "z-[999]",
    "opacity-100",
    "lg:w-[30%]",
    "md:max-lg:w-[35%]",
    "md:max-lg:mr-[170px]",
    "lg:mr-[70px]",
    "lg:-translate-y-[45px]",
    "md:max-lg:w-[35%]",
    "md:max-lg:-translate-y-[45px]",
];

// Store removed anchor details
let removedAnchor = null;
let removedAnchorNextSibling = null;

document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const anchorTags = upNavSearch.querySelectorAll("a");


    if (scrollPosition > 1) {
        // Add scrolled classes
        upNavSearch.classList.add(...scrolledClasses);
        // Remove initial classes
        upNavSearch.classList.remove(...initialClasses);

        navMid.classList.add("opacity-0", "-translate-y-[200px]");
        navMid.classList.remove("opacity-100", "translate-y-0", "md:max-lg:relative", "md:max-lg:left-24");

        upNav.classList.remove("md:max-lg:h-40");
        upNav.classList.add("z-[100]");
    
        navBarImg.classList.add("pt-4", "md:shadow");
        navBarImg.classList.remove("pt-6");

        // Modify anchor tags
        const labels = ["Anywhere", "Any week", "Add guests"];

        if (anchorTags.length > 3) {
            // Save removed anchor, sibling, and content
            removedAnchor = anchorTags[anchorTags.length - 2];
            removedAnchorNextSibling = removedAnchor.nextSibling;
            removedAnchorContent = removedAnchor.innerHTML;
            removedAnchor.remove();
        }

        anchorTags.forEach((anchor, index) => {
            const label = anchor.querySelector("label");
            if (label) {
                label.textContent = labels[index];
                label.classList.add("text-sm");
                label.classList.remove("text-xs");
            }

            const input = anchor.querySelector("input");
            if (input) input.remove(); // Remove input field

            anchor.classList.remove(...Array.from(anchor.classList).filter((cls) => cls.startsWith("w-")));
            anchor.classList.remove("pl-7", "pl-5", "text-start");

            if (index === anchorTags.length - 1) {
                anchor.classList.add("w-[44%]", "text-start", "pl-4");
            } else {
                anchor.classList.add("w-[28%]", "text-center");
            }
        });

        // Adjust button styles
        searchBtn.classList.add("w-9", "h-9", "top-1", "right-1", "py-1");
        searchBtn.classList.remove("w-12", "h-12", "top-2");
    } else {
        // Revert to initial state by toggling classes
        upNavSearch.classList.add(...initialClasses);
        upNavSearch.classList.remove(...scrolledClasses);

        navMid.classList.add("opacity-100", "translate-y-0", "md:max-lg:left-24", "md:max-lg:relative");
        navMid.classList.remove("opacity-0", "-translate-y-[200px]");

        upNav.classList.add("md:max-lg:h-40");
        upNav.classList.remove("pb-[20px]", "z-[100]");
    
        navBarImg.classList.add("pt-6");
        navBarImg.classList.remove("pt-4", "md:shadow");

        // Reset button styles
        searchBtn.classList.add("w-12", "h-12", "top-2");
        searchBtn.classList.remove("w-9", "h-9", "top-1", "right-1", "py-1");

        // Restore the removed anchor
        if (removedAnchor && !upNavSearch.contains(removedAnchor)) {
            if (removedAnchorNextSibling) {
                upNavSearch.insertBefore(removedAnchor, removedAnchorNextSibling);
            } else {
                upNavSearch.appendChild(removedAnchor);
            }

            // Restore the original content
            removedAnchor.innerHTML = removedAnchorContent;

            removedAnchor = null;
            removedAnchorNextSibling = null;
            removedAnchorContent = null;
        }


        // Restore original structure and content for anchor tags
        anchorTags.forEach((anchor) => {

            const label = anchor.querySelector("label");
            if (label) {
                label.classList.add("text-xs");
                label.classList.remove("text-sm");
                // Reset label text
                if (label.textContent === "Anywhere") label.textContent = "Where";
                if (label.textContent === "Any week") label.textContent = "Check in";
                if (label.textContent === "Add guests") label.textContent = "Who";
            }

            // Re-add input field if removed
            if (!anchor.querySelector("input")) {
                const input = document.createElement("input");
                input.type = "text";
                input.className =
                    "w-full outline-none border-none bg-transparent placeholder:text-sm placeholder:text-gray-500";
                input.placeholder = anchor.classList.contains("search-where")
                    ? "Search destinations"
                    : anchor.classList.contains("search-checkin")
                    ? "Add dates"
                    : anchor.classList.contains("search-who")
                    ? "Add guests"
                    : "";
                anchor.querySelector(".search-set").appendChild(input);
            }

            anchor.classList.remove("text-center");
            anchor.classList.add("text-start");

            // Reset widths
            if (anchor.classList.contains("search-where")) anchor.classList.add("w-[35%]", "pl-7");
            if (anchor.classList.contains("search-checkin") || anchor.classList.contains("search-checkout"))
                anchor.classList.add("w-[15%]", "pl-5");
            if (anchor.classList.contains("search-who")) anchor.classList.add("w-[35%]", "pl-5");
        });

    }
});




const userInfo = document.querySelector(".user-choice");
let lastScrollTop = 0;

document.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        userInfo.classList.remove("translate-y-full");
        userInfo.classList.add("translate-y-0");
    } else if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        userInfo.classList.remove("translate-y-0");
        userInfo.classList.add("translate-y-full");
    }

    lastScrollTop = currentScrollTop;
});
