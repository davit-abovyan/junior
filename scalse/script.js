$(document).ready(function(){
    
    $('a.butn').click(function(){ // to zoom and reverse
        var img = $('#myImg');
        var imgScale=parseInt(img.data('img_scale'));
        var clickCase = $(this).attr('id');
        switch(clickCase){
            case "zoomIn":
                ++imgScale;
                break;
            case "zoomOut":
                if(imgScale > 1){
                    --imgScale;
                    break;
                }
            default: imgScale=1;
        }
        console.log(imgScale);
        img.data('img_scale',imgScale);
        img.css({
          '-webkit-transform' : 'scale(' + imgScale + ',' + imgScale + ')',
          '-moz-transform'    : 'scale(' + imgScale + ',' + imgScale + ')',
          '-ms-transform'     : 'scale(' + imgScale + ',' + imgScale + ')',
          '-o-transform'      : 'scale(' + imgScale + ',' + imgScale + ')',
          'transform'         : 'scale(' + imgScale + ',' + imgScale + ')'
        });        
       
    });
});