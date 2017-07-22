window.onload=function() {

	var timer=null,
	index=0,
	items=byId("nav").getElementsByTagName('div'),
	size=items.length,
	slides=byId("banner").getElementsByTagName('div'),
	bg=byId("bg");

	function byId (id) {
		return typeof(id)==="string"?document.getElementById(id):id;
	}

	// 设置timer
	function startAutoPlay(){
		timer=setInterval(function() {
			index++;
			if (index>=size) {
				index=0;
			};
			// 更改banner及nav-item
			console.log(index);
			changeElem();
		}, 1000);
	}
	// 清除timer
	function stopAutoPlay () {
		if (timer) {
			clearInterval(timer);
		};
	}

	// 元素滚动
	function changeElem(){
		for (var i = 0; i < size; i++) {
			items[i].className="nav-item";
			slides[i].style.display="none";
		};
		items[index].className="nav-item item-active";
		slides[index].style.display="block";
	}

	// 鼠标在bg区域
	bg.onmouseout = function() {
		startAutoPlay();
	};
	bg.onmouseover = function () {
		stopAutoPlay();
	}

	// nav-item 添加鼠标事件
	for (var i = 0; i < size; i++) {
		items[i].id=i;
		items[i].onmouseover = function () {
			index=this.id;
			console.log(index);
			changeElem();
			stopAutoPlay();
		}
	};

	startAutoPlay();

};
