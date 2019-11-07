sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	 "tab/tableControl/Formatter/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("tab.tableControl.controller.FirstView", {
		
		formatter:formatter,
		onInit: function () {
      var oModel = new JSONModel("model/products.json");
			this.getView().setModel(oModel); 
		},
		onAfterRendering:function(){
	
		this.getView().byId("idProductsTable").getItems().forEach(function(item,index){
		
				if(item.getCells()[3].getText() === "Available"){
					item.getCells()[3].addStyleClass("green");
				}
			//	else{
			//			item.getCells()[3].addStyleClass("red");
					
			//	}
			}); }
	});
});