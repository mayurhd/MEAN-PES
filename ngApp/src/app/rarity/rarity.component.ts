import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';
import { Player } from './../Player'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rarity',
  templateUrl: './rarity.component.html',
  styleUrls: ['./rarity.component.css']
})
export class RarityComponent implements OnInit {

	Players: Array<Player> = []
	public rarity;
	constructor(
		private playerService: PlayerService, 
		private route: ActivatedRoute, 
		private router: Router
	) { }

	ngOnInit() {
		this.rarity = this.route.snapshot.paramMap.get('rarity');
		this.playerService.getRarity(this.rarity)
			.subscribe(
				res => {
					this.Players = res;
					console.log("Player received: "+this.Players);
				},
				err => console.log("Error occured: "+err)
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
	getPlayer(playerId){
		this.router.navigate(['/player', playerId]);
	}

}
