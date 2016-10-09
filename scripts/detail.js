$(function(){
	// 搜索框文字效果
	$('#inputSearch').focus(function(){
		if($(this).val() == this.defaultValue){
			$(this).val('').css('color','#000')
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).val(this.defaultValue).css('color','#eee');
		}
	}).keyup(function(e){
		if (e.which == 13) {
			$('button').trigger('click');
		}
	})

	// 头部导航效果
	$('.mainNav .nav li').hover(function(){
		$(this).find('.jnNav').show();
	},function(){
		$(this).find('.jnNav').hide();
	})

	//图片切换
	$('#jnProitem .imgList li a').mouseover(function(){
		var imgSrc = $(this).find('img').attr('src')
		$('.jqzoomWrap img').attr('src',imgSrc)
	})

	//商品简介tab
	$('#jnTab .tabMenu li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$('.tabBox div').eq($(this).index()).addClass('current').siblings().removeClass('current');
	})
})