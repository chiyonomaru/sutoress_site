//SVGの初期設定

var logoVivus1;//SVG設定


//SVG初期設定
function VivusInit(){
	logoVivus1 = new Vivus('logo',
		{
			start: 'autostart',//アニメーションの自動再生
            duration: 100 , //アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
			type: 'scenario',// アニメーションのタイプを設定
			pathTimingFunction: Vivus.EASE,//動きの加速減速設定
		},
		function(obj){
			$("#logo").attr("class", "done");//描画が終わったらdoneというクラスを追加
		}
	);
	logoVivus1.stop();		
}



//スクロールをしたらSVGが出現する設定
function VivusAnime(){
	//スクロールをしたら1つめのSVG id="logo"が出現する設定
	var elemPos = $("#logo").offset().top - 50;//要素より、50px上の位置まで来たら出現
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus1.play(1);//描画される速さ。数が大きくなるほど速い
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	VivusAnime();/* SVGアニメーション用の関数を呼ぶ*/
});
// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	VivusInit(); //SVG初期設定
	VivusAnime();/* SVGアニメーション用の関数を呼ぶ*/
});
// ここまで画面が読み込まれたらすぐに動かしたい場合の記述