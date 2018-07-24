$(document).ready(function(){

    $('.info-tab2').hide();
    $('.infos-tab2').hide();
    $('.infos-tab4').hide();
    $('.tab2').hide();
    
    $('#info-tab1').click(function(){
        $('.tab-info').removeClass('active');
        $(this).addClass('active');
        $('.infos-tab2').hide();
        $('.infos-tab1').show(200);
    });
    
    $('#info-tab2').click(function(){
        $('.tab-info').removeClass('active');
        $(this).addClass('active');
        $('.infos-tab1').hide();
        $('.infos-tab2').show(200);
    });
    
     $('#info-tab3').click(function(){
        $('.tab-info').removeClass('active');
        $(this).addClass('active');
        $('.infos-tab4').hide();
        $('.infos-tab3').show(200);
    });
    
    $('#info-tab4').click(function(){
        $('.tab-info').removeClass('active');
        $(this).addClass('active');
        $('.infos-tab3').hide();
        $('.infos-tab4').show(200);
    });
    
    $('#tab-1').click(function(){
        $('.tab').removeClass('active');
        $('.tab-info').removeClass('active');
        $('#info-tab1').addClass('active');
        $(this).addClass('active');
        $('.tab2').hide();
        $('.tab1').show(200);
        $('.infos-tab2').hide();
        $('.infos-tab1').show(200);
        
    });
    
     $('#tab-2').click(function(){
        $('.tab').removeClass('active');
        $('.tab-info').removeClass('active');
        $('#info-tab3').addClass('active');
        $(this).addClass('active');
        $('.tab1').hide();
        $('.tab2').show(200);
        $('.infos-tab4').hide();
        $('.infos-tab3').show(200);
        
    });
    
});