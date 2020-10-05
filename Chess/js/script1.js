

$(function(){
$('a').draggable({containment:"#chess",revert:"invalid",revertDuation:1000, opacity: 0.5});
	
		$('td').droppable({
		    drop:function(ev,ui){
			var target=$(this);
			var source=ui.draggable;
		    var OldFigure=$(target).children().children('img').attr('class');
			if(OldFigure!=undefined)
			{
				
				if($(source).children().attr("class")==OldFigure)
				{
					$(source).draggable('option','revert',true);
					return;
				}
	         	
				var DeletedFigure=$(target).children();
				   $(DeletedFigure).draggable("destroy")	
				  $(DeletedFigure).detach().children().css({"width":"40px","height":"40px"}).appendTo($("#deletedFigure"));	
				   						
				    
			}						
			$(source).detach().css({top:0,left:0}).appendTo(target);//удаляет обьект из дома но сохраняем его в 
					
		}
			
		 		
	});
		
		
});