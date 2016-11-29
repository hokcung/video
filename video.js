$(function(){
  let arrPauseTime=[1.758,8,20,25];

  let vEle=$('#v1').get(0);
  let btn=true;

  vEle.ontimeupdate=function(){
    if(btn && vEle.currentTime>=arrPauseTime[0]){
      vEle.pause();
      window.setTimeout(function(){
        arrPauseTime.shift();
        btn=true;
        vEle.play();
      },3000);
      btn=false;
    }
  };

});
