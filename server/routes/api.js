const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');

const db = 'mongodb://mayurhd:Mayur%40mlab123@ds047124.mlab.com:47124/pesdb';

mongoose.connect(db, { useNewUrlParser: true }, function(err){
	if (err) { console.log("Error connecting database: "+err); } 
	else { console.log("Database connection successful."); }
})

router.get('/', function(req, res){
	res.send("API route")
})

router.get('/allPlayers', function(req, res){
	 Player.find({}, {}, {sort: '-OPR'}, function(err, players){
    	if (err) {
    		console.log(err); 
    	}
    	else{
    		res.json(players);
    	}
    });
})

// router.get('/allPlayers', function(req, res){
// 	 Player.find().sort({OPR: -1}).exec( function(err, players){
//     	if (err) {
//     		console.log(err); 
//     	}
//     	else{
//     		res.json(players);
//     	}
//     });
// })

router.get('/getPlayer/:id', function(req, res){
	 Player.findById(req.params.id, function(err, player){
    	if (err) {
    		console.log(err); 
    	}
    	else{
    		res.json(player);
    	}
    });
})
router.get('/goldPlayers', function(req, res){
	Player.find({'rarity':'Gold'}, function(err, players){
    	if (err) {
    		console.log(err); 
    	}
    	else{
    		res.json(players);
    	}
    });
})
router.get('/getPlayers/:rarity', function(req, res){
	Player.find({'rarity':req.params.rarity}, function(err, players){
    	if (err) {
    		console.log(err); 
    	}
    	else{
    		res.json(players);
    	}
    });
})

function getRarity(OPR){
	if(OPR >= 85){
		return "Black";
	}
	if(OPR >= 79 && OPR <= 84){
		return "Gold";
	}
	if(OPR >= 72 && OPR <= 78){
		return "Silver";
	}
	if(OPR >= 64 && OPR <= 71){
		return "Bronze";
	}
	if(OPR <= 63){
		return "White";
	}
}
router.post('/addPlayer', function(req, res){

	const playerData = new Player(req.body)
	playerData.rarity =  getRarity(playerData.OPR)

 	playerData.save(function(err, player){
    	err? console.log(err): res.json(player);
    });

	// for(var key in req.body) {
	// 	if(req.body.hasOwnProperty(key)){
	// 		const playerData = new Player(req.body[key])
	// 	 	playerData.save(function(err, player){
	// 	    	if (err) {
	// 	    		console.log(err); 
	// 	    	}
	// 	    	else{
	// 	    		res.json(player);
	// 	    	}
	// 	    });
	// 	}
	// }	
})
//Model.findByIdAndUpdate(id, { $set: { name: 'jason bourne' }}, options, callback)
router.put('/updatePlayer/:id', function(req, res){
	Player.findByIdAndUpdate(
		req.params.id, 
		{
			$set: {name: req.body.name, OPR: req.body.OPR, club: req.body.club, nationality: req.body.nationality, rarity: getRarity(req.body.OPR) }}, 
		{
			new: true
		},
		function(err, updatedPlayer){
			if (err) {
				res.send("Update error")
			} else {
				// res.status(200).send(updatedPlayer)
				res.json(updatedPlayer)
			}
		}
	);
})
router.delete('/deletePlayer/:id', function(req, res){
	Player.findByIdAndRemove( req.params.id, function(err, deletedPlayer){
			if (err) {
				res.send("Update error")
			} else {
				// res.status(200).send(updatedPlayer)
				res.json(deletedPlayer)
			}
		}
	);
})
//update all fields at once
// router.put('/putPlayer2/:id', function(req, res){

// 	Player.findOne({id: req.params.id}, function (err, updatedPlayer){
// 		if (err) {
// 			res.send('Requested document does not exist.');
// 		} else {
// 			//update fields
// 			if (req.body !== undefined) {
// 				updatedPlayer = req.body;
// 				// updatedPlayer.save();
// 				res.status(200).send("Update success.");
// 			} else{
// 				res.send("Update failed.");
// 			}		
// 		}
// 	});
// });

// {
//     "_id": {
//         "$oid": "5b487d3b605cdb0a3c836094"
//     },
//     "name": "S. Umtit",
//     "OPR": 80,
//     "club": "FC BARCELONA",
//     "nationality": "France",
//     "rarity": "Gold",
//     "__v": 0
// }
router.delete('/deletePlayer/:id', function(req, res){
	console.log("Delete method called.");
	Player.findByIdAndRemove( req.params.id,
		function(err, deletedPlayer){
			if (err) {
				res.send("Delete error: "+err)
			} else if (deletedPlayer!==null) {
				res.status(200).send("Player "+deletedPlayer+" deleted successfully.")
			}
			else{
				res.send("Player does not exist.")	
			}
		}
	);
})

module.exports = router