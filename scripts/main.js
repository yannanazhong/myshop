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

	//广告轮播
	var num = 0,//控制图片索引号
		numJ = 0,//控制角标索引号
		$left = 0,
		timer = null;
	$('#imgAd li').mouseover(function(){
		// num = $(this).index(); 没有做无缝动画时加这句
		numJ = $(this).index();
		num = numJ;
		$left = -num*550;

		$('#JS_imgWrap').stop().animate({left:$left},400);
		$(this).addClass('selected').siblings().removeClass('selected');
	})
	//广告自动播放
	timer = setInterval(autoPlay,4000);
	function autoPlay(){
		num++;
		if(num>5){
			num = 1;
			$('#JS_imgWrap').css('left','0');
		}

		numJ++;
		if(numJ>4){numJ=0}

		$left = -num*550;
		$('#JS_imgWrap').stop().animate({left:$left},400);
		$('#imgAd li').eq(numJ).addClass('selected').siblings().removeClass('selected');
	}
	//鼠标移上离开开启关闭定时器
	$('#jnImageroll').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,4000);
	})
	
	//超链接提示效果 .jnNoticeInfo
	$('.jnNoticeInfo a').mouseover(function(e){
		this.myTitle = this.title;
			this.title = "";
			var tooltip = '<div id="tooltip">'+this.myTitle+'</div>'
			$(tooltip).appendTo('body');
			$('#tooltip').css({'top':e.pageY+10 + 'px','left':e.pageX+10 +'px'})
		}).mouseout(function(){
			$('#tooltip').remove();
			this.title = this.myTitle;
		}).mousemove(function(e){
			$('#tooltip').css({'top':e.pageY+10 + 'px','left':e.pageX+10 +'px'})
		})

	//品牌活动轮播效果
	$('#jnBrandTab li').click(function(){
		$(this).find('a').addClass('current')
			.end()
			.siblings().find('a').removeClass();

		var idx = $(this).index();
		// console.log(idx)
		var $rollobj = $('#jnBrandList');
		var rollWidth = -idx * 780;
		$rollobj.animate({'left':rollWidth},1000)
	})
	/*$('#jnBrandTab li').hover(function(){
		$(this).find('span').css('bottom','0');
	},function(){
		$(this).find('span').css('bottom','-24px')
	})*/
})
