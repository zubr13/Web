	var blockWrapper = $(".catalog .block-wrapper");
	
	for( var i = 0; i < products.jamper.length; i++){

		blockWrapper.append('<div class="block"> \
					<img src="img/'+products.jamper[i].img+'" alt=""> \
					<h2>'+products.jamper[i].name+'</h2> \
					<span class="description">'+products.jamper[i].description+'</span> \
					<span class="price">'+products.jamper[i].price+' грн</span> \
					<button onclick="addToBasket('+ i +')">В корзину</button> \
			</div> \
		');
	}

	var cartWrapper = $("#cart_content"),
		counterItem = 0,
		counterPrice = 0,
		array = [],
		helpArray = [],
		value = localStorage.getItem("id") || 0;
	
	var helpArray = value.split(",");

	for(var i = 0; i < helpArray.length; i++){
		cartWrapper.append(' \
			<div class="block"> \
					<img src="img/'+products.jamper[helpArray[i]].img+'" alt=""> \
					<h2>'+products.jamper[helpArray[i]].name+'</h2> \
					<span class="description">'+products.jamper[helpArray[i]].description+'</span> \
					<span class="price">'+products.jamper[helpArray[i]].price+' грн</span> \
			</div> \
		');
		counterItem++;
		counterPrice += parseInt(products.jamper[helpArray[i]].price);
		increaseData(counterItem, counterPrice);
	}


	for(var i = 0; i < helpArray.length; i++){
		array.push(helpArray[i]);
	}

	function addToBasket(id){
		
		array.push(id);
		localStorage.setItem("id", array);
		cartWrapper.append(' \
			<div class="block"> \
					<img src="img/'+products.jamper[id].img+'" alt=""> \
					<h2>'+products.jamper[id].name+'</h2> \
					<span class="description">'+products.jamper[id].description+'</span> \
					<span class="price">'+products.jamper[id].price+' грн</span> \
			</div> \
		');
		counterItem++;
		counterPrice += parseInt(products.jamper[id].price);
		increaseData(counterItem, counterPrice);
	}

	function increaseData(counterItem, counterPrice){
		$("#item").text(counterItem + " товарів");
		$("#price").text(counterPrice + " грн");
		$("#prod").text(counterItem);
		$(".prices .price").text(counterPrice);
	}

	function clearBasket(){
		array = [];
		counterItem = 0;
		counterPrice = 0;
		localStorage.setItem("id", array);
		cartWrapper.html("")
		$("#item").text(0 + " товарів");
		$("#price").text(0 + " грн");
		$("#prod").text("0");
		$(".prices .price").text("0");
	}
	
	function buyItem(){
		array = [];
		counterItem = 0;
		counterPrice = 0;
		localStorage.setItem("id", array);
		cartWrapper.html("");
		$("#item").text(0 + " товарів");
		$("#price").text(0 + " грн");
		$("#prod").text("0");
		$(".prices .price").text("0");
	}

