// Window幅に応じたメニュー表示の変更
$(function (){
function ShowAndHide(win){
  if(win > 800){
    $("#button").show();
    $("#lists").hide();
  }else{
    $("#button").hide();
    $("#lists").show();
  }
}


  // 初めてページを開いた時の状態チェック
  var win =$(window).width();
  ShowAndHide(win)

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function(){
    var win = $(window).width();
    ShowAndHide(win);
  });

  // メニューボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});
