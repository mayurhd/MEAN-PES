import { Component, OnInit, EventEmitter } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from './../Player'; 
import { Router } from '@angular/router';
import { PlayerDetailsService } from './../player-details.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

	Player: Array<Player> = []
	public selectedPlayer = new EventEmitter();
	sortOptions = ['Name A-Z', 'Name Z-A', 'Higher OPR first', 'Lower OPR first', 'Bronze balls', 'White balls']

	constructor( private playerService: PlayerService, private playerDetailsService:PlayerDetailsService , private router: Router) { }

	ngOnInit() {
		// console.log(Player);
		this.playerService.getPlayers()
		.subscribe(  
			res=> this.Player = res,
			err=> console.log(err)
		);

	}
	getBadgeColor(OPR){
 		if(OPR>=85){
 			return 'badge-dark'
 		}
 		if(OPR <= 84 && OPR >= 79){
 			return 'badge-warning';	
 		}
 		if( OPR <= 78 && OPR >= 72){
 			return 'badge-secondary';	
 		}
 		if(OPR <= 71 && OPR >= 64){
 			return 'badge-danger';	
 		}
 		if(OPR <= 63){
 			return 'badge-none';	
 		}
 		
 	}
	// selectPlayer(player: Player){
	// 	this.playerDetailsService.toDetailService(player);
	// 	this.router.navigate(['/playerData']);
	// }
	getPlayer(playerId){
		this.router.navigate(['/player', playerId]);
	}
}
