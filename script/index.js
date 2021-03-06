// ロード時アニメーションここから

// 画面の非表示とスクロール禁止処理などここから
function widgetHidden() {
    const targetWidgets = document.querySelectorAll(
        "main > *:not(.catch-copy-animation, .bg-animation), header, footer"
    );
    for (let target of targetWidgets) {
        target.style.visibility = "hidden";
    }
    document.body.style.overflowY = "hidden";
}
// 画面の非表示とスクロール禁止処理などここまで

// タイピングここから
let loadDurationTyping;
function loadingAnimeTyping() {
    const typingTexts = document.querySelectorAll(
        ".catch-copy-animation h1 > span"
    );
    const typingLines = [...document.querySelectorAll(".typing-line")];
    let delay = 1,
        index = 0;
    for (let word of typingTexts) {
        let line = typingLines[index];
        let pastLine;
        if (index != 0) {
            pastLine = typingLines[index - 1];
        } else {
            pastLine = false;
        }
        word.style.animation =
            "typing-appear 0.2s linear " + delay + "s 1 normal both";
        if (index == 7) {
            delay += 1;
        }
        setTimeout(() => {
            line.classList.add("appear");
            line.style.animation =
                "typing-line-blink 1s steps(1, jump-start) 0s infinite";
            word.classList.add("appear");
            if (pastLine != false) {
                pastLine.classList.remove("appear");
            }
        }, delay * 1000);
        delay += 0.08;
        index++;
        loadDurationTyping = delay + 0.2;
    }
}
// タイピングここまで

// 背景アニメーションここから
function bgAnimation() {
    const bgArea = document.querySelector(".bg-animation");
    bgArea.style.animation =
        "bg-animation 3s ease-in-out " +
        (loadDurationTyping - 1) +
        "s 1 normal both";
}
// 背景アニメーションここまで

// クロスフェード処理ここから
function loadingAnimeCrossfade() {
    const typedTextBox = document.querySelector(".catch-copy-animation");
    setTimeout(() => {
        typedTextBox.style.animation =
            "fadein 2s ease-in-out 0s 1 reverse both";
    }, (loadDurationTyping + 0.5) * 1000);
}
// クロスフェード処理ここまで

// 全要素表示ここから
function loadingAnimeAppearAll() {
    const mainWidgets = document.querySelectorAll(
        "main > *:not(.catch-copy-animation, .bg-animation)"
    );
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    setTimeout(() => {
        for (let widget of mainWidgets) {
            if (widget.classList.contains("first-view-text")) {
                continue;
            }
            widget.style.visibility = "unset";
            widget.style.animation = "fadein 2s ease-in-out 0s 1 normal both";
        }
        header.style.visibility = "unset";
        header.style.animation = "fadein 2s ease-in-out 0s 1 normal both";
        footer.style.visibility = "unset";
        footer.style.animation = "fadein 2s ease-in-out 0s 1 normal both";
        document.body.style.overflowY = "scroll";
    }, (loadDurationTyping + 2) * 1000);
    setTimeout(() => {
        header.style.animation = "unset";
    }, (loadDurationTyping + 4) * 1000);
}
// 全要素表示ここまで

function loadingAnimeSwitch() {
    window.onload = function () {
        widgetHidden();
        loadingAnimeTyping();
        bgAnimation();
        loadingAnimeCrossfade();
        loadingAnimeAppearAll();
        calcWorksImgHeight();
    };
}

loadingAnimeSwitch();

// ロード時アニメーションここから

// 要素の取得ここから
const imgCircles = [...document.querySelectorAll(".img-area .img-circle")];
const sectionTexts = [
    ...document.querySelectorAll(
        ".main-section:not(works) .main-section-content p"
    ),
];
// 要素の取得ここまで

// インターセクションのコールバック関数ここから
function setActiveClass(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}
// インターセクションのコールバック関数ここまで

// オブザーバーの設定ここから
options = {
    threshold: 0.5,
};
observer = new IntersectionObserver(setActiveClass, options);
imgCircles.forEach(function (imgCircle) {
    observer.observe(imgCircle);
});
sectionTexts.forEach(function (sectionText) {
    observer.observe(sectionText);
});
// オブザーバーの設定ここまで

// worksの画像の高さを計算ここから
function calcWorksImgHeight() {
    const worksImgList = document.querySelectorAll(".works-list .img-area img");
    for (let worksImg of worksImgList) {
        let imgHeight = worksImg.clientHeight;
        let imgArea = worksImg.parentNode;
        imgArea.style.height = String(imgHeight) + "px";
    }
}
// worksの画像の高さを計算ここまで
