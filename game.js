$('document').ready(function () {
	// init canvas lol
	var canvas = document.getElementById("canv");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 5;

	// gameplay state
	var gameRunning = true;

	// chess square thing
	var Block = function (x, y, piece) {
		this.x = x;
		this.y = y;
		this.piece = piece;
	}

	// draw chess square function
	Block.prototype.drawBlock = function () {
		var x = this.x;
		var y = this.y;
		ctx.strokeRect(x, y, 100, 100);
	}

	// the setting up the board part of the board ig
	var setBoard = function () {
		this.segments = [];
		blockX = 0;
		blockY = 0;
		while (this.segments.length != 64) {
			if (blockX != 800) {
				if (blockY != 800) {
					this.segments.push(new Block(blockX, blockY, "null"));
					blockX += 100;
				}
			} else {
				blockY += 100;
				blockX = 0;
			}
		}
		console.log(this.segments);
	}
	// drawing pieces
	var drawPiece = function (piece, x, y, id) {
		
		this.piece = this.pieces[piece];
                var x = x;
                var y = y;

                var pieceElement = $(this.piece);
		pieceElement.attr('id', id);
		pieceElement.attr('onclick', "movePiece(" + "'" + id + "'" + ")");
		console.log(pieceElement);

                pieceElement.css({
                        position: "absolute",
                        width: 100,
                        height: 100,
                        margin: 8,
                        left: x,
                        top: y
                });

                $("body").append(pieceElement);

		for (var i = 0; i < this.segments.length; i++) {
			if (x == this.segments[i]['x'] && y == this.segments[i]['y']) {
				this.segments[i]["piece"] = piece;
				console.log(this.segments);
			}
		}
	}
	
	// setting the pieces
	var setPieces = function () {
		this.pieces = {bBishop: "<img class='bb' src='../chess-web/pieces/bb.svg'>", bKing: "<img class='bk' src='../chess-web/pieces/bk.svg'>", bKnight: "<img class='bn' src='../chess-web/pieces/bn.svg'>", bPawn: "<img class='bp' src='../chess-web/pieces/bp.svg'>", bQueen: "<img class='bq' src='../chess-web/pieces/bq.svg'>", bRook: "<img class='br' src='../chess-web/pieces/br.svg'>", wBishop: "<img class='wb' src='../chess-web/pieces/wb.svg'>", wKing: "<img class='wk' src='../chess-web/pieces/wk.svg'>", wKnight: "<img class='wn' src='../chess-web/pieces/wn.svg'>", wPawn: "<img class='wp' src='../chess-web/pieces/wp.svg'>", wQueen: "<img class='wq' src='../chess-web/pieces/wq.svg'>", wRook: "<img class='wr' src='../chess-web/pieces/wr.svg'>"};

		
		
		// top row (black)
		//r n b q k b n r
		drawPiece("bRook", 0, 0, 'br1');
		drawPiece("bKnight", 100, 0, 'bn1');
		drawPiece("bBishop", 200, 0, 'bb1');
		drawPiece("bQueen", 300, 0, 'bq');
		drawPiece("bKing", 400, 0, 'bk');
		drawPiece("bBishop", 500, 0, 'bb2');
		drawPiece("bKnight", 600, 0, 'bn2');
		drawPiece("bRook", 700, 0, 'br2');
		
		// second row (still black but all pawns)
		
		var lX = 0;
		var pieceID = "";
		
		for (var i = 0; i < 8; i++) {
			drawPiece("bPawn", lX, 100, "bPawn" + i);
			lX = lX + 100;
		}

		// bottom row (white)
                //r n b q k b n r
                drawPiece("wRook", 0, 700, 'wr1');
                drawPiece("wKnight", 100, 700, 'wn1');
                drawPiece("wBishop", 200, 700, 'wb1');
                drawPiece("wQueen", 300, 700, 'wq');
                drawPiece("wKing", 400, 700, 'wk');
                drawPiece("wBishop", 500, 700, 'wb2');
                drawPiece("wKnight", 600, 700, 'wn2');
                drawPiece("wRook", 700, 700, 'wr2');
		
		// second row from bottom (still white but all pawns)
		lX = 0;
		for (var i = 0; i < 8; i++) {
			drawPiece("wPawn", lX, 600, "wPawn" + i);
			lX += 100;
		}

	}

	// drawing the board
	var drawBoard = function () {
		// draw the edge of the board
		ctx.lineWidth = 10;
		ctx.strokeRect(0, 0, 800, 800);
		ctx.lineWidth = 5;
		for (var i = 0; i < this.segments.length; i++) {
			this.segments[i].drawBlock();
		}
	}
	// stuff for moving the pieces
	var movePiece = function (id) {
		console.log("You clicked " + id);	
	}


	setBoard();
	drawBoard();
	setPieces();
});
