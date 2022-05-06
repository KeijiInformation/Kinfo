// ロード時アニメーションここから

    // タイピングここから
    let loadDurationTyping;
    const typingTexts = document.querySelectorAll(".catch-copy-animation h1 > span");
    const typingLines = [...document.querySelectorAll(".typing-line")];
    let delay=1, index=0;
    for (let word of typingTexts) {
        let line = typingLines[index];
        let pastLine;
        if (index != 0) {
            pastLine = typingLines[index-1];
        } else {
            pastLine = false;
        }
        word.style.animation = "typing-appear 0.2s linear " + delay + "s 1 normal both";
        if(index == 7) {
            delay += 1;
        }
        setTimeout(() => {
            line.classList.add("appear");
            line.style.animation = "typing-line-blink 1s steps(1, jump-start) 0s infinite";
            word.classList.add("appear");
            if (pastLine != false) {
                pastLine.classList.remove("appear");
            }
        }, delay*1000);
        delay += 0.08;
        index++;
    }
    loadDurationTyping = delay + 0.2;
    // タイピングここまで

    // クロスフェード処理ここから
    const typedTextBox = document.querySelector(".catch-copy-animation");
    const firstViewText = document.querySelector(".first-view-text");
    const firstViewSubText = document.querySelectorAll(".first-view-text p");
    setTimeout(() => {
        typedTextBox.style.animation = "fadein 2s ease-in-out 0s 1 reverse both";
    }, loadDurationTyping*1000);
    // クロスフェード処理ここまで

    // 全要素表示ここから
    const mainWidgets = document.querySelectorAll("main > *:not(.catch-copy-animation)");
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
    }, (loadDurationTyping+1)*1000);
    // 全要素表示ここまで

// ロード時アニメーションここから






// 要素の取得ここから
const imgCircles = [...document.querySelectorAll(".img-area .img-circle")];
const sectionTexts = [...document.querySelectorAll(".main-section:not(works) .main-section-content p")];
// 要素の取得ここまで






// インターセクションのコールバック関数ここから
function setActiveClass(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    })
}
// インターセクションのコールバック関数ここまで






// オブザーバーの設定ここから
options = {
    threshold: 0.5,
};
observer = new IntersectionObserver(setActiveClass, options);
imgCircles.forEach(function(imgCircle) {
    observer.observe(imgCircle);
});
sectionTexts.forEach(function(sectionText) {
    observer.observe(sectionText);
});
// オブザーバーの設定ここまで
