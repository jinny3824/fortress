var Links = {
   atagcolor:function(color) {
       //var atag = document.querySelectorAll('a');
      //var i = 0;
      //while(i < atag.length){
      //atag[i].style.color = color;
     //i = i + 1;
     $('a').css('color',color);


    }
  }


var body = {
  setbodycolor:function(color) {
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
  },
  setbodytextcolor:function (color) {
       //document.querySelector('body').style.color = color;
       $('body').css('color',color);
  }

}


function buttonctrl(self){
  var Target = document.querySelector('body');
if(self.value==='blackmode'){
   body.setbodycolor('gray');
body.setbodytextcolor('white');
  self.value ='whitemode';

  Links.atagcolor('powderblue');
  }

  else{
   body.setbodycolor('white');
  body.setbodytextcolor('black');
  self.value='blackmode';

Links.atagcolor('black');
}

}
