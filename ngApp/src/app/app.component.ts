import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'ngApp';
	constructor(private router: Router) { }

	getAllPlayers(){
		this.router.navigate(['players']);	
	}
	getBlack(){
		this.router.navigate(['rarity', "Black"]);		
	}
	getWhite(){
		this.router.navigate(['rarity', "White"]);		
	}
	getGold(){
		this.router.navigate(['rarity', "Gold"]);		
	}
	getSilver(){
		this.router.navigate(['rarity', "Silver"]);		
	}
	getBronze(){
		this.router.navigate(['rarity', "Bronze"]);		
	}
	
}
