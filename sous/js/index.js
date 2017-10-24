$(function(){
    //菜单点击
    J_iframe
    $(".J_menuItem").on('click',function(){
        var url = $(this).attr('href');
        $("#J_iframe").attr('src',url);
        return false;
    });

    $(".J_menuItem").each(function () {
    	var t = $(this).attr('href').length > 0 ? true : false;
    	if(!t){
    		$(this).parent().addClass('disabled');
    	};
    });
    
});