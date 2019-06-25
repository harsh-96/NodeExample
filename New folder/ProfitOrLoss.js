5tv  exports.calculation=function(sPrice,bPrice,qty){
	var pl = sPrice-bPrice;
	var tpl = pl * qty;
	if(pl>0){
		return {profitOrLoss:'Profit', total: tpl};
	}
	else{
		tpl=tpl*(-1);
		return {profitOrLoss:'Loss', total: tpl};
	}
}