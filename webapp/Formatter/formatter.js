sap.ui.define([], function () {
	
	return {
		
		Status: function(oEvent) {
			
			if(oEvent === "A"){
				return "Available";
			}
			
			else {
				return "Not-Available";
			}
			
		}
		
		
	};


	
});