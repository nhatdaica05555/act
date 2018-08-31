$(document).ready(function(){

  $('.schedule-btn').hover(function (e) { 
    e.preventDefault();
    link = $('.schedule-btn > img')
    if(link.attr('src').includes("off")){
      link.attr("src", link.attr('src').replace('_off','_on'));
    }else{
      link.attr("src", link.attr('src').replace('_on','_off'));
    }
  });

  $('#modal-theme').click(function (e) { 
    e.preventDefault();
    e.stopImmediatePropagation();
  });

  $('.over-theme').click(function (e) { 
    e.preventDefault();
    $('.over-theme').css('display', 'none');
  });

  $('.pop_close_btn02').click(function (e) { 
    e.preventDefault();
    $('.over-theme').css('display', 'none');
  });

  $('.item a').click(function (e) { 
    e.preventDefault();
    linkImg = $(this).children('img').attr('src')
    //set link img for modal
    // theme04_button01 --> theme04_images01-01
    theme1 = linkImg.replace('button','image')
    theme1 = theme1.slice(0,linkImg.length-5)+'-01'+'.png'
    theme2 = linkImg.replace('button','image')
    theme2 = theme2.slice(0,linkImg.length-5)+'-02'+'.jpg'
    $('.theme-img1').attr('src' , theme1)
    $('.theme-img2').attr('src' , theme2)
    $('.over-theme').css('display', 'block');
  });
});