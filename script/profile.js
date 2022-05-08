// 背景画像サイズ計算ここから
function resizeBgImg() {
    let profileBoxWidth = document.querySelector(".profile-box").clientWidth;
    let profileBoxList = document.querySelectorAll(
        ".profile-box:not(.about-programming)"
    );
    let bgImageHeight;
    if (profileBoxWidth < 800) {
        bgImageHeight = (profileBoxWidth * 5) / 3;
    } else {
        bgImageHeight = (profileBoxWidth * 2) / 3;
    }
    for (let profileBox of profileBoxList) {
        profileBox.style.height = String(bgImageHeight) + "px";
    }
}

window.addEventListener("load", resizeBgImg, false);
window.addEventListener("resize", resizeBgImg, false);
// 背景画像サイズ計算ここまで

// スキルチャートここから
const skillChart = document.querySelector("#skill-chart");

// 引数設定ここから
function makeChartOption(title) {
    scales = {
        r: {
            min: 0,
            max: 5,
            ticks: { stepSize: 1 },
        },
    };

    let options = {
        title: {
            display: true,
            text: title,
        },
        scales: scales,
    };

    return options;
}
// 引数設定ここまで

let langChart = new Chart(skillChart, {
    type: "radar",
    data: {
        labels: ["Python", "HTML･CSS", "JavaScript", "PHP"],
        datasets: [
            {
                label: "言語",
                data: [4, 3, 1, 1],
                backgroundColor: "rgba(97,255,125,0.3)",
                borderColor: "rgba(0,0,0,0.5)",
                borderWidth: 1,
                pointBackgroundColor: [
                    "rgba(59,83,255,0.4)",
                    "rgba(255,59,59,0.4)",
                    "rgba(240,255,59,0.4)",
                    "rgba(191,59,255,0.4)",
                ],
            },
        ],
    },
    options: makeChartOption("各言語の修得状況"),
});
// スキルチャートここまで

// 言語ボタンここから
const langBtnList = document.querySelectorAll(".icon-area li");
const detailFooterDesignList = document.querySelectorAll(
    ".detail-footer-design"
);

// メイン処理
function langBtnClick(target) {
    let detailTarget;
    let activeClassName;

    // active -> none (targetの切り替えのみでよい)
    if (target.classList.contains("active")) {
        target.classList.remove("active");

        // 説明枠の取得とオープンここから
        activeClassName = target.className.split(" ")[0];
        detailTarget = document.querySelector(
            ".language-detail-content" + "." + activeClassName
        );
        detailTarget.classList.remove("active");
        // 説明枠の取得とオープンここまで

        // 説明枠フッターのアニメーションここから
        detailFooterDesign = document.querySelectorAll(
            ".language-detail-content" +
                "." +
                activeClassName +
                " .detail-footer-design"
        );
        for (let item of detailFooterDesign) {
            item.classList.remove("active");
        }
        // 説明枠フッターのアニメーションここまで

        // none -> active (targetの切り替えと他要素のremoveが必要)
    } else {
        for (langBtn of langBtnList) {
            if (langBtn.classList.contains("active")) {
                langBtn.classList.remove("active");

                // 説明枠の取得とクローズここから
                activeClassName = langBtn.className.split(" ")[0];
                detailTarget = document.querySelector(
                    ".language-detail-content" + "." + activeClassName
                );
                detailTarget.classList.remove("active");
                // 説明枠の取得とクローズここまで

                // 説明枠フッターのアニメーションここから
                detailFooterDesignTargets = document.querySelectorAll(
                    ".language-detail-content" +
                        "." +
                        activeClassName +
                        " .detail-footer-design"
                );
                for (let item of detailFooterDesignTargets) {
                    item.classList.remove("active");
                }
                // 説明枠フッターのアニメーションここまで
            }
        }
        // 説明枠の取得とオープンここから
        target.classList.add("active");
        activeClassName = target.className.split(" ")[0];
        detailTarget = document.querySelector(
            ".language-detail-content" + "." + activeClassName
        );
        detailTarget.classList.add("active");
        // 説明枠の取得とオープンここまで

        // 説明枠フッターのアニメーションここから
        detailFooterDesignTargets = document.querySelectorAll(
            ".language-detail-content" +
                "." +
                activeClassName +
                " .detail-footer-design"
        );
        for (let item of detailFooterDesignTargets) {
            item.classList.add("active");
        }
        // 説明枠フッターのアニメーションここまで
    }
}

for (let langBtn of langBtnList) {
    langBtn.addEventListener(
        "click",
        function () {
            langBtnClick(langBtn);
        },
        false
    );
}
// 言語ボタンここまで
