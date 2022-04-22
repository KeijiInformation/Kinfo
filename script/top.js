// 共通部分
// 項目の中央に内容を配置
// 要素の取得
const content_list = document.getElementsByClassName("information-box-content");
const box_list = document.getElementsByClassName("information-box");

// 各要素で計算→座標を指定
for ( let i=0; i<content_list.length; i++ ){
    let height_box = box_list[i].getBoundingClientRect().height;
    let height_content = content_list[i].getBoundingClientRect().height;
    let padding_space = window.innerHeight*0.05;
    let middle = (height_box - height_content)/2.0 - padding_space;
    content_list[i].style.margin = `${middle}px auto`;
}



// フェードインの実装
// 関数の定義
function fadein(entries){
    if( content_list.length==0 ){
        return;
    }else{
        if( entries[0].intersectionRatio==0 ){
            return;
        }else{
            entries[0].target.classList.add("show");
        }
    }
}

// オブザーバーの生成
let options = {
    threshold: 0.8
};
let observer = new IntersectionObserver(fadein, options);
for( let i=0; i<content_list.length; i++ ){
    observer.observe(content_list[i]);
};



// トップ要素のアニメーション
function top_anime(){
    const top_title = document.getElementById("top-text-title");
    const top_comment = document.getElementById("top-text-comment");
    top_title.animate({
        transform: ["translateX(-50px)", "translate(-30px)", "translate(-10px)", "translate(0px)"],
        opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]
    }, 1000);
    top_comment.animate({
        transform: ["translate(50px)", "translate(50px)", "translate(50px)", "translate(50px)", "translateX(50px)", "translate(30px)", "translate(10px)", "translate(0px)"],
        opacity: [0, 0, 0, 0, 0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1]
    }, 2000);
}
window.addEventListener("load", top_anime, false)



// その他の部分
// ハンバーガーメニュー-アイコン
function hamburger(){
    let line1 = document.getElementById("icon-line1")
    let line2 = document.getElementById("icon-line2")
    let line3 = document.getElementById("icon-line3")
    // 閉じるときの変化
    if ( line1.classList.contains("icon-line1-active") && line2.classList.contains("icon-line2-active") && line3.classList.contains("icon-line3-active") ){
        line1.animate({
            top: ["21px", "7px"],
            transform: ["rotate(45deg)", "rotate(0deg)"]
        }, 100, "swing");
        line2.animate({
            opacity: [0, 1]
        }, 100, "swing");
        line3.animate({
            bottom: ["21px", "7px"],
            transform: ["rotate(135deg)", "rotate(0deg)"]
        }, 100, "swing");
        line1.classList.toggle("icon-line1-active");
        line2.classList.toggle("icon-line2-active");
        line3.classList.toggle("icon-line3-active");
    // 開くときの変化
    }else{
        line1.animate({
            top: ["7px", "21px"],
            transform: ["rotate(0deg)", "rotate(45deg)"]
        }, 100, "swing");
        line2.animate({
            opacity: [1, 0]
        }, 100, "swing");
        line3.animate({
            bottom: ["7px", "21px"],
            transform: ["rotate(0deg)", "rotate(135deg)"]
        }, 100, "swing");
        line1.classList.toggle("icon-line1-active");
        line2.classList.toggle("icon-line2-active");
        line3.classList.toggle("icon-line3-active");
    }
}
document.getElementById("hamburger-icon").addEventListener("click", hamburger, false);

// ハンバーガーメニュー-メニュー
function menu_on(){
    let menu = document.getElementById("menu-content");
    menu.classList.toggle("on");
    menu.classList.toggle("off");
}
document.getElementById("hamburger-icon").addEventListener("click", menu_on, false);