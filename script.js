 $(window).scroll(function(){
    if ($(window).scrollTop()){
        $("nav").addClass("black");
        $(".navbar").addClass("navtit");
    }
    else{
        $("nav").removeClass("black");
        $(".navbar").removeClass("navtit");
        
  }
 });
 $(window.document.nav.div).scroll(function(){
    if ($(window).scrollTop()){
        $("div").addeClass("navtit");
    }
    else{
        $("div").removeClass("navtit");
        
  }
 });