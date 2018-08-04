import { Component, OnInit } from '@angular/core';
import { Player } from './../Player'; 
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

	private addPlayerData = {};
	nationalities = ['Argentina','France','Portugal','Germany'];
	constructor(private playerService: PlayerService, private router: Router) { }

	ngOnInit() {
		
	}
	addPlayer(){
		
		this.playerService.addPlayer(this.addPlayerData)
		.subscribe(
			res=>
			{
				setTimeout(() => {
		        	this.router.navigate(['players'])
				}, 2000);
			}, 
			err => console.log("Error: "+err) 
		);
	}
}
