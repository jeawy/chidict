

     
     jQuery(document).ready(function ($) {
            var width = $('.container')[0].clientWidth-30; 
            var height = 0;
             
                 height = width/2 - 50;
                 $('#echarts-map').css({'width':'360px', 'height':'300px'});
                 $('#echarts-main').css({'width':'360px', 'height':'240px'});
             
            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
           
            /*responsive code end*/
        });