
// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
function SmoothTextAnime() {
	$('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
		}else{
		$(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
		}
		});	
}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述