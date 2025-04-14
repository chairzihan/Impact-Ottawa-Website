$(function() {
	var imgWidth = $("img").width(), imgIndex = 0, timer;
	// the next button effect function
	$(".next").on("click", function() {
		imgIndex++;
		$(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
		if (imgIndex >= $("img").length) {
			imgIndex = 0;
			$(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
		}
		$(".images").css({
			left: -imgWidth * imgIndex + "px"
		});
	});
	// the previos button effect function
	$(".prev").on("click", function() {
		if (imgIndex <= 0) {
			imgIndex = $("img").length;
		}
		imgIndex--;
		$(".images").css({
			left: -imgWidth * imgIndex + "px"
		});
		$(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
	});
	// the balls functions
	$(".ball").on("click", function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(".images").css({
			left: -imgWidth * $(this).index() + "px"
		});
	});
	// auto run
	function autoRun() {
		timer = setInterval(function() {
			imgIndex++;
			$(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
			if (imgIndex >= $("img").length) {
				imgIndex = 0;
				$(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
			}
			$(".images").css({
				left: -imgWidth * imgIndex + "px"
			});
		}, 4000);
	}
	autoRun();
	$(".next , .prev").on({
		mouseenter: function() {
			clearInterval(timer);
		},
		mouseleave: function() {
			autoRun();
		}
	});
});