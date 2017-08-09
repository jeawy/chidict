

     
     jQuery(document).ready(function ($) {
            var width = $('.container')[0].clientWidth-30; 
            var height = 0;
            if (width > 900)
            {
                 $('#echarts-map').css({'width':'650px', 'height':'450px'});
                 $('#main').css({'width':'500px', 'height':'300px'});
                 height =  width/3;
            }
            else{
                 height = width/2 - 50;
                 $('#echarts-map').css({'width':'450px', 'height':'350px'});
                 $('#main').css({'width':'380px', 'height':'200px'});
            }
            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
           
            /*responsive code end*/
        });