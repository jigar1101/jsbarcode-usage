JsBarcode("#barcode1", "Hi!");

JsBarcode("#barcode2", "9780199532179", {
	format:"EAN13",
	displayValue:true,
	fontSize:24,
	lineColor: "#0cc"
  });

 JsBarcode("#barcode3", "9780199532179", {
	format:"EAN13",
	displayValue:true,
	fontSize:20
});

var repeat4 = function(){
	var date = new Date();
	JsBarcode("#barcode4",
			date.getHours().zeroPadding() + ":" +
			date.getMinutes().zeroPadding() + ":" +
			date.getSeconds().zeroPadding(),
		{displayValue: true});
};
setInterval(repeat4,1000);
repeat4();

var repeat5 = function(){
	JsBarcode("#barcode5", Math.floor(1000000+Math.random()*9000000)+"",{displayValue:true,fontSize:20});
};
setInterval(repeat5,500);
repeat5();