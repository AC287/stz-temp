//javascript functions
// console.log('Javascript is running');

jQuery(document).ready(function($) {
  // console.log("TEST");
  //Adding responsive class to header navigation.
  $('.header-navicon').click(function(){
    var x = $('#header-rnav').attr('class').split(' ');
    // console.log(x.length);
    if(x.length===1){
      $('#header-rnav').addClass('responsive');
    }
    else {
      $('#header-rnav').removeClass('responsive');
    }
  })

  /* - - - index page - - - */

  // $('.index-midcategory').on('click', function(){
  //   var currentSelection = $(this).attr('data-target').split('#')[1];
  //   $('.index-midcategory-contents').each(function(i,obj){
  //     // console.log(currentSelection);
  //     // console.log($(this).attr('id'));
  //     if($(this).attr('id')!=currentSelection){
  //       $(this).collapse('hide');
  //     }
  //   })
  // })


  function classSplit(x){
    var mainclass=x.split(' ');
    return mainclass;
  }


// --- THIS IS FOR ACCORDION BUTTON SECTION ---

// source: https://codepen.io/brenden/pen/Kwbpyj
$('.custaccordion img').click(function(e){
  var $this = $(this).parent().parent();
  if($this.next().hasClass('show')){
    $this.next().removeClass('show');
    $this.find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-right.png');
    $this.next();
  } else {
    // $this.parent().find('.panel').removeClass('show');
    // console.log('Else section. Find parent panel and removeClass show');
    $this.find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-right.png');
    // $this.parent().find('.panel').slideUp(350);
    // console.log('Else section. Find parent panel and slideup.');
    $this.next().toggleClass('show');
    $this.find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-down.png');
    $this.next();
  }
});

$('.productaccordion-mobilemenu').click(function(){
  var x = $('.cat-bar').attr('class').split(' ');
  // console.log(x.length);
  if(x.length===1){
    $('.cat-bar').addClass('responsive');
    $('.productaccordion-mobilemenu span').removeClass('glyphicon-plus');
    $('.productaccordion-mobilemenu span').addClass('glyphicon-minus');

  }
  else {
    $('.cat-bar').removeClass('responsive');
    $('.productaccordion-mobilemenu span').removeClass('glyphicon-minus');
    $('.productaccordion-mobilemenu span').addClass('glyphicon-plus');
  }
})

var paramCounter = 0;

var m0param = getURLparam('m0');
paramCountFunction(m0param);

var s1param = getURLparam('s1');
paramCountFunction(s1param);

var s2param = getURLparam('s2');
paramCountFunction(s2param);

var s3param = getURLparam('s3');
paramCountFunction(s3param);

var s4param = getURLparam('s4');
paramCountFunction(s4param);

// console.log(s2param);
// console.log(paramCounter);

var m0paramInner = '.m0-'+m0param;
var s1paramInner = '.s1-'+s1param;
var s2paramInner = '.s2-'+s2param;
var s3paramInner = '.s3-'+s3param;
var s4paramInner = '.s4-'+s4param;
/*
  This is for current active section.
*/

if(m0param) {

  // $(m0paramInner).next().toggleClass('show');
  $('.m0i-'+m0param).toggleClass('show');


  $(m0paramInner).find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-down.png');
}

if(s1param) {

  $('.s1i-'+s1param).toggleClass('show');

  $(s1paramInner).find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-down.png');
}

if(s2param) {

  $('.s2i-'+s2param).toggleClass('show');

  $(s2paramInner).find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-down.png');
}

if(s3param) {

  $('.s3i-'+s3param).toggleClass('show');

  $(s3paramInner).find('img').attr('src','https://storage.codacambridge.com/files/icons/chev-down.png');
}

// if(s4param) {
//
//   $('.s4i-'+s4param).toggleClass('show');
//
//   $(s4paramInner).children('img').attr('src','https://storage.codacambridge.com/files/icons/chev-down.png');
// }

switch(paramCounter) {
  //This will highlight current selection.
  case 1:
    $(m0paramInner).css({
      // 'background-color':'#e5e5e5',
      'background-color':'#f2f2f2',
    })
  break;
  case 2:
    $('.m0i-'+m0param+' '+s1paramInner).css({
      'background-color':'#f2f2f2',
      // 'background-color':'#e5e5e5',
    })
  break;
  case 3:
    $('.m0i-'+m0param+' '+'.s1i-'+s1param+' '+s2paramInner).css ({
      'background-color':'#f2f2f2',
      // 'background-color':'#e5e5e5',
    })
  break;
  case 4:
    $('.m0i-'+m0param+' '+'.s1i-'+s1param+' '+'.s2i-'+s2param+' '+ s3paramInner).css ({
      'background-color':'#f2f2f2',
      // 'background-color':'#e5e5e5',
    })
  break;
  case 5:
    $('.m0i-'+m0param+' '+'.s1i-'+s1param+' '+'.s2i-'+s2param+' '+ '.s3i-'+s3param+' '+s4paramInner).css ({
      'background-color':'#f2f2f2',
      // 'background-color':'#e5e5e5',
    })
  default:
  break;
}


function paramCountFunction(x){
  if(x){
    return paramCounter++;
  } else {
    return paramCounter;
  }
}

function getURLparam(sParam) {
  /*
    source: http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
    source: https://stackoverflow.com/questions/3431512/javascript-equivalent-to-phps-urldecode
  */
  // console.log(sParam);

  var sPageURL = decodeURIComponent(window.location.search.substring(1));
  // console.log(sPageURL.search("&s1="));
  var m0, s1, s2, s3, s4;

  if(sPageURL) {

    switch (sParam) {
      case "m0":
        //This is for m0. s1 exist in url param.
        //Split s1, take array position 0, split array position 0 from m0 and take array position 1.
        //Then regex replace special character and return value.
        //If none exist, return 0.
        if(sPageURL.search("&s1=") > -1) {
          m0 = sPageURL.split("&s1=")[0].split("m0=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return m0;
        } else if (sPageURL.search("m0=") > -1) {
          m0 = sPageURL.split("m0=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return m0;
        } else {
          return;
        }
      break;
      case "s1":
        if(sPageURL.search("&s2=") > -1) {
          s1 = sPageURL.split("&s2=")[0].split("&s1=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s1;
        } else if (sPageURL.search("&s1=") > -1){
          s1 = sPageURL.split("s1=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s1;
        } else {
          return;
        }
      break;
      case "s2":
        if(sPageURL.search("&s3=") > -1) {
          s2 = sPageURL.split("&s3=")[0].split("&s2=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s2;
        } else if(sPageURL.search("&s2=") > -1){
          s2 = sPageURL.split("s2=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s2;
        } else {
          return;
        }
      break;
      case "s3":
        if(sPageURL.search("&s4=") > -1) {
          s3 = sPageURL.split("&s4=")[0].split("&s3=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s3;
        } else if(sPageURL.search("&s3=") > -1){
          s3 = sPageURL.split("&s3=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s3;
        } else {
          return;
        }
      break;
      case "s4":
        if(sPageURL.search("&s4=") > -1) {
          s4 = sPageURL.split("&s4=")[1].replace(/[^a-zA-Z0-9]/g, '');
          return s4;
        } else {
          return;
        }
      break;
      default:
      break;
    }

  } else {
    return;
  }


}


// - - - PRODUCT PS2 PAGE - - -
// source: cssglobe.com/lab/tooltip/03/
$('a.ipt').hover(function(e) {
  //This function run when mouse hover.
  xOffset = 10;
  yOffset = 30;
  var iptName = ".ipt-"+this.className.split('ipt ')[1];
  // var iptName = this.className.split('ipt ')[1];
  // var iptName = (iptName.split(/[^A-Za-z0-9]/)).join('');
  // console.log(iptName);
  $(iptName)
          .css("display","block")
          .css("top",(e.pageY - xOffset) + "px")
          .css("left",(e.pageX + yOffset) + "px")
          .fadeIn("fast");
}, function (){
  //This function run when mouse hover out.
  var iptName2 = ".ipt-"+this.className.split('ipt ')[1];
  $(iptName2).css("display","none");
});
$('a.ipt').mousemove(function(e) {
  var iptName3 = ".ipt-"+this.className.split('ipt ')[1];
  $(iptName3)
      .css("top",(e.pageY - xOffset) + "px")
      .css("left",(e.pageX + yOffset) + "px");
});

// --- THIS IS FOR PRODUCT MAIN PAGE ---
var displayExtra = $('.display-extra');
// var prodChev = $('.show-hide .sh-chev img');
var i;
for (i=0; i< displayExtra.length; i++) {
  displayExtra[i].onclick = function () {
    var currentStatus = this.innerHTML.split(' ');
    if (currentStatus[0] == 'SHOW') {
      currentStatus[0] = 'HIDE';
      currentStatus.splice(1,1);
      this.innerHTML = currentStatus.join(' ');
      // This toggle chevron icon.
      $(this).closest('div').children().children().attr('src','https://storage.codacambridge.com/files/icons/chev_up_blue.png');
    }
    else {
      currentStatus[0] = 'SHOW';
      currentStatus.splice(1,0,'ALL');
      this.innerHTML = currentStatus.join(' ');
      // This toggle chevron icon.
      $(this).closest('div').children().children().attr('src','https://storage.codacambridge.com/files/icons/chev_down_blue.png');
    }
    var displayAll = $('.'+this.classList[1]);
    displayAll.each(function(index,object){
      if(($(this).css('display'))=='none'){
        $(this).css('display','block');
      }
      else if (($(this).css('display')=='block') && $(this).hasClass('extra-box')){
        $(this).css('display','none');
      }
    })
  }
  // displayExtra[i].onclick = function () {
  //
  // }
}

/* - - - PRODUCT MAIN PAGE FLEX WRAP SCRIPT - - - */
var $s1BoxFlexContainer = $('.s1-box-flex-container');
// console.log($s1BoxFlexContainer.length);
for(var j=0; j<$s1BoxFlexContainer.length; j++){
  // console.log($($s1BoxFlexContainer[j]).children().length)
}

// --- THIS IS FOR ITEM PAGE ---
var imgThumb = $('.single-thumb');
// console.log($('.main-view-lg'));
// console.log($('.main-view-lg').length);
imgThumb.click(function(){
  // console.log(this.className.split(' ')[1]);
  var getClickedClass = this.className.split(' ')[1].split('-')[1];
  // console.log(getClickedClass);
  $('.main-view-lg').each(function(index,object){
    // console.log(index);
    $(this).css('display','none');
  })
  var curThumbDisplay = '.img-content-box .main-' + getClickedClass;
  $(curThumbDisplay).css('display','block');
})
var ipClickedImg = $('.main-view-lg');
ipClickedImg.click(function(){
  // var getMainClickedClass=this.className.split(' ')[1].split('-')[1];
  var getMainClickedClass='.modal-'+this.className.split(' ')[1].split('-')[1];
  // console.log(getMainClickedClass);
  $('.ip-modal').css('display','block');
  $(getMainClickedClass).css('display','block');
})
$('.ip-close').click(function(){
  $('.ip-modal').css('display','none');
  $('.ip-slides').css('display','none');
})


// - - - #replace this with slick plugin (fail. need revision) - - -

var clickToNext = $('.ip-slides');
// console.log(clickToNext.length);
clickToNext.click(function(){
  var getClickedIndex = parseInt(this.className.split(' ')[1].split('-')[1].split('img')[1]);
  var nextIndex = getClickedIndex+1;
  // console.log(getClickedIndex);
  var curClass = $('.modal-img'+getClickedIndex);
  // console.log(curClass);
  curClass.css('display','none');

  if($('.modal-img'+nextIndex).length!=0){
    $('.modal-img'+nextIndex).css('display','block');
    // console.log('inner if executed.');
  } else {
    // console.log('else executed.');
    for(var i=nextIndex; i < 10; i++){
      // console.log(i);
      if(i == 9) {
        i = 0;
      }
      if($('.modal-img'+i).length!=0){
        // console.log(i);
        $('.modal-img'+i).css('display','block');
        break;
      }
    }
  }

})

/* // - - - Slick code for modal section - - - */
// $('.ip-modal-content').slick({
//   // dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

/*
- - - TEAM PAGE - - -
*/

// $('.team-crop').click(function(){
//   var displayingPerson = '.team-'+$(this).attr('id');
//   // console.log($(this).attr('id'));
//   $('.team-modal').css('display','block');
//   $(displayingPerson).css('display', 'block');
//
//   $('.team-close').click(function(){
//     $('.team-modal').css('display','none');
//     $(displayingPerson).css('display','none');
//   })
// })

//
// $('.team-salesmanager-each img').bind({
//   mouseenter: function(){
//     var currState = '#'+$(this).attr('class').split('-')[2]+' .cls-1';
//     $(currState).css({
//       // 'transform':'scale(1.5)',
//       'fill':'rgb(112, 189, 255)',
//     })
//   },
//   mouseleave: function(){
//     // var currState = '#'+$(this).attr('class').split(' ')[1].split('-')[2]+' .cls-1';
//     $('.cls-1').css({
//       'fill':'#036',
//     })
//   }
// });


/* - - - CAREER EXPAND SECTION - - - */
$('.career-open-expand a').click(function(){

  var clickedclass = '.'+$(this).attr('id');

  $(clickedclass).css('display','block');

  $('.career-close').click(function(){
    $('.career-modal').css('display','none');
    $(displayingPerson).css('display','none');
  })
})

/* - - - catalog initial load - - - */
$('.catalog-custbtn').each(function(index){
  var currentClass = '.'+$(this).children('input').attr('id');
  if($(this).hasClass('active')){
    // var activeClass = '.'+ $(this).children('input').attr('id');
    $(currentClass).show();
  } else {
    $(currentClass).hide();
  }
});
/* - - - catalog click effect - - - */
$('.catalog-custbtn').click(function(){
  // console.log($(this).children('input').attr('id'));
  var clickedClass = $(this).children('input').attr('id');
  $('.catalog-thumbinner').each(function(index){
    // console.log(index+" "+clickedClass);
    if($(this).hasClass(clickedClass)){
      $('.'+clickedClass).show();
    } else {
      $(this).hide();
    };
  })

});

/* - - - Pressing ESC will reset everything - - - */
$(document).keydown(function(e){
  // console.log(e);
  if(e.keyCode==27){  //this listen for "ESC" key.
    $('.ip-modal').css('display','none');
    $('.ip-slides').css('display','none');
    $('.team-modal').css('display', 'none');
    $('.team-modal-content').css('display','none');
    $('.career-modal').css('display','none');
  }
})

/* - - - tradeshows page archive height - - - */
checkSize();
$(window).resize(checkSize);

function checkSize() {
  var alltradeshowsSize = $('.tradeshowspage').height()+'px';
  $('.tradeshows-archive-col').css('min-height', alltradeshowsSize);

  if($('.tradeshows-archive-col').css('float')=='none') {
    // console.log(alltradeshowsSize);
    $('.tradeshows-archive-col').css('min-height','100%');
  }
}

/* - - - slick plugin - - - */

  $('.img-thumbnail-section').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  });

})

// console.log('JS is fully functional.');
