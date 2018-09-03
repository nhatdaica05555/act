$(document).ready(function(){


  $('#modal-theme').click(function (e) { 
    e.preventDefault();
    e.stopImmediatePropagation();
  });

  $('.over-theme').click(function (e) { 
    e.preventDefault();
    $('.over-theme').fadeOut();
  });

  $('.pop_close_btn02').click(function (e) { 
    e.preventDefault();
    // $('.over-theme').fadeDown();
    $('.over-theme').fadeOut();
  });

  $('.item a').click(function (e) { 
    e.preventDefault();
  });

  $('.has-content').click(function (e) { 
    e.preventDefault();
    linkImg = $(this).attr('src')
    //set link img for modal
    // theme04_button01 --> theme04_images01-01
    theme1 = linkImg.replace('button','image')
    theme1 = theme1.slice(0,linkImg.length-5)+'-01'+'.png'
    theme2 = linkImg.replace('button','image')
    theme2 = theme2.slice(0,linkImg.length-5)+'-02'+'.jpg'
    $('.theme-img1').attr('src' , theme1)
    $('.theme-img2').attr('src' , theme2)
    $('.over-theme').fadeIn()
  });

  $('.hover-off-on').hover(function(e){
    e.preventDefault();
    getSrc = $(this).attr('src')
    if (getSrc.includes('_off')){
      $(this).attr('src' , getSrc.replace('_off', '_on'))
    }else{
      $(this).attr('src' , getSrc.replace('_on', '_off'))
    }
  })
});