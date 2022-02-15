const delayTime = 100;
const scrollAnimation = function() {
    
    // classを追加する要素を取得:配列
    let targetElements = document.querySelectorAll('.target');
    // classを追加する位置を設定(ビューポート内)
    let triggerPosition = Math.floor(window.innerHeight * 0.75);

    // 要素の数だけ処理をループ
    for (let i = 0; i < targetElements.length; i++) {
        
        // ターゲット要素の上辺のY座標を取得する
        let offsetTop = Math.floor(targetElements[i].getBoundingClientRect().top);
        // ターゲット要素の上部がtriggerPositionを通過したら、ターゲット要素にclassを追加する
        if (offsetTop < triggerPosition) {
            setTimeout(() => {
                targetElements[i].classList.add('is-active');
            }, i * delayTime);
        }
    }
};

window.addEventListener('scroll', scrollAnimation, false);