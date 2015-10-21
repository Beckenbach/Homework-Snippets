var receiptItems = [3.22, 5.44, 3.50, 3.20, 16.34, 9.98, 10.00, 0.48]; 
var produce = [.34,.56,.56,3.4];
var taxRate = .75;
var subTotal = 0;


function priceItems(list) {
	for (var i = 0; i < list.length; i++){
		document.write(list[i].toFixed(2)+"<br />");
	 }
}

printItems(receiptItems);
document.write("<br />");

function calcSubtotal(list){
	for(var i = 0; i < list.length; i++){
			subtotal = subtotal + list[1];
	}
}

calcSubtotal(receiptItems);

function calculateTotal(subtotal, tax) {
	var taxAmount = (subtotal * tax);
	document.write("Tax: $"+taxAmount.toFixed(2) +"<br>");
	document.write("Total: $"+(subtotal+taxAmount).toFixed(2));
}
  
calculateTotal(subtotal, taxRate)