// JavaScript Document

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


setTimeout(() => {
  showTitle(0); 
  window.interval = setInterval(() => cycleTitle(), 4000)
}, 1000);

// Text Animation
let currentTitleIndex = 0;
const showTitle = (index) => {
 const span = document.querySelector(`.text-animation--${index}`);
  if (span) span.classList.add("text-animation--middle");
};

const hideTitle = (index) => {
  const span = document.querySelector(`.text-animation--${index}`);
  if (span) {
    span.classList.remove("text-animation--middle");
    span.classList.add("text-animation--up");
    
    setTimeout(() => {
      span.classList.remove("text-animation--up");
    }, 2000);
  }
};

const cycleTitle = () => {
  const span = document.querySelectorAll('.text-animation');
  hideTitle(currentTitleIndex);
  if ( currentTitleIndex === (span.length - 1) ) {
    currentTitleIndex = 0;
    clearInterval(interval)
  } else {
    currentTitleIndex++
  }
  // currentTitleIndex = currentTitleIndex === (span.length - 1) ? 0  : currentTitleIndex + 1;
  showTitle(currentTitleIndex);
};


// get elements
const body = document.body;
const progressBar = document.querySelector('.progress-bar');

function stretch() {
  const pixelScrolled = window.scrollY;
  const viewportHeight = window.innerHeight;
  const totalContentHeight = body.scrollHeight;
    
  // convert pixel to percentage 
  const pixelToPerc = (pixelScrolled / (totalContentHeight - viewportHeight)) * 100;
  
  // set width to the progress bar
  progressBar.style.width = Math.round(pixelToPerc) + '%';
}

// scroll event
window.addEventListener('scroll', stretch);
