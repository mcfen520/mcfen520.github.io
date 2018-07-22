$(document).ready(function() { 
	$(".foot .cer").on("click","img",function(){
		$(".shade").show();
		
		var file="/images/"+$(this).attr("name");
		$(".cerPop img").attr("src",file);
		var ml=($(".cerPop img").width())/2;
		$(".cerPop").css({"marginLeft":"-"+ml+"px"});
		$(".cerPop").fadeIn();
	})
	$(".cerPop").on("click",function(){
		$(".shade").hide();
		$(".cerPop").hide();
	})

	// 头部导航
	$('.product').hover(function(){
		$('.productBox').show();
	},function(){
		$('.productBox').hide();
	})
	$('.Suggest').hover(function(){
		$('.SuggestBox').show();
	},function(){
		$('.SuggestBox').hide();
	})
	$('.as_regards').hover(function(){
		$('.as_regardsBox').show();
	},function(){
		$('.as_regardsBox').hide();
	})


	// 页脚qq滑动
	$(".footWechat").hover(function(){
		$(this).find('img').css('display','block');
	},function(){
		$(this).find('img').css('display','none');
	})
});

