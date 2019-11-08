var Links = {
  setColor:function (color){
    var alist = document. querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
    }

  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue'); // 디렉토리 폴더의 관점
     }
   }
//중괄호 있고 없고가 버그 여부를 좌우
//각 파일마다 논리가 동일해짐. 연관 코드들을 여러개 파일로 쪼개서 웹페이지 포함 .코드 정리정돈 효과.
//캐시 돈 시간 모두 적게. 물론 자바, 웹을 모두 브라우저가 켜줘야 한다.
