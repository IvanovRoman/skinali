var $j = jQuery.noConflict();
  $j(document).ready(function(){
    $j.fn.bindImageLoad = function (callback) {
        function isImageLoaded(img) {
            // Во время события load IE и другие браузеры правильно
            // определяют состояние картинки через атрибут complete.
            // Исключение составляют Gecko-based браузеры.
            if (!img.complete) {
                return false;
            }
            // Тем не менее, у них есть два очень полезных свойства: naturalWidth и naturalHeight.
            // Они дают истинный размер изображения. Если какртинка еще не загрузилась,
            // то они должны быть равны нулю.
            if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            // Картинка загружена.
            return true;
        }

        return this.each(function () {
            var ele = $j(this);
            if (ele.is("img") && $j.isFunction(callback)) {
                ele.one("load", callback);
                if (isImageLoaded(this)) {
                    ele.trigger("load");
                }
            }
        });
    };




$j('#top-type input').on('change', function() {
	var imgUrl = $j('input[name=radio-set]:checked', '#top-type').val();
   $j(".top img").attr('src', '/modules/mod_skinali/assets/img/parts/top' + imgUrl + '.png');
   $j(this).parent().toggle(200);
});

$j('#compt-type input').on('change', function() {
	var imgUrl = $j('input[name=radio-set]:checked', '#compt-type').val();
   $j(".compt img").attr('src', '/modules/mod_skinali/assets/img/parts/compt' + imgUrl + '.png');
   $j(this).parent().toggle(200);
});

$j('#bottom-type input').on('change', function() {
	var imgUrl = $j('input[name=radio-set]:checked', '#bottom-type').val();
   $j(".bottom img").attr('src', '/modules/mod_skinali/assets/img/parts/bottom' + imgUrl + '.png');
   $j(this).parent().toggle(200);
});






$j('#fartuk-color input').on('change', function() {
	var imgUrl = $j('input[name=radio-set]:checked', '#fartuk-color').val();
   $j(".fartuk img").attr('src', '/modules/mod_skinali/assets/img/fart/solid' + imgUrl + '.png');
   $j('#fartuk-type input').attr('checked', false);
});

$j("#choose-kitchen div p").click(function() {
$j(this).next().toggle(200);
});

$j(':checkbox').change(function() {
  if($j(this).is(":checked")) {
  $j('.main-image .light').css("visibility","visible");
  } else {
  $j('.main-image .light').css("visibility","hidden");
  }
});

 $j('#mycarousel').jcarousel({
        scroll: 6
    });


$j(function() {

  $j('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $j(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($j(this).index()).addClass('active');
  });

});


$j("#mycarousel").find('a').click(function(event){
      event.preventDefault();
      $j('.active_cat').removeClass('active_cat');
      $j(".show_this").remove();
      $j(".header_list_cat").empty();
      $j(this).addClass('active_cat');
      var idthis = $j(this).attr("id"),
          header_cat = $j(this).html(),
          new_idthis = 'list_i_'+idthis;
      $j(".header_list_cat").text(header_cat); 
      $j(".header_list_cat").after("<div id='"+new_idthis+"' class='show_this'> </div>");
      $j.ajax({  
                url: location.href+'?tmpl=component&gcat='+idthis,
				success: function(html){  
				h=$j(html).find('.show_this');
                    $j(".show_this").html(h);  
                }  
            });
      
     });

    $j(".show_this").find('img').live("click", function(){
      $j('.this_skinali_active').removeClass('this_skinali_active');
      $j(this).addClass('this_skinali_active');
      var img_bg = $j(this).attr('src');
      $j(".fartuk img").attr('src', img_bg);

    });



    $j(".bt_id_ok").click(function(){
      var search_this=$j('#f_id').val(),
           t_cat
          function past_load()
          {
            $j("img.big_i").bindImageLoad(function () {
                                            
              var img_bg2 = $j('#f'+search_this).attr('src');
              $j(".fartuk img").attr('src', img_bg2);
              $j('.ul_load_img').scrollTo('#f'+search_this);
              $j('.this_skinali_active').removeClass('this_skinali_active');
              $j('#f'+search_this).addClass('this_skinali_active');
              $j(".header_list_cat").empty();
              var header_cat = $j('.active_cat').html();
              $j(".header_list_cat").text(header_cat);

                                        });
          }
function choice_of_script(t_cat)
          {
            $j.ajax({  
                url: "contructor/"+t_cat+".php",   
                success: function(html_sub){  
                    $j(".show_this").html(html_sub);
                     past_load();
                }  
            });
            $j('.active_cat').removeClass('active_cat');
            $j("#"+t_cat).addClass('active_cat');                         
          }


var lcs = location.href.split('?');

      $j.ajax({
          type: "POST",
          url: lcs[0]+'?tmpl=component&gsearch='+ search_this,
          data: "maska="+search_this,
          success: function(html2){  
 				h=$j(html2).find('.show_this');
                    $j(".show_this").html(h);  
                   }
        });
      });
});

