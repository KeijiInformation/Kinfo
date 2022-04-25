// ポップアップボタントリガーここから
    const viewMoreBtnList = document.querySelectorAll(".button-area");

    function viewMorePopupOpen(target) {
        let bgCoverBox = document.querySelector(".bg-cover-box");
        let workMoreArea = document.querySelector(".work-more-area");

        let targetClassName = target.className.split(" ")[1];
        let targetDOM = document.querySelector(".work-more-contents." + targetClassName);
        bgCoverBox.classList.add("open");
        workMoreArea.classList.add("open");
        targetDOM.classList.add("open");
    }

    for (let viewMoreBtn of viewMoreBtnList) {
        viewMoreBtn.addEventListener("click", function() {
            viewMorePopupOpen(viewMoreBtn);
        }, false);
    }
// ポップアップボタントリガーここから






// ポップアップクローズここから
    const popupCloseBtn = document.querySelector(".close-button");
    const bgCoverBox = document.querySelector(".bg-cover-box");

    function popupClose() {
        let bgCoverBox = document.querySelector(".bg-cover-box");
        let workMoreArea = document.querySelector(".work-more-area");
        let targetDOM = document.querySelector(".work-more-contents.open");
        bgCoverBox.classList.remove("open");
        workMoreArea.classList.remove("open");
        targetDOM.classList.remove("open");
    }

    popupCloseBtn.addEventListener("click", popupClose, false);
    bgCoverBox.addEventListener("click", popupClose, false);
// ポップアップクローズここまで
