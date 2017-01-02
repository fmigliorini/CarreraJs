$.widget("com.damas",{
	_create : function(){
		//Box
		this._box = $("<div>");
		this._box.attr("class","box");

		//PIECES
		this._piece = $("<div>");
		this._piece.attr("class","piece");

		//Generate Lines
		this._line1 = $("<div>");
		this._line2 = $("<div>");
		this._line3 = $("<div>");
		this._line4 = $("<div>");
		this._line5 = $("<div>");
		this._line6 = $("<div>");
		this._line7 = $("<div>");
		this._line8 = $("<div>");

		//Generate Lines
		this.generateOddLinePiece(this._line1,"red");
		this.generatePairLinePiece(this._line2,"red");
		this.generateOddLinePiece(this._line3,"red");
		this.generatePairLine(this._line4);
		this.generateOddLine(this._line5);
		this.generatePairLinePiece(this._line6,"blue");
		this.generateOddLinePiece(this._line7,"blue");
		this.generatePairLinePiece(this._line8,"blue");
		
		//Generate Board
		this._table = $("<div>");
		this._table.attr("id","boardDamas");
		
		//Append Lines on Board
		this._table.append(this._line1);
		this._table.append(this._line2);
		this._table.append(this._line3);
		this._table.append(this._line4);
		this._table.append(this._line5);
		this._table.append(this._line6);
		this._table.append(this._line7);
		this._table.append(this._line8);

		this._game = $("<div>");
		this._game.attr("id","game");

		this._game.append(this._table);

		this.element.append(this._game);

		$(".piece").each(function(i){
			//CENTER ALL PIECE
			$(this).position({
				my:"center", 
				at:"center", 
				of: $(this).parent()
			});
			//DRAGGABLE ALL PIECE
			$(this).draggable({ 
				grid: [ 50, 50 ],
				containment:  $(this).closest("#game")
			});				
		});	
	},

	generateOddLinePiece : function(line,color){
		for(var i=0; i<4; i++){
			line.append(this._box.clone().css("background-color","black"));
			line.append(this._box.clone().css("background-color","white").append(this._piece.clone().css("background-color",color)));
		}
	},

	generatePairLinePiece : function(line,color){
		for(var i=0; i<4; i++){
			line.append(this._box.clone().css("background-color","white").append( this._piece.clone().css("background-color",color)));
			line.append(this._box.clone().css("background-color","black"));
		}
	},

	generateOddLine : function(line){
		for(var i=0; i<4; i++){
			line.append(this._box.clone().css("background-color","black"));
			line.append(this._box.clone().css("background-color","white"));
		}
	},

	generatePairLine : function(line){
		for(var i=0; i<4; i++){

			line.append(this._box.clone().css("background-color","white"));
			line.append(this._box.clone().css("background-color","black"));
		}
	}

})