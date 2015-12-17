$(function(){
	var windowHight = $(window).height()*0.6;
	 
	$('.goods-img-wrap').css({'height':windowHight+'px'});
	$('.goods-img-wrap .img-wrap').css({'height':windowHight+'px'});

	

	
	// 点击数量div
	$('.conunt-box').click(function(){
		$(' .cunent-bot .abc-gouwu li.abcg-che').removeClass('hide'); //显示加入购物按钮
		$('.add-box .abc-gouwu li').css({'width':48+'%'});//加入购物按钮的宽度为48%

		var PwindowHight = $(window).height();//屏幕的高度
		var documentHeight = $(document).height(); //文档的高度
		var scrollTop = $(document).scrollTop(); //滚动条到顶部的高度

		var divTop = PwindowHight + scrollTop - 260;
		$('.add-num').css({'height':documentHeight+'px'}); //遮罩层
		$('.add-box').css({'top':divTop+'px'});// 隐藏层距离顶部的高度
		
		$(this).parent('.price-parent').siblings('.add-num').removeClass('hide');
		$(this).parent('.price-parent').siblings('.add-box').removeClass('hide');
	})
	
	$('a.add-shopcar').click(function(){

		 var PwindowHight = $(window).height();//屏幕的高度
		 var documentHeight = $(document).height(); //文档的高度
		 var scrollTop = $(document).scrollTop(); //滚动条到顶部的高度

		 var divTop = PwindowHight + scrollTop - 260;

		 $('.add-num').css({'height':documentHeight+'px'}); //遮罩层
		 $('.add-box').css({'top':divTop+'px'});// 隐藏层距离顶部的高度
		 
		  $('.add-num').removeClass('hide');
		 $('.add-box').removeClass('hide');

		 $(' .cunent-bot .abc-gouwu li.abcg-che').addClass('hide');//隐藏加入购物按钮
		 $('.add-box .abc-gouwu li').css({'width':100+'%'});//确认购买按钮的宽度为100%
		 // alert(divTop)
		 // $(this).parents('.bottom-gouwu').siblings('.add-box').removeClass('hide');
	})
	// 点击遮罩层
	$('.add-num').click(function(){
		$(this).siblings('.add-box').addClass('hide');
		$(this).addClass('hide');
	})
	// 点击关闭按钮
	$('span.delete').click(function(){
		// alert(123)
		$(this).parents('.add-box').addClass('hide');
		$(this).parents('.add-box').siblings('.add-num').addClass('hide');
	})
	// 点击数量div === end
	// 购物车商品增减	
	// 增 
	$('.cl-ul .goodsjia').click(function(){

		var goodssl =parseInt( $('.goodssl').text() );// 当前购物车商品的数量

		goodssl++;
		if(goodssl>nowkucun){
			goodssl==nowkucun;
			return goodssl;
		};
		
		var nowkucun = parseInt( $('.kucun').text() );// 图片旁边当前库存

		nowkucun--;
		if(nowkucun<0){
			nowkucun==0;
			goodssl==goodssl;
			return nowkucun;
			return goodssl;
		}
		$('.goodssl').text(goodssl); //按钮旁边的数字

		$('.cunent-num').text(goodssl);//图片旁边的数字 增加后的

		$('.kucun').text(nowkucun); //当前库存

		$('.conunt .con').text(goodssl);//外层的数量

	})
	// 减
	$('.cl-ul .goodsjian').click(function(){
		var goodssl =parseInt( $('.goodssl').text() );// 当前购物车商品的数量

		goodssl--;

		if(goodssl<0){
		 	goodssl==0;
		 	return goodssl;
		 };

		$('.goodssl').text(goodssl);

		$('.cunent-num').text(goodssl);//图片旁边的数字

		var nowkucun = parseInt( $('.kucun').text() );// 图片旁边当前库存
		nowkucun++;//当前库存++
		 
		$('.kucun').text(nowkucun); //当前库存

		$('.conunt .con').text(goodssl);//外层的数量
	});
	// 购物车商品增减====end

	// 优惠信息
	var short_cur =$('.yb-short'); //显示的内容
	var long_cur =$('.yb-lang'); //隐藏的内容

	short_cur.click(function(){
		short_cur.slideUp();
		long_cur.slideDown();
	});
	long_cur.click(function(){
		long_cur.slideUp();
		short_cur.slideDown();
	});
	 // 图文信息
	 var lis = $('.tuwen-xq ul li');
	 // var childbox =('.tuwen-child .child-box')
	 lis.click(function(){
	 	var index = $(this).index();
	 	$(this).addClass("click-bg").siblings("li").removeClass("click-bg");
	 	var left = index * 33.33;
	 	// alert(left)
	 	$(this).siblings(".bar").css({"left":left+'%'})
	 	$(this).parent("ul").siblings(".tuwen-child").find(".child-box").eq(index).addClass("cb-show").siblings(".child-box").removeClass("cb-show");

	 })

	 // 购物车页面
	 $('.shop-top #all').click(function(){
	 	if(this.checked){
	 		$('#sc-list :checkbox').attr("checked",true);
	 		$('.sc-delete').removeClass("hide");
	 		 
	 	}else{
	 		$('#sc-list :checkbox').attr("checked",false);
	 		$('.sc-delete').addClass("hide");
	 		 
	 	}
	 })
	// 结算页面
	$('.cuxiao .cuxiao-t').click(function(){
		$(this).siblings('.cuxiao-btn').toggleClass('hide')
	})
})