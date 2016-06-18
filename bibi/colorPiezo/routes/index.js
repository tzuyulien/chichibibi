var express = require('express');
var router = express.Router();

var pixel = require("node-pixel");
var five = require("johnny-five");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip1 = null;
var strip2 = null;

var isPlaying = false;

/* GET home page. */
board.on("ready", function() {

	var led = new five.Led(13);
	led.blink();
	var piezo = new five.Piezo(3);
	strip = new pixel.Strip({
	    board: this,
	    controller: "FIRMATA",
	    strips: [ {pin: 6, length: 16}, {pin: 5, length: 16}, ],
	});	

	strip.on("ready", function() {

		strip.color("#000000"); // turns entire strip init
		strip.show();

		router.get('/', function(req, res, next) {
		  res.render('index', { title: 'Color Piezo' });
		});

		router.post('/eating', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						["E4", 1/2], 
						["A4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 200
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a test!'});
				  });
				// eating
			    strip.color("#ffffff"); // turns entire strip red using a hex colour
			    strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
		});

		router.post('/singing', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["E4", 1],
						[null, 1/4],
						["E4", 1],
						[null, 1],
						["E4", 1],
						[null, 1],
						["C4", 1],
						["E4",1],
						[null, 1],
						["G4", 1],
						[null, 1],
						[null, 1],
						[null, 1],
						["G3",1],
						[null,1],
						[null,1],
						[null, 1],
						["C4",1],
						[null, 1],
						[null, 1],
						["G3",1],
						[null,1],
						[null, 1],
						["E3",1],
						[null,1],
						[null, 1],
						["A3",1],
						[null, 1],
						["B3",1],
						[null, 1],
						["A#3", 1],
						["A3", 1],
						[null, 1],
						["G3", 4/3],
						["E4", 4/3],
						["G4", 4/3],
						["A4",1],
						[null, 1],
						["F4", 1],
						["G4",1],
						[null, 1],
						["E4",1],
						[null, 1],
						["C4", 1],
						["D4", 1],
						["B3",1],
						[null,1],
						[null, 1],
						["C4",1],
						[null,1],
						[null, 1],
						["G3", 1],
						[null, 1],
						[null, 1],
						["E3",1],
						[null,1],
						[null, 1],
						["A3",1],
						[null, 1],
						["B3",1],
						[null, 1],
						["A#3", 4/3],
						["A3",4/3],
						[null, 4/3],
						["G3", 1],
						["E4", 1],
						["G4", 1],
						["A4",1],
						[null, 1],
						["F4", 1],
						["G4", 1],
						[null, 1],
						["E4",1],
						[null, 1],
						["C4", 1],
						["D4", 1],
						["B3",1],
						[null,1],
						[null,1],
				    ],
				    tempo: 300
				  }, function() {
				  	// 播完 
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a test!'});
				  });
				// singing
				staticRainbow();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/tickling', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["C4",1],
						["C5",1],
						["A3",1],
						["A4",1],
						["A#3",1],
						["A#4",1],
						[null,1],
						[null,1],
						["C4",1],
						["C5",1],
						["A3",1],
						["A4",1],
						["A#3",1],
						["A#4",1],
						[null,1],
						[null,1],
						["F3",1],
						["F4",1],
						["D3",1],
						["D4",1],
						["D#3",1],
						["D#4",1],
						[null,1],
						[null,1],
						["F3",1],
						["F4",1],
						["D3",1],
						["D4",1],
						["D#3",1],
						["D#4",1],
						[null,1],
						[null,1],
						["D#4",3/4],
						["C#4",3/4],
						["D4",3/4],
						["C#4",1],
						["D#4",1],
						["D#4",1],
						["G#3",1],
						["G3",1],
						["C#4",1],
						["C4",1],
						["F#4",1],
						["F4",1],
						["E3",1],
						["A#4",1],
						["A4",1],
						["G#4",1],
						["D#4",1],
						["B3",1],
						["A#3",1],
						["A3",1],
						["G#3",1],
						[null,1],
						[null,1],
						[null,1],
				    ],
				    tempo: 200
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a test!'});
				  });
				// tickling
				strip.color("#ff0000"); // turns entire strip red using a hex colour
			    strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/flower', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["G3", 1],
						["E4", 1],
						["D4", 1],
						["E4", 1],
						["G3", 1],
						["C4", 1],
						["B3", 1],
						["A3", 3/4],
						[null, 1/4],
						["A3", 1],
						["D4", 1],
						["C4", 1],
						["D4", 1],
						["G3", 1],
						["C4", 1],
						["D4", 3/4],
						[null, 1/4],
						["D4", 3/4],
						[null, 1/4],
						["D4", 3/4],
						[null, 1/4],
						["D4", 1],
						["C4", 1],
						["E4", 1],
						["D4", 1],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a test!'});
				  });
				// flower, crying
					console.log(strip.stripLength());
				  	for (var i = strip.stripLength(); i >= 0; i--) {
				  		if (i<30 && i>=23) {
				  			// first eye
				  			p = strip.pixel(i);
				    		p.color("#0000FF");
				  		} else if ((i<5 && i>=0) || (i<16 && i>=14)) {
				  			// second eye
				  			p = strip.pixel(i);
				    		p.color("#0000FF");
				  		}
				    }
				    strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/do', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["C4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a do!'});
				  });

				strip.colour("red");
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
		});

		router.post('/re', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["D4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a re!'});
				  });

				strip.color([255, 80, 0]);
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/mi', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["E4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a mi!'});
				  });

				strip.colour("yellow");
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/fa', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["F4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a fa!'});
				  });

				strip.colour("green");
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/so', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["G4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a so!'});
				  });

				strip.colour("blue");
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/la', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["A4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a la!'});
				  });

				strip.color([80, 0, 255]);
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/si', function(req, res, next) {
			if (!isPlaying){
				isPlaying = true;
				piezo.play({
				    // song is composed by an array of pairs of notes and beats
				    // The first argument is the note (null means "no note")
				    // The second argument is the length of time (beat) of the note (or non-note)
				    song: [
						["B4", 1/2],
						[null, 1/2],
				    ],
				    tempo: 100
				  }, function() {
				  	// 播完
				  	isPlaying = false;
				  	strip.color("#000000"); // turns entire strip red using a hex colour
					strip.show();
				  	res.send({callback: 'you just send a si!'});
				  });

				strip.colour("purple");
				strip.show();
			} else {
				res.send({callback: 'busy!'});
			}
			
		});

		router.post('/', function(req, res, next) {
			console.log(req.body);
			var turnOff = 0;

			  // Plays a song
			  piezo.play({
			    // song is composed by an array of pairs of notes and beats
			    // The first argument is the note (null means "no note")
			    // The second argument is the length of time (beat) of the note (or non-note)
			    song: [
					["E4", 1/2], 
					["D4", 1/2], 
					["C4", 3/4],
					[null, 1/4], 
					["C4", 3/4], 
					[null, 1/4],
					["C4", 1], 
					["E3", 1/2], 
					["F3", 1/2], 
					["G3", 3/4],
					[null, 1/4], 
					["G3", 3/4], 
					[null, 1/4],
					["G3", 1], 
					["C4", 1/2],
					["D4", 1/2], 
					["E4", 3/4],
					[null, 1/4],
					["E4", 3/4],
					[null, 1/4],
					["E4", 1], 
					["C4", 1/2],
					["D4", 1/2],
					["E4", 1],
					["D4", 3/4],
					[null, 1/4],
					["D4", 1],
					["E4", 1/2],
					["D4", 1/2],
					["C4", 3/4],
					[null, 1/4],
					["C4", 3/4],
					[null, 1/4],
					["C4", 1],
					["E3", 1/2],
					["F3", 1/2],
					["G3", 3/4],
					[null, 1/4],
					["G3", 3/4],
					[null, 1/4],
					["G3", 1],
					[null, 1],
					["E4", 1/2],
					["G4", 1],
					["A4", 1/2],
					["E4", 1/4],
					["D4", 1/4],
					["C4", 1/4],
					["D4", 1/4],
					["E4", 1],
					["D4", 1],
					["C4", 1],
					[null, 1],
			    ],
			    tempo: 100
			  }, function() {
			  	// 播完
			  	clearInterval(foo); 
			  	strip.color("#000000"); // turns entire strip red using a hex colour
				strip.show();
			  	res.send({callback: 'you just send a test!'});
			  });

			

		    // cry

		    // var p;
		    // var blinkFlag = 0;
		    // while(turnOff <= 10) {
		    // 	if (blinkFlag === 0) {
				  //   setTimeout(function(){
				  
				  //   }, turnOf * 1000);
				  //   blinkFlag = 1;
		    // 	} else {
				  //   setTimeout(function(){
				  //   	for (var i = strip.stripLength() - strip.stripLength()/2 - 2; i >= 0; i--) {
			   //  			if (i % 2 != 0) {
			   //  				p = strip.pixel(i);
					 //    		p.color("#000000");
			   //  			} else {
			   //  				p = strip.pixel(i);
					 //    		p.color("#0000FF");
			   //  			}
					 //    }
				  //   	strip.show();
				  //   }, turnOf * 1000);
				  //   blinkFlag = 0;
		    // 	}
		    // 	turnOff++;
		    // }
		    

			// singing

			// eating
		});

	});
	function staticRainbow(){
        console.log('staticRainbow');

        var showColor;
        for(var i = 0; i < strip.stripLength(); i++) {
            showColor = colorWheel( ( i*256 / strip.stripLength() ) & 255 );
            strip.pixel( i ).color( showColor );
        }
        strip.show();
    }

    // Input a value 0 to 255 to get a color value.
    // The colours are a transition r - g - b - back to r.
    function colorWheel( WheelPos ){
        var r,g,b;
        WheelPos = 255 - WheelPos;

        if ( WheelPos < 85 ) {
            r = 255 - WheelPos * 3;
            g = 0;
            b = WheelPos * 3;
        } else if (WheelPos < 170) {
            WheelPos -= 85;
            r = 0;
            g = WheelPos * 3;
            b = 255 - WheelPos * 3;
        } else {
            WheelPos -= 170;
            r = WheelPos * 3;
            g = 255 - WheelPos * 3;
            b = 0;
        }
        // returns a string with the rgb value to be used as the parameter
        return "rgb(" + r +"," + g + "," + b + ")";
    }

});

module.exports = router;
