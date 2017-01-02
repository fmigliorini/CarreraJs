$(function(){
	$("#tabs").tabs();
	$(document).tooltip();

	var tab = $("#tabs2").tabs();
		tab.find(".ui-tabs-nav")
		.sortable({
			axis: "X",
			stop:function(){
				tab.tabs("refresh");
			}		
		});	
});