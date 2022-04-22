function listHoverIn() {
    const siteMenuList = document.querySelector(".site-menu li:hover");
    siteMenuList.classList.toggle("li-hover");
}

function listHoverOut() {
    const siteMenuList = document.querySelector(".site-menu .li-hover");
    siteMenuList.classList.toggle("li-hover");
}

const siteMenuList = document.querySelectorAll(".site-menu li");
for (let item of siteMenuList) {
    item.addEventListener("mouseover", listHoverIn, false);
    item.addEventListener("mouseout", listHoverOut, false)
}
