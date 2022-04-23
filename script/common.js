// humberger-menuここから
    const humbergerIcon = document.querySelector('.humberger-menu-icon');
    const humbergerContent = document.querySelector('.humberger-menu-content');

    function humbergerIconClick() {
        humbergerIcon.classList.toggle('active');
        humbergerContent.classList.toggle('active');
    }

    humbergerIcon.addEventListener('click', humbergerIconClick, false);
// humberger-menuここまで






function listHoverIn(target) {
    target.classList.toggle("li-hover");
}

function listHoverOut(target) {
    target.classList.toggle("li-hover");
}

const siteMenuList = document.querySelectorAll(".site-menu li");
for (let item of siteMenuList) {
    item.addEventListener("mouseover", function() {
        listHoverIn(item);
    }, false);
    item.addEventListener("mouseout", function() {
        listHoverOut(item);
    }, false);
}