$(document).ready(function(){
    
    $(".tab2-quienes").hide();
    $(".tab3-quienes").hide();
    
    
    $('#mision').click(function(){        
        $(".tab-quienes").removeClass('active');
        $(this).addClass('active');
        $('.con-tabs-quienes').hide();
        $('.tab1-quienes').show(200);
    });
    
    $('#vision').click(function(){        
        $(".tab-quienes").removeClass('active');
        $(this).addClass('active');
        $('.con-tabs-quienes').hide();
        $('.tab2-quienes').show(200);
    });
    
    $('#valores').click(function(){        
        $(".tab-quienes").removeClass('active');
        $(this).addClass('active');
        $('.con-tabs-quienes').hide();
        $('.tab3-quienes').show(200);
    });
    
    
});