//Rojo8399 API Login

const url = "/api/v1/api.php";
const home = "/home";


function api_login() {

    $('.loginPopup').addClass('ready');
    
}

$(document).ready(function(){
    
    $("#main_login").submit(function(login) {
        login.preventDefault();
        
        const $errorMsg = $('#errorMsg');
        $errorMsg.hide();
        
        const loginData = {
            "jsonrpc": "2.0",
            "id": Math.round(Math.random() * (999999 - 100000) + 100000),
            "method": "User.login",
            "params": {
                "email": $('#main_login input[name=email]').val(),
                "password": $('#main_login input[name=password]').val(),
            }
        };
        
        $.post(url, JSON.stringify(loginData), function(response) {
            if (response.error) {
                $errorMsg.find(".error-msg").text(response.error.message);
                $errorMsg.show();
            } else if (response.result.authy) {
                session_id = response.result.session_id
                authy_login = response.result.authy;
                $("#main_login").hide();
                $("#authy").show();
            } else {
                //They are logged in!
                location.href = home;
            }
        }, "json");
        
    });
});


function bodyReady(val) {
    if (val == 1) {
        $('.body-wrap-2').css('opacity', '1');
    }
    if (val === 0) {
        $('.body-wrap-2').css('opacity', '0');
    }
}

$(document).ready(function(){
    bodyReady(1);
});

$(function(){
    
    $('.m_forumlatestthreads .thread .element_avatar img').each(function(e) {
        var base = $(this).attr('src');
        var src = base.replace('small', 'large');
        $(this).attr('src', src);
    });
    
    var baseTitle = $('.m_membersonline .element_smalltitle .mask').text();
    
        $('.m_membersonline .element_smalltitle .mask').each(function(b, bt) {
            var newTitle = baseTitle.split(' ');
                newerTitle = newTitle[2].replace('(', '');
                newestTitle = newerTitle.replace(')', '');
            $('.m_membersonline .element_smalltitle .mask').html('Online Users<span>' + newestTitle + '</span>');
        });
    
    $(window).scroll(function(){
       if ($(window).scrollTop() >= 300 ) {
           $('.top-nav .left').removeClass('noshow');
       } else {
           $('.top-nav .left').addClass('noshow');
       }
    });
    
   $('#layers').prependTo('.body-wrap-2'); 
   $('#cFooter').appendTo('.body-wrap-2');
   
   $('.bottom-nav a, .top-nav .left .nav a').each(function(l, li) {
       
       var loc = location.pathname.split('/'); 
           loc2 = "/" + loc[1];
       
        if ($(li).attr('href') == loc2) {
            $(li).find('li').addClass('active');
        }
        if (loc2 == '/') {
            $('.bottom-nav a:first-child').find('li').addClass('active');
            $('.top-nav .left .nav a:first-child').find('li').addClass('active');
        }
        
    });
    var loc = location.pathname.split('/'); 
       loc2 = "/" + loc[1];
    
    if (loc2 == '/home' || loc2 == '/') {
        $('#section-main').prepend('<div class="m_banner"><img src="http://puu.sh/qzdw2/d0c8687d2d.gif" /></div>');
    }
    
    $('a[href="#top"]').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
    
    var user = EnjinAPIHelper.user.getCurrent();
    
    $('#layers .status button').click(function(){
       $(this).parents('.status').find('.ip').slideToggle(300); 
    });
    
    $('.m_forum.viewthread .profile .tag span, .v2_system_social .widget_tags_awards .tag span').each(function(id, key) {
        var style = $(this).attr('style');
        var colour = style.split(':')[1];
        $(this).parents('.tag').css('background-color', colour);
        $(this).parents('.tag').addClass($(this).text());
    });
    
    /*$('#layers .top-nav .right.user .dropbox').hide();
    
    $('#layers .top-nav .right.user').hover(function(){
        $(this).children('.dropbox').fadeToggle(300);
    });
    */
   
});


$(function(){  


    if (location.hostname != "www.layersmc.com") {
        console.error('Go home, you\'ve stolen my code. ' + document.location.hostname + " has been automatically reported.");
        //$('.m_html').remove();
    }
    

var modules=[
{
    module: "m_forumlatestthreads",
    icon: "fa-list"
},
{
    module: "m_news, #news",
    icon: "fa-newspaper-o"
},
{
    module: "m_shoutbox",
    icon: "fa-exclamation"
},
{
    module: "m_forum",
    icon: "fa-book"
},
{
    module: "m_forumtopposter",
    icon: "fa-comments-o"
},
{
    module: "m_forumtoplikes",
    icon: "fa-star"
},
{
    module: "ts3-tree",
    icon: "fa-microphone"
}

];
   
$.each(modules, function(){
$('.'+this.module+'').parents('.container').find('.header_text_text').addClass(this.module).prepend('<i class="fa '+this.icon+'"></i>');


}); 
}); 
