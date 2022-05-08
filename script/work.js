// ポップアップ時にスクロール固定する処理
function fixBackground(event) {
    // event.preventDefault();
}
// ポップアップ時にスクロール固定する処理

// ポップアップボタントリガーここから
const viewMoreBtnList = document.querySelectorAll(".button-area");

function viewMorePopupOpen(target) {
    let bgCoverBox = document.querySelector(".bg-cover-box");
    let workMoreArea = document.querySelector(".work-more-area");
    let closeBtn = document.querySelector(".close-button");

    let targetClassName = target.className.split(" ")[1];
    let targetDOM = document.querySelector(
        ".work-more-contents." + targetClassName
    );
    bgCoverBox.classList.add("open");
    workMoreArea.classList.add("open");
    targetDOM.classList.add("open");
    closeBtn.classList.add("open");
}

for (let viewMoreBtn of viewMoreBtnList) {
    viewMoreBtn.addEventListener(
        "click",
        function () {
            viewMorePopupOpen(viewMoreBtn);
            document.addEventListener("touchmove", fixBackground, {
                passive: false,
            });
            document.addEventListener("mousewheel", fixBackground, {
                passive: false,
            });
        },
        false
    );
}
// ポップアップボタントリガーここから

// ポップアップクローズここから
const popupCloseBtn = document.querySelector(".close-button");
const bgCoverBox = document.querySelector(".bg-cover-box");

function popupClose() {
    let bgCoverBox = document.querySelector(".bg-cover-box");
    let workMoreArea = document.querySelector(".work-more-area");
    let closeBtn = document.querySelector(".close-button");
    let targetDOM = document.querySelector(".work-more-contents.open");
    bgCoverBox.classList.remove("open");
    workMoreArea.classList.remove("open");
    targetDOM.classList.remove("open");
    closeBtn.classList.remove("open");
}

popupCloseBtn.addEventListener(
    "click",
    function () {
        popupClose();
        document.removeEventListener("touchmove", fixBackground, {
            passive: false,
        });
        document.removeEventListener("mousewheel", fixBackground, {
            passive: false,
        });
    },
    false
);
bgCoverBox.addEventListener(
    "click",
    function () {
        popupClose();
        document.removeEventListener("touchmove", fixBackground, {
            passive: false,
        });
        document.removeEventListener("mousewheel", fixBackground, {
            passive: false,
        });
    },
    false
);
// ポップアップクローズここまで
